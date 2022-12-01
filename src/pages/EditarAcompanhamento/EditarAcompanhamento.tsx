import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography, Stack, FormControl, InputLabel, Select, MenuItem, FormLabel, TextField, Button } from "@mui/material"
import React, { useContext, useEffect } from "react"
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header";
import { AlunoContext } from "../../context/AlunoContext";
import { EditarAcompanhamentoSchema } from "../../utils/schemas";

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

interface IEditarAcompanhamento{
  acompanhamento: string,
  trilha: string,
  aluno: string,
  responsavel: string,
  tipo:string,
  descricao:string,
  data: string
}


export const EditarAcompanhamento = () => {
  const { getAlunos, alunos, } = useContext(AlunoContext);
  useEffect(() => { getAlunos(); }, [])

  const {state} = useLocation()
  console.log(state)
  

  const infosUsuario = JSON.parse(localStorage.getItem("infoUsuario") || "{}");
  const primeiroNome = infosUsuario.nome.split(" ")[0];

  const {register,handleSubmit, formState:{errors}} = useForm<IEditarAcompanhamento>({
    resolver: yupResolver(EditarAcompanhamentoSchema)
  })

  const editarAcompanhamento = (data: IEditarAcompanhamento) => {
    console.log(data)
  }

  return (
    <>
      <Header/>

      <Box component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center", height:"calc(100vh - 200px)" }}>
        <Typography sx={{textAlign: "center",marginBottom:"20px",fontSize:{
          xs:"35px",
          md:"40px"
        }, fontWeight:"700",color:"white", marginTop:{
          xs:"150px",
          md:"0"
        }}} variant="h3">Editar acompanhamento</Typography>
        <Box component="form" onSubmit={handleSubmit(editarAcompanhamento)} sx={{ display: {
          xs:"block",
          md:"flex"
        }, justifyContent: "space-between", backgroundColor: "#fff", width: {
          xs:"90%",
          md:"60%"
        }, borderRadius: "10px", padding: {
          xs: 5,
          md: 5
        }, boxShadow: "10px 10px 10px #2f407ccf",gap:8  }}>
          <Stack component="div" spacing={3} sx={{ width:{
            xs:"100%",
            md:"50%"
          }, display: "flex", alignItems:{
            xs:"start",
            md:"start"
          } }}>
            <FormControl variant="filled" sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <InputLabel id="acompanhamento">Acompanhamento</InputLabel>
              <Select labelId="demo-simple-select-filled-label" id="acompanhamento" value="titulo" {...register("acompanhamento")}>
                <MenuItem value="titulo">{state.titulo}</MenuItem>
              </Select>

            </FormControl>
            
            <FormControl variant="filled">

              <FormLabel sx={{color:"#1D58F9",fontWeight:"500",marginBottom:"10px"}} id="demo-controlled-radio-buttons-group">Filtrar alunos por trilha</FormLabel>

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
                    <input type="radio" value="frontend" id="frontend" {...register("trilha")} />
                    <Typography sx={{fontWeight:"700"}}>Front</Typography>
                  </Stack>
                </Box>
                
              </Box>

            </FormControl>

            <FormControl variant="filled" sx={{ width:  {
              xs:"100%",
              md:"100%"
            }}}>
              <InputLabel id="aluno">Aluno</InputLabel>
                <Select MenuProps={MenuProps} labelId="demo-simple-select-filled-label" defaultValue="initial" id="aluno" {...register("aluno")} >
                  {alunos.map((aluno)=>(
                    <MenuItem key={aluno.idAluno} value={aluno.nome}>{aluno.nome}</MenuItem>

                  ))}
                </Select>
            </FormControl>

            <FormControl variant="filled" sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <InputLabel id="responsavel">Responsavel</InputLabel>
              <Select labelId="demo-simple-select-filled-label" id="responsavel"  value="responsavel" {...register("responsavel")}>
                <MenuItem value="responsavel">{primeiroNome}</MenuItem>
              </Select>

            </FormControl>

            <FormControl variant="filled" sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <InputLabel id="status">Status</InputLabel>
              <Select labelId="demo-simple-select-filled-label" defaultValue="initial" id="status" {...register("tipo")}>
                <MenuItem value="initial" disabled><em>Selecione a Trilha</em></MenuItem>
                <MenuItem value="positivo">Positivo</MenuItem>
                <MenuItem value="atencao">Atencao</MenuItem>
              </Select>

            </FormControl>

          </Stack>

          <Stack component="div" spacing={4} sx={{ width: {
            xs:"100%",
            md:"50%"
          }, display: "flex", alignItems: "end",marginTop:{
            xs:2,
            md:0
          }}}>
            <FormControl sx={{ width: {
              xs:"100%",
              md:"100%"
            } }}>
            <TextField
              id="descricao"
              defaultValue={state.descricao}
              {...register("descricao")}
              label="Digite uma descrição"
              placeholder="Digite uma descrição"
              multiline
              variant="filled"
            />

            </FormControl>

            <FormControl sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <TextField
                id="data"
                defaultValue={state.dataInicio}
                {...register("data")}
                label="Data inicial"
                type="date"
                sx={{ width: "100%" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />

            </FormControl>

            <Button  type="submit" sx={{textTransform: "capitalize",width:{
              xs:"20%",
              md:"150px"
            },marginTop:{
              xs:"10px!important",
              md:"200px!important"
            }}} variant="contained">Avaliar</Button>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

