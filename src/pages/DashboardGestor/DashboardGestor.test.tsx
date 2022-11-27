import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { DashboardGestor } from "./DashboardGestor";

test("Verifica se existe o titulo Dashboard Acompanhamentos", () => {
  render(<Router><DashboardGestor /></Router>);

  const titulo = screen.getByText("Dashboard Acompanhamentos");
  expect(titulo).toBeInTheDocument();
});

test("Verifica se existe a tabela de acompanhamentos", () => {
  render(<Router><DashboardGestor /></Router>);

  const tabela = screen.getByRole("table");
  expect(tabela).toBeInTheDocument();
});

test("Verifica se existe o botão de Dashboard", () => {
  render(<Router><DashboardGestor /></Router>);

  const botaoDashboard = screen.getByRole("button", { name: "Dashboard" });
  expect(botaoDashboard).toBeInTheDocument();
});

test("Verifica se existe o botão de Cadastrar Aluno", () => {
  render(<Router><DashboardGestor /></Router>);

  const botaoDashboard = screen.getByRole("button", { name: "Cadastrar aluno" });
  expect(botaoDashboard).toBeInTheDocument();
});

test("Verifica se existe o botão de Cadastrar Acompanhamento", () => {
  render(<Router><DashboardGestor /></Router>);

  const botaoDashboard = screen.getByRole("button", { name: "Cadastrar acompanhamento" });
  expect(botaoDashboard).toBeInTheDocument();
});