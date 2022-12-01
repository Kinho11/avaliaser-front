import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Stack, FormControl, FormLabel, Typography, InputLabel, Select, MenuItem, TextField } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { BotaoAzul } from '../../components/BotaoAzul/BotaoAzul'
import { Header } from '../../components/Header/Header'
import { Titulo } from '../../components/Titulo/Titulo'
import { EditarFeedbackSchema } from '../../utils/schemas'
import logo from "../../assets/dbc-logo.webp";
import { AlunoContext } from '../../context/AlunoContext'
import { useLocation } from 'react-router-dom'


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

interface IEditarFeedback {
  trilha: string,
  aluno: string,
  descricao: string,
  tipo: string
}

export const EditarFeedback = () => {

  const {state} = useLocation()
  console.log(state)

  const { getAlunos, alunos, } = useContext(AlunoContext);
  useEffect(() => { getAlunos(); }, [])

  const {register, handleSubmit, formState:{errors}} = useForm<IEditarFeedback>({
    resolver: yupResolver(EditarFeedbackSchema)
  })
  

  const editarFeedback = (data: IEditarFeedback ) => {
    console.log(data)
  }


  return (
    <>
      <Header/>

      <Box component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center", height:"calc(100vh - 200px)" }}>
        <Titulo texto="Editar feedback"/>

        <Box component="form" onSubmit={handleSubmit(editarFeedback)} sx={{ display: {
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
                  <input type="radio" value="QA" id="qa" {...register("trilha")} />
                  <Typography sx={{fontWeight:"700"}}>QA</Typography>
                </Stack>
              </Box>

              <Box sx={{display:"flex",flexDirection:"column", gap:1,color:"#1D58F9"}}>
                <Stack spacing={2} direction="row">
                  <input type="radio" value="backend" id="backend" {...register("trilha")} />
                  <Typography sx={{fontWeight:"700"}}>Back</Typography>
                </Stack>
              </Box>

              <Box sx={{display:"flex",flexDirection:"column", gap:1,color:"#1D58F9"}}>
                <Stack spacing={2} direction="row">
                  <input type="radio" value="frontend" id="frontend" {...register("trilha")}/>
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
              <Select MenuProps={MenuProps} labelId="demo-simple-select-filled-label" defaultValue="initial" id="aluno" {...register("aluno")} >
                  {alunos.map((aluno)=>(
                    <MenuItem key={aluno.idAluno} value={aluno.nome}>{aluno.nome}</MenuItem>

                  ))}
                </Select>

            </FormControl>

            <FormControl sx={{ width: {
              xs:"100%",
              md:"100%"
            } }}>
            <TextField
              id="descricao"
              defaultValue={state.descricao}
              {...register("descricao")}
              error={!!errors.descricao}
              label="Digite uma descrição"
              placeholder="Digite uma descrição"
              multiline
              variant="filled"
            />

            </FormControl>

            <FormControl variant="filled" sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <InputLabel id="tipo">Tipo</InputLabel>
              <Select labelId="demo-simple-select-filled-label" value="positivo" id="tipo" error={!!errors.tipo} {...register("tipo")} >
                <MenuItem value="positivo">Positivo</MenuItem>
                <MenuItem value="atencao">Atencao</MenuItem>
              </Select>

            </FormControl>

          </Stack>

          <BotaoAzul texto="Enviar"/>
        </Box>
      </Box>
    
    </>
  )
}
