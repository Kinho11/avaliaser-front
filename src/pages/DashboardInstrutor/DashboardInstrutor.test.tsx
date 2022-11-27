import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { DashboardInstrutor } from "./DashboardInstrutor";

test("Verifica se existe o titulo Dashboard Feedback", () => {
  render(<Router><DashboardInstrutor /></Router>);

  const titulo = screen.getByText("Dashboard Feedback");
  expect(titulo).toBeInTheDocument();
});

test("Verifica se existe a tabela de feedbacks", () => {
  render(<Router><DashboardInstrutor /></Router>);

  const tabela = screen.getByRole("table");
  expect(tabela).toBeInTheDocument();
});

test("Verifica se existe o botão de Dashboard", () => {
  render(<Router><DashboardInstrutor /></Router>);

  const botaoDashboard = screen.getByRole("button", { name: "Dashboard" });
  expect(botaoDashboard).toBeInTheDocument();
});

test("Verifica se existe o botão de Cadastrar Aluno", () => {
  render(<Router><DashboardInstrutor /></Router>);

  const botaoAluno = screen.getByRole("button", { name: "Cadastrar aluno" });
  expect(botaoAluno).toBeInTheDocument();
});

test("Verifica se existe o botão de Cadastrar Feedback", () => {
  render(<Router><DashboardInstrutor /></Router>);

  const botaoFeedback = screen.getByRole("button", { name: "Cadastrar feedback" });
  expect(botaoFeedback).toBeInTheDocument();
});