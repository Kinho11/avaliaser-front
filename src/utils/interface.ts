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
  redefinirSenha: (email: string) => Promise<void>,
  usuarioLogout: () => void,
  tokenAuth: string | null,
  usuarioLogado: any | undefined
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