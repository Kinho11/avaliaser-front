import { useState } from "react";
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

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "./context/AuthContext";

function AppRoutes() {
  const [cargo] = useState("admin");

  if(cargo === "admin"){
    return (
      <>
        <BrowserRouter>
          <ToastContainer />
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/dashboard/admin" element={<DashboardAdmin />} />
              <Route path="/cadastrar-colaborador" element={<CadastrarColaborador/>} />
              <Route path="/alterar-senha" element={<AlterarSenha />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </>
    );
  } else if(cargo === "gestor"){
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
  } else if(cargo === "instrutor"){
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
