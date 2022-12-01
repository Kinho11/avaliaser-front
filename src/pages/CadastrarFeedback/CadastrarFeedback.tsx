import { Box, Typography, Stack, FormControl, TextField, FormLabel, InputLabel, MenuItem, Select } from '@mui/material'
import { Header } from '../../components/Header/Header'
import logo from "../../assets/dbc-logo.webp";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CadastrarFeedbackSchema } from '../../utils/schemas';
import { Navigate } from 'react-router-dom';
import { BotaoAzul } from '../../components/BotaoAzul/BotaoAzul';
import { Titulo } from '../../components/Titulo/Titulo';
import { useContext, useEffect } from 'react';
import { AlunoContext } from '../../context/AlunoContext';
import { InstrutorContext } from '../../context/InstrutorContext';

const itemHeigth = 48;
const itemPaddingTop = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: itemHeigth * 4.5 + itemPaddingTop,
      width: 250,
    },
  },
};


interface ICadastrarFeedback {
  idAluno: string,
  descricao: string,
  tipo: string
}

export const CadastrarFeedback = () => {

  const { cadastrarFeedback } = useContext(InstrutorContext);


  const {register, handleSubmit, formState:{errors}} = useForm<ICadastrarFeedback>({
    resolver: yupResolver(CadastrarFeedbackSchema)
  })

  const { getAlunos, alunos, } = useContext(AlunoContext);
  useEffect(() => { getAlunos(); }, [])
  
  const cadastrarFeedbacks = (data:ICadastrarFeedback ) => {
    const feedback = {idAluno: parseInt(data.idAluno),descricao: data.descricao, tipo: data.tipo}
    console.log(feedback)

  }
  
  const infosUsuario = JSON.parse(localStorage.getItem("infoUsuario") || "{}");
  if(infosUsuario.cargo !== "Instrutor") return <Navigate to="/"/>
  
  return (
    <>
      <Header/>

      <Box component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center", height:"calc(100vh - 200px)" }}>
        <Titulo texto="Cadastrar feedback"/>

        <Box component="form" onSubmit={handleSubmit(cadastrarFeedbacks)} sx={{ display: {
          xs:"flex",
          md:"flex"
        },flexDirection:"column",alignItems:"center",backgroundColor: "#fff", width: {
          xs:"90%",
          md:"35%"
        }, borderRadius: "10px", padding: {
          xs: 5,
          md: 5
        }, boxShadow: "10px 10px 10px #2f407ccf",gap:2 }}>
          <img  src={logo} alt="" width={150} />
          <Stack component="div" spacing={2} sx={{ width:{
            xs:"100%",
            md:"100%"
          }, display: "flex", alignItems:{
            xs:"start",
            md:"start"
          } }}>

            <FormControl variant="filled">

            <FormLabel sx={{color:"#1D58F9",fontWeight:"500",marginBottom:"10px"}} id="demo-controlled-radio-buttons-group">Selecionar uma trilha</FormLabel>

            <Box sx={{display:"flex",gap:3}}>
              <Box color="primary" sx={{display:"flex",flexDirection:"column", gap:1,color:"#1D58F9"}}>
                <Stack spacing={2} direction="row">
                  <input type="radio" value="QA" id="qa" />
                  <Typography sx={{fontWeight:"700"}}>QA</Typography>
                </Stack>
              </Box>

              <Box sx={{display:"flex",flexDirection:"column", gap:1,color:"#1D58F9"}}>
                <Stack spacing={2} direction="row">
                  <input type="radio" value="backend" id="backend" />
                  <Typography sx={{fontWeight:"700"}}>Back</Typography>
                </Stack>
              </Box>

              <Box sx={{display:"flex",flexDirection:"column", gap:1,color:"#1D58F9"}}>
                <Stack spacing={2} direction="row">
                  <input type="radio" value="frontend" id="frontend"/>
                  <Typography sx={{fontWeight:"700"}}>Front</Typography>
                </Stack>
              </Box>
              
            </Box>
            </FormControl>

            <FormControl variant="filled" sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <InputLabel id="aluno">Selecione aluno</InputLabel>
              <Select MenuProps={MenuProps} labelId="demo-simple-select-filled-label" id="idAluno" {...register("idAluno")} >
                  {alunos.map((aluno)=>(
                    <MenuItem key={aluno.idAluno} value={aluno.idAluno}>{aluno.nome}</MenuItem>

                  ))}
                </Select>
              {errors.idAluno && <Typography id="erro-cargo01" sx={{fontWeight:"500", display: "inline-block", marginTop: "5px",whiteSpace:"nowrap"}} color="error">{errors.idAluno.message}</Typography>}
            </FormControl>

            <FormControl sx={{ width: {
              xs:"100%",
              md:"100%"
            } }}>
            <TextField
              id="descricao"
              {...register("descricao")}
              error={!!errors.descricao}
              label="Digite uma descrição"
              placeholder="Digite uma descrição"
              multiline
              variant="filled"
            />
            {errors.descricao && <Typography id="erro-cargo01" sx={{fontWeight:"500", display: "inline-block", marginTop: "5px",whiteSpace:"nowrap"}} color="error">{errors.descricao.message}</Typography>}
            </FormControl>

            <FormControl variant="filled" sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <InputLabel id="tipo">Tipo</InputLabel>
              <Select labelId="demo-simple-select-filled-label" id="tipo" error={!!errors.tipo} {...register("tipo")} >
                <MenuItem value="POSITIVO">Positivo</MenuItem>
                <MenuItem value="ATENCAO">Atencao</MenuItem>
              </Select>
              {errors.tipo && <Typography id="erro-cargo01" sx={{fontWeight:"500", display: "inline-block", marginTop: "5px",whiteSpace:"nowrap"}} color="error">{errors.tipo.message}</Typography>}
            </FormControl>

          </Stack>

          <BotaoAzul texto="Enviar"/>
        </Box>
      </Box>
    
    
    </>
  )
}
