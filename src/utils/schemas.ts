import * as  yup from "yup";

export const userSchema = yup.object().shape({
  email: yup
    .string()
    .required("Por favor, digite seu e-mail")
    .email("Por favor, digite um e-mail válido"),
  senha: yup
    .string()
    .required("Por favor, digite sua senha")
    .min(3, "A senha deve ter no mínimo 3 caracteres")
});

export const alunoSchema = yup.object().shape({
  nomeCompletoAluno: yup
    .string()
    .required("Por favor, digite seu nome completo").min(3,"O nome deve conter no mínimo 3 caracteres"),
  emailAluno: yup
    .string()
    .required("Por favor, digite seu e-mail")
    .email("Por favor, digite um e-mail válido"),
  selectAluno: yup
    .string()
    .required("Por favor, escolha uns dos tipos de trilha."),
});

export const colaboradorSchema = yup.object().shape({
  nome: yup
    .string()
    .required("Por favor, digite seu nome completo").min(3,"O nome deve conter no mínimo 3 caracteres"),
  email: yup
    .string()
    .required("Por favor, digite seu e-mail")
    .email("Por favor, digite um e-mail válido"),
  cargo: yup
    .string()
    .required("Por favor, escolha uns dos tipos de perfil.").nullable(),
});


export const redefinirSenhaSchema = yup.object().shape({
  novaSenha: yup.string().required("Por favor, digite sua nova senha").min(3,"A nova senha deve conter no mínimo 3 caracteres"),
  confirmarNovaSenha: yup.string().required("Por favor, confirme sua nova senha.").oneOf([yup.ref("novaSenha")],"As senhas devem corresponder!")
});

export const AlterarSenhaSchema = yup.object().shape({
  senhaAntiga: yup.string().required("Por favor, digite sua antiga senha").min(3,"A nova senha deve conter no mínimo 3 caracteres"),
  novaSenha: yup.string().required("Por favor, digite sua nova senha").min(3,"A nova senha deve conter no mínimo 3 caracteres"),
  confirmarNovaSenha: yup.string().required("Por favor, confirme sua nova senha.").oneOf([yup.ref("novaSenha")],"As senhas devem corresponder!")
});


export const CadastrarAcompanhamentoSchema = yup.object().shape({
  descricao: yup.string().required("Por favor, digite alguma coisa na descrição"),
  data: yup.string().required("Por favor, escolha uma data inicial")
})