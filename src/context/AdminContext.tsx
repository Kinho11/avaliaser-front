import { createContext, useState } from "react";

import nProgress from 'nprogress';
import { toast } from "react-toastify";
import { toastConfig } from "../utils/toast";

import { API } from "../utils/api";
import { IAdmin, IChildren, IPegarColaborador, IUserColaborador } from "../utils/interface";
import { useNavigate } from "react-router-dom";

export const AdminContext = createContext({} as IAdmin);

export const AdminProvider = ({ children }: IChildren) =>{
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const [colaborador,setColaborador] = useState<IPegarColaborador[]>([])
  
  const criarColaborador = async(userColaborador: IUserColaborador) =>{
    try {
      nProgress.start();
      API.defaults.headers.common["Authorization"] = token;
      await API.post(`/administrador/cadastrar-usuario?cargo=${userColaborador.cargo}`,userColaborador)
      navigate("/dashboard/admin")
      toast.success("Colaborador cadastrado com sucesso!", toastConfig);
    } catch (error) {
      toast.error("Campo nulo, ou preenchido de forma incorreta, tente de novo.", toastConfig);
    } finally{
      nProgress.done();
    }
  }

  const pegarColaborador = async() =>{
    try {
      nProgress.start();
      API.defaults.headers.common["Authorization"] = token;
      const { data } = await API.get(`/administrador/listar-usuarios?paginaQueEuQuero=0&tamanhoDeRegistrosPorPagina=50`)
      setColaborador(data.elementos)
    } catch (error) {
      toast.error("Houve algum erro", toastConfig);
    } finally{
      nProgress.done();
    }
  }


  return (
    <AdminContext.Provider value={{criarColaborador,pegarColaborador,colaborador}}>
      {children}
    </AdminContext.Provider>
  );
}