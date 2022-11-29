import { useContext, useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Login } from "./pages/Login/Login";
import { NotFound } from "./pages/NotFound/NotFound";
import { DashboardAdmin } from "./pages/DashboardAdmin/DashboardAdmin";
import { DashboardGestor } from "./pages/DashboardGestor/DashboardGestor";
import { DashboardInstrutor } from "./pages/DashboardInstrutor/DashboardInstrutor";
import { CadastrarAluno } from "./pages/CadastrarAluno/CadastrarAluno";
import { CadastrarColaborador } from "./pages/CadastrarColaborador/CadastrarColaborador";
import { RedefinirSenha } from "./pages/RedefinirSenha/RedefinirSenha";
import { AlterarSenha } from "./pages/AlterarSenha/AlterarSenha";
import { EditarColaborador } from "./pages/EditarColaborador/EditarColaborador";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthContext, AuthProvider } from "./context/AuthContext";

function AppRoutes() {
  const [teste,setTeste] = useState<string>()
  const { cargo } = useContext(AuthContext);

  useEffect(()=>{
    setTeste(cargo)
  },[cargo])

  if(teste === "ROLE_ADMIN"){
    return (
      <>
        <BrowserRouter>
          <ToastContainer />
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/dashboard/admin" element={<DashboardAdmin />} />
              <Route path="/cadastrar-colaborador" element={<CadastrarColaborador />} />
              <Route path="/editar-colaborador" element={<EditarColaborador />} />
              <Route path="/alterar-senha" element={<AlterarSenha />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </>
    );
  } else if("ROLE_GESTOR"){
    return (
      <>
        <BrowserRouter>
          <ToastContainer />
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/dashboard/gestor" element={<DashboardGestor />} />
              <Route path="/cadastrar-aluno" element={<CadastrarAluno />} />
              <Route path="/alterar-senha" element={<AlterarSenha />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </>
    );
  } else if("ROLE_INSTRUTOR"){
    return (
      <>
        <BrowserRouter>
          <ToastContainer />
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/dashboard/instrutor" element={<DashboardInstrutor />} />
              <Route path="/cadastrar-aluno" element={<CadastrarAluno />} />
              <Route path="/alterar-senha" element={<AlterarSenha />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </>
    );
  } else {
    return (
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route index element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/redefinir-senha" element={<RedefinirSenha />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default AppRoutes;
