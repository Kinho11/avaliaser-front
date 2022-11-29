import { createContext, useState } from "react";

import nProgress from 'nprogress';
import { toast } from "react-toastify";
import { toastConfig } from "../utils/toast";

import { API } from "../utils/api";
import { IAdmin, IChildren, IColaboradorEditado, IPegarColaborador, IUserColaborador } from "../utils/interface";
import { useNavigate } from "react-router-dom";

export const AdminContext = createContext({} as IAdmin);

export const AdminProvider = ({ children }: IChildren) =>{
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [colaborador, setColaborador] = useState<IPegarColaborador[]>([])
  const [idColaboradorCadastrado, setIdColaboradorCadastrado] = useState<number>();
  
  const criarColaborador = async(userColaborador: IUserColaborador) => {
    try {
      nProgress.start();
      API.defaults.headers.common["Authorization"] = token;
      const { data } = await API.post(`/administrador/cadastrar-usuario?cargo=${userColaborador.cargo}`, userColaborador)
      setIdColaboradorCadastrado(data.idUsuario);
      navigate("/dashboard/admin")
      toast.success("Colaborador cadastrado com sucesso!", toastConfig);
    } catch (error) {
      toast.error("Campo nulo, ou preenchido de forma incorreta, tente de novo.", toastConfig);
    } finally{
      nProgress.done();
    }
  }

  const editarColaborador = async (dadosEditados: IColaboradorEditado, id: number, imagem: FileList | undefined) => {
    try {
      nProgress.start();
      API.defaults.headers.common["Authorization"] = token;
      await API.put(`/administrador/atualizar-usuario/${id}`, dadosEditados);
      navigate("/dashboard/admin")
      toast.success("Colaborador editado com sucesso!", toastConfig);

      if(imagem){
        await API.put(`/administrador/upload-imagem/${id}`, imagem, { 
          headers: { Authorization: localStorage.getItem("token") }
         }).then((response) => {
          console.log(response.data)
        })
      }
    } catch (error) {
      toast.error("Campo nulo, ou preenchido de forma incorreta, tente de novo.", toastConfig);
    } finally {
      nProgress.done();
    }
  }

  const enviarFotoColaborador = async (imagem: FileList) => {
    try {
      nProgress.start();
      API.defaults.headers.common["Authorization"] = token;
      await API.put(`/administrador/upload-imagem/${idColaboradorCadastrado}?idUsuario=${idColaboradorCadastrado}`, imagem)
      toast.success("Foto enviada com sucesso", toastConfig);
    } catch (error) {
      toast.error("Foto não enviada", toastConfig)
    } finally {
      nProgress.done();
    }
  }

  const getID = async () => {
    try {
      API.defaults.headers.common["Authorization"] = token;
      const { data } = await API.get("/administrador/usuario/3")
      localStorage.setItem("teste", JSON.stringify(data));
    } catch (error) {
      toast.error("deu erro");
    }
  }

  const pegarColaborador = async () => {
    try {
      nProgress.start();
      API.defaults.headers.common["Authorization"] = token;
      const { data } = await API.get(`/administrador/listar-usuarios?paginaQueEuQuero=0&tamanhoDeRegistrosPorPagina=10`)
      setColaborador(data.elementos)
    } catch (error) {
      toast.error("Houve algum erro", toastConfig);
    } finally{
      nProgress.done();
    }
  }

  const deletarColaborador = async (id: number) => {
    try {
      nProgress.start();
      API.defaults.headers.common["Authorization"] = token;
      await API.delete(`/administrador/delete/${id}`);
      toast.success("Usuario desativado com sucesso.", toastConfig);
      pegarColaborador()
    } catch (error) {
      toast.error('Você não tem autorização para remover este usuario.', toastConfig);
    } finally {
      nProgress.done();
    }
  }

  return (
    <AdminContext.Provider value={{ criarColaborador, pegarColaborador, colaborador, deletarColaborador, enviarFotoColaborador, editarColaborador, getID }}>
      {children}
    </AdminContext.Provider>
  );
}