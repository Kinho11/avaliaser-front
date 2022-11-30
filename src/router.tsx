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
import { CadastrarAcompanhamento } from "./pages/CadastrarAcompanhamento/CadastrarAcompanhamento";
import { Intermediaria } from "./pages/Intermediaria/Intermediaria";
import { VerificarAluno } from "./pages/VerificarAluno/VerificarAluno";
import { AvaliarAcompanhamento } from "./pages/AvaliarAcompanhamento/AvaliarAcompanhamento";
import { CadastrarFeedback } from "./pages/CadastrarFeedback/CadastrarFeedback";

import { RotaPrivada } from "./components/RotasPrivadas/RotasPrivadas";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'nprogress/nprogress.css';

import { AuthProvider } from "./context/AuthContext";
import { AdminProvider } from "./context/AdminContext";
import { AlunoProvider } from "./context/AlunoContext";

function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <AuthProvider>
          <AdminProvider>
          <AlunoProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="*" element={<NotFound />} />
              {/* Redefinir senha com token e email */}
              <Route path="/redefinir-senha" element={<RedefinirSenha />} />
              <Route path="/intermediaria" element={<Intermediaria/>}/>

              <Route element={<RotaPrivada />}>
                {/* Rotas admin */}
                <Route path="/dashboard/admin" element={<DashboardAdmin />} />
                <Route path="/cadastrar-colaborador" element={<CadastrarColaborador />} />
                <Route path="/editar-colaborador" element={<EditarColaborador />} />

                {/* Rotas Gestor */}
                <Route path="/dashboard/gestor" element={<DashboardGestor />} />
                <Route path="/cadastrar-aluno" element={<CadastrarAluno />} />
                <Route path="/cadastrar-acompanhamento" element={<CadastrarAcompanhamento/>}/>
                <Route path="/avaliar-acompanhamneto" element={<AvaliarAcompanhamento/>} />

                {/* Rotas Instrutor */}
                <Route path="/dashboard/instrutor" element={<DashboardInstrutor />} />
                <Route path="/cadastrar-aluno" element={<CadastrarAluno />} />
                <Route path="/cadastrar-feedback" element={<CadastrarFeedback/>}/>
                <Route path="/verificar-aluno" element={<VerificarAluno />} />

                {/* Trocar senha logado */}
                <Route path="/alterar-senha" element={<AlterarSenha />} />
                <Route path="/recuperar-senha" element={<Intermediaria />} />
              </Route>
            </Routes>
          </AlunoProvider>
          </AdminProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default AppRoutes;
