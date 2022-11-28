import { createContext, useState } from "react";

import { IAuth, IChildren, IUsuario, IUsuarioLogado } from "../utils/interface";

import nProgress from 'nprogress';
import { toast } from "react-toastify";
import { toastConfig } from "../utils/toast";

import { API } from "../utils/api";

export const AuthContext = createContext({} as IAuth);

export const AuthProvider = ({ children }: IChildren) => {
  const [tokenAuth, setTokenAuth] = useState<string>(localStorage.getItem("token") || "");
  const [usuarioLogado, setUsuarioLogado] = useState<IUsuarioLogado>();
  const [cargo, setCargo] = useState<string>("");

  const usuarioLogin = async (infoUser: IUsuario) => {
    try {
      nProgress.start();
      const { data } = await API.post("/auth/login", infoUser);
      localStorage.setItem("token", data);
      setTokenAuth(data);
      toast.success("Seja bem-vindo(a)", toastConfig);
      infosUsuarioLogado();
    } catch (error) {
      toast.error("Email ou senha incorretos. Login não concluído.", toastConfig);
    } finally {
      nProgress.done();
    }
  }

  const infosUsuarioLogado = async () => {
    try {
      nProgress.start();
      API.defaults.headers.common["Authorization"] = localStorage.getItem("token");
      const { data } = await API.get("/auth/usuario-logado");
      toast.success("Funcionou", toastConfig);	
      setUsuarioLogado(data);
      setCargo(data.cargo);
    } catch (error) {
      toast.error("Não foi possivel verificar o usuario logado. Verifique se realizou o login.", toastConfig);
    } finally {
      nProgress.done();
    }
  };

  return (
    <AuthContext.Provider value={{ tokenAuth, usuarioLogin, infosUsuarioLogado, usuarioLogado, cargo }}>
      {children}
    </AuthContext.Provider>
  );
};