import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { DashboardAdmin } from "./DashboardAdmin";

test("Verifica se existe o titulo Dashboard Colaboradores", () => {
  render(<Router><DashboardAdmin /></Router>);

  const titulo = screen.getByText("Dashboard Colaboradores");
  expect(titulo).toBeInTheDocument();
});

test("Verifica se existe a tabela de colaboradores", () => {
  render(<Router><DashboardAdmin /></Router>);

  const tabela = screen.getByRole("table");
  expect(tabela).toBeInTheDocument();
});

test("Verifica se existe o botão de Dashboard", () => {
  render(<Router><DashboardAdmin /></Router>);

  const botaoDashboard = screen.getByRole("button", { name: "Dashboard" });
  expect(botaoDashboard).toBeInTheDocument();
});

test("Verifica se existe o botão de Cadastrar Colaborador", () => {
  render(<Router><DashboardAdmin /></Router>);

  const botaoDashboard = screen.getByRole("button", { name: "Cadastrar colaborador" });
  expect(botaoDashboard).toBeInTheDocument();
});