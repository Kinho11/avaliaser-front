import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { Login } from "./Login";

test("Verifica se existe o titulo Avalia Ser", () => {
  render(<Router><Login /></Router>);

  const titulo = screen.getByText("AvaliaSer");
  expect(titulo).toBeInTheDocument();
});

test("Verifica se existe o subtitulo Faça seu login", () => {
  render(<Router><Login /></Router>);

  const subtitulo = screen.getByText("Faça seu login!");
  expect(subtitulo).toBeInTheDocument();
});

test("Verifica se existe o input de email", () => {
  render(<Router><Login /></Router>);

  const inputEmail = screen.getByLabelText("Email");
  expect(inputEmail).toBeInTheDocument();
});

test("Verifica se existe o input de senha", () => {
  render(<Router><Login /></Router>);

  const inputSenha = screen.getByLabelText("Senha");
  expect(inputSenha).toBeInTheDocument();
});

test("Verifica se existe o botão para entrar", () => {
  render(<Router><Login /></Router>);

  const botaoEntrar = screen.getByRole("button", { name: "Entrar" });
  expect(botaoEntrar).toBeInTheDocument();
});