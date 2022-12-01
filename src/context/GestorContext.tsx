import { createContext, useState } from "react";
import { API } from "../utils/api";
import { ICriarAcompanhamento, IChildren, IGestor, ICriarAvaliacao } from "../utils/interface";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { toastConfig } from "../utils/toast";
import nProgress from "nprogress";

export const GestorContext = createContext({} as IGestor);

export const GestorProvider = ({children} : IChildren) =>{
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [acompanhamento,setAcompanhamento] = useState<ICriarAcompanhamento[]>([])

  const criarAcompanhamento = async (acompanhamento: ICriarAcompanhamento) =>{
    try {
      nProgress.start()
      API.defaults.headers.common["Authorization"] = token;
      await API.post("/acompanhamento/cadastrar-acompanhamento",acompanhamento)
      navigate("/lista-acompanhamento")
      toast.success("Acompanhamento cadastrado com sucesso!", toastConfig);
    } catch (error) {
      toast.error("Campo nulo, ou preenchido de forma incorreta, tente de novo.", toastConfig);
    } finally{
      nProgress.done()
    }
  }

  const pegarAcompanhamento = async() =>{
    try {
      nProgress.start()
      API.defaults.headers.common["Authorization"] = token;
      const {data} =await API.get("/acompanhamento/listar-acompanhamento?page=0&size=10")
      setAcompanhamento(data.elementos)
    } catch (error) {
      toast.error("Você não possui credenciais para acessar essas informações.", toastConfig);
    } finally {
      nProgress.done()
    }
  }

  const criarAvaliacao = async (avalicao: ICriarAvaliacao) => {
    try {
      nProgress.start()
      API.defaults.headers.common["Authorization"] = token;
      await API.post("/avaliacao-acompanhamento/cadastrar-avaliacao",avalicao)
      navigate("/dashboard/gestor")
      toast.success("Avaliação cadastrado com sucesso!", toastConfig);
    } catch (error) {
      toast.error("Campo nulo, ou preenchido de forma incorreta, tente de novo.", toastConfig);
    } finally{
      nProgress.done()
    }
  }

  return (
    <GestorContext.Provider value={{ criarAcompanhamento, pegarAcompanhamento, acompanhamento,criarAvaliacao }}>
      {children}
    </GestorContext.Provider>
  );
}
