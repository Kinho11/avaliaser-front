import { createContext, useState } from "react";

import { IAuth, IChildren, ISenhas, IUsuario, IUsuarioLogado } from "../utils/interface";

import nProgress from 'nprogress';
import { toast } from "react-toastify";
import { toastConfig } from "../utils/toast";

import { API } from "../utils/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({} as IAuth);

export const AuthProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();
  const [tokenAuth, setTokenAuth] = useState<string>(localStorage.getItem("token") || "");
  const [usuarioLogado, setUsuarioLogado] = useState<IUsuarioLogado>({
    cargo: "", idUsuario: 0, email: "", foto: "", nome: ""
  });

  const usuarioLogin = async (infoUser: IUsuario) => {
    try {
      nProgress.start();
      const { data } = await API.post("/auth/login", infoUser);
      localStorage.setItem("token", data);
      toast.success("Seja bem-vindo(a)", toastConfig);
      setTokenAuth(data);
      await API.get("/auth/usuario-logado", { 
        headers: { Authorization: localStorage.getItem("token") }
       }).then((response) => {
        setUsuarioLogado(response.data)
        localStorage.setItem("infoUsuario", JSON.stringify(response.data));
        const cargoSplitado = response.data.cargo.split("_")[1].toLowerCase();
        navigate(`/dashboard/${cargoSplitado}`);
      })
    } catch (error) {
      toast.error("Email ou senha incorretos. Login não concluído.", toastConfig);
    } finally {
      nProgress.done();
    }
  }

  const usuarioLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('infoUsuario');
    setTokenAuth('');
  };

  const trocarSenhaLogado = async (senhas: ISenhas) => {
    try {
      nProgress.start();
      await API.put("/auth/alterar-senha-usuario-logado", senhas, { 
        headers: { Authorization: localStorage.getItem("token") }
       }).then((response) => {
        console.log(response.data)
        toast.success("Senha atualizada com sucesso.", toastConfig)
      })
    } catch (error) {
      toast.error("Houve um erro", toastConfig)
    } finally {
      nProgress.done();
    }
  }

  const redefinirSenha = async (email: string) => {
    try {
      nProgress.start()
      await API.post(`/auth/recuperar-senha?email=${email}`, email, { 
        headers: { Authorization: localStorage.getItem("token") }
       }).then((response) => {
        toast.success("Recuperação de senha realizada com sucesso.", toastConfig);
      });
    } catch (error) {
      toast.error("Email incorreto! Não será possivel continuar com a recuperação de senha!", toastConfig);
    } finally {
      nProgress.done()
    }
  }

  return (
    <AuthContext.Provider value={{ tokenAuth, usuarioLogin, usuarioLogado, redefinirSenha, usuarioLogout, trocarSenhaLogado }}>
      {children}
    </AuthContext.Provider>
  );
};