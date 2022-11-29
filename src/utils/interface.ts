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
  usuarioLogin: (infoUser: IUsuario) => Promise<void>,
  tokenAuth: string | null,
  usuarioLogado: IUsuarioLogado,
}

export interface IAdmin{
  criarColaborador: (userColaborador: IUserColaborador) => Promise<void>,
  pegarColaborador: () => Promise<void>,
  colaborador: IPegarColaborador[]
}

export interface IChildren {
  children: React.ReactNode;
}

export interface IUsuario {
  email: string,
  senha: string
}

export interface IUsuarioLogado {
  idUsuario: number,
  nome: string,
  email: string,
  foto: string | null,
  cargo: string
}

export interface IUserColaborador{
  nome: string,
  email: string,
  cargo: string

}

export interface IPegarColaborador{
  idUsuario: number,
  nome: string,
  email: string,
  foto: string,
  cargo: string
}