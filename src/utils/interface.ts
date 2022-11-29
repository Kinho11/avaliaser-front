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

export interface IAdmin{
  criarColaborador: (userColaborador: IUserColaborador) => Promise<void>,
  deletarColaborador: (id: number) => Promise<void>,
  enviarFotoColaborador: (imagem: FileList) => Promise<void>,
  pegarColaborador: () => Promise<void>,
  editarColaborador: (dadosEditados: IColaboradorEditado, id: number, imagem: FileList | undefined) => Promise<void>,
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

export interface IColaboradorEditado {
  nome: string,
  email: string
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