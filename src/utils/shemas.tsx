import * as  yup from "yup";

export const userSchema = yup.object().shape({
  email: yup
    .string()
    .required("Por favor, digite seu e-mail")
    .email("Por favor, digite um e-mail válido"),
  senha: yup
    .string()
    .required("Por favor, digite sua senha")
    .min(3, "A senha deve ter no mínimo 3 caracteres"),
});