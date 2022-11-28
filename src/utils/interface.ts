export interface ILogin {
  password: string,
  showPassword: boolean,
}

export interface IHeaderProps {
  nome: string,
  cargo: string,
  avatar?: string
}

export interface IAuth {
  cargo: string
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IUsuario {
  email: string,
  senha: string
}