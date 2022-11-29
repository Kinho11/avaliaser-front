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

import { AuthProvider } from "./context/AuthContext";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/alterar-senha" element={<AlterarSenha />} />
            <Route path="/redefinir-senha" element={<RedefinirSenha />} />

            {/* Rotas admin */}
            <Route path="/dashboard/admin" element={<DashboardAdmin />} />
            <Route path="/cadastrar-colaborador" element={<CadastrarColaborador />} />
            <Route path="/editar-colaborador" element={<EditarColaborador />} />
            
            {/* Rotas Gestor */}
            <Route path="/dashboard/gestor" element={<DashboardGestor />} />
            <Route path="/cadastrar-aluno" element={<CadastrarAluno />} />

            {/* Rotas Instrutor */}
            <Route path="/dashboard/instrutor" element={<DashboardInstrutor />} />
            <Route path="/cadastrar-aluno" element={<CadastrarAluno />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
