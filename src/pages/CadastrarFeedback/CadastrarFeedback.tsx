import { Box, Typography, Stack, FormControl, TextField, Button, FormLabel, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import { Header } from '../../components/Header/Header'
import logo from "../../assets/dbc-logo.png";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CadastrarFeedbackSchema } from '../../utils/schemas';


interface ICadastrarFeedback {
  trilha: string,
  aluno: string,
  descricao: string,
  tipo: string
}


export const CadastrarFeedback = () => {

  const {register, handleSubmit, formState:{errors}} = useForm<ICadastrarFeedback>({
    resolver: yupResolver(CadastrarFeedbackSchema)
  })

  const cadastrarFeedback = (data:ICadastrarFeedback ) => {
    console.log(data)
  }

  return (
    <>
      <Header/>

      <Box component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center", height:"calc(100vh - 200px)" }}>
        <Typography sx={{textAlign: "center",marginBottom:"20px",fontSize:{
          xs:"35px",
          md:"40px"
        }, fontWeight:"700",color:"white"}} variant="h3">Cadastrar feedback</Typography>

        <Box component="form" onSubmit={handleSubmit(cadastrarFeedback)} sx={{ display: {
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
            {errors.trilha && <Typography id="erro-cargo01" sx={{fontWeight:"500", display: "inline-block", marginTop: "5px",whiteSpace:"nowrap"}} color="error">{errors.trilha.message}</Typography>}
            </FormControl>

            <FormControl variant="filled" sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <InputLabel id="aluno">Selecione aluno</InputLabel>
              <Select labelId="demo-simple-select-filled-label" id="aluno" error={!!errors.aluno} {...register("aluno")} >
                <MenuItem value="marcus">Marcus</MenuItem>
                <MenuItem value="maria">Maria</MenuItem>
                <MenuItem value="joao">Joao</MenuItem>
              </Select>
              {errors.aluno && <Typography id="erro-cargo01" sx={{fontWeight:"500", display: "inline-block", marginTop: "5px",whiteSpace:"nowrap"}} color="error">{errors.aluno.message}</Typography>}
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
                <MenuItem value="positivo">Positivo</MenuItem>
                <MenuItem value="atencao">Atencao</MenuItem>
              </Select>
              {errors.tipo && <Typography id="erro-cargo01" sx={{fontWeight:"500", display: "inline-block", marginTop: "5px",whiteSpace:"nowrap"}} color="error">{errors.tipo.message}</Typography>}
            </FormControl>

          </Stack>

            <Button type="submit" sx={{textTransform: "capitalize",width:{
              xs:"20%",
              md:"150px"
            },display:"flex",margin:"0 auto"}} variant="contained">Enviar</Button>
        </Box>
      </Box>
    
    
    </>
  )
}
