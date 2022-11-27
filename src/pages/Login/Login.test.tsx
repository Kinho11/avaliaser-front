import { render, screen } from "@testing-library/react";

import { Login } from "./Login";

test("Verifica se existe o titulo Avalia Ser", () => {
  render(<Login />);

  const titulo = screen.getByText("AvaliaSer");
  expect(titulo).toBeInTheDocument();
});

test("Verifica se existe o subtitulo Faça seu login", () => {
  render(<Login />);

  const subtitulo = screen.getByText("Faça seu login!");
  expect(subtitulo).toBeInTheDocument();
});

test("Verifica se existe o input de email", () => {
  render(<Login />);

  const inputEmail = screen.getByLabelText("Email");
  expect(inputEmail).toBeInTheDocument();
});

test("Verifica se existe o input de senha", () => {
  render(<Login />);

  const inputSenha = screen.getByLabelText("Senha");
  expect(inputSenha).toBeInTheDocument();
});

test("Verifica se existe o botão para entrar", () => {
  render(<Login />);

  const botaoEntrar = screen.getByRole("button", { name: "Entrar" });
  expect(botaoEntrar).toBeInTheDocument();
});