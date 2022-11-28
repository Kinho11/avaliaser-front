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

export interface TChildren {
  children: React.ReactNode;
}