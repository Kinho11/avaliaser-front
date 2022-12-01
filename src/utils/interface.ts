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
  trocarSenhaLogado: (senhas: ISenhas) => Promise<void>,
  recuperarSenha: (senha: string) => Promise<void>,
  editarPerfil: (nome: IEditarNome) => Promise<void>,
  tokenAuth: string | null,
  usuarioLogado: any | undefined
}

export interface IEditarNome {
  nome: string
}

export interface IAdmin{
  criarColaborador: (userColaborador: IUserColaborador, imagem: FormData) => Promise<void>,
  deletarColaborador: (id: number) => Promise<void>,
  pegarColaborador: () => Promise<void>,
  editarColaborador: (dadosEditados: IColaboradorEditado, id: number, imagem: FormData) => Promise<void>,
  colaborador: IPegarColaborador[]
}

export interface IAluno {
  getAlunos: () => Promise<void>,
  deletarAluno: (id: number) => Promise<void>,
  criarAluno: (infosAluno: ICadastroAluno, imagem: FormData) => Promise<void>,
  alunos: IAlunosCadastrados[]
}

export interface IGestor{
  criarAcompanhamento: (acompanhamento: ICriarAcompanhamento) => Promise<void>,
  pegarAcompanhamento: () => Promise<void>
  acompanhamento: ICriarAcompanhamento[]
  criarAvaliacao: (avalicao: ICriarAvaliacao) => void
}

export interface IInstrutor{
  cadastrarFeedback: (feedbacks: ICadastrarFeedback) => Promise<void>,
  pegarFeedback: () => Promise<void>,
  feedback: ICadastrarFeedback[]
  editarFeedback: (id: number, dadosEditados: IEditarFeedback) => Promise<void>

}

export interface ICadastroAluno {
  nome: string,
  email: string,
  stack: string
}

export interface IAlunosCadastrados {
  idAluno: number,
  nome: string,
  stack: string,
  foto: string
}

export interface IChildren {
  children: React.ReactNode;
}

export interface ISenhas {
  senhaAntiga: string,
  senhaNova: string
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

export interface ICriarAcompanhamento{
  idAcompanhamento: number,
  titulo: string,
  descricao: string,
  dataInicio: string
}

export interface ICadastrarFeedback{
  idFeedback:number,
  idUsuario: number,
  idAluno: number,
  descricao: string,
  tipo: string
}

export interface IEditarFeedback{
  idAluno: number,
  descricao: string,
  tipo: string
}

export interface ICriarAvaliacao{
  idAcompanhamento: number,
  idAluno: number,
  descricao: string,
  tipo: string,
  dataCriacao: string
}