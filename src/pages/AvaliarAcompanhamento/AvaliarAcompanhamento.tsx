import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Typography, Stack, FormControl, TextField, FormLabel, Button, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react"
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header/Header"
import { AvaliarAcompanhamentoSchema } from "../../utils/schemas";

interface IAvaliarAcompanhamento{
  acompanhamento: string,
  trilha: string,
  aluno: string,
  responsavel: string,
  tipo:string,
  descricao:string,
  data: string
}

export const AvaliarAcompanhamento = () => {
  const { state } = useLocation();

  const {register,handleSubmit, formState:{errors}} = useForm<IAvaliarAcompanhamento>({
    resolver: yupResolver(AvaliarAcompanhamentoSchema)
  })

  const avaliarAcompanhamento = (data: IAvaliarAcompanhamento) => {
    console.log(data)
  }

  return (
    <>
      <Header/>

      <Box component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center", height:"calc(100vh - 200px)" }}>
        <Typography sx={{textAlign: "center",marginBottom:"20px",fontSize:{
          xs:"35px",
          md:"40px"
        }, fontWeight:"700",color:"white"}} variant="h3">Avaliar acompanhamento</Typography>
        <Box component="form" onSubmit={handleSubmit(avaliarAcompanhamento)} sx={{ display: {
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
              <Select labelId="demo-simple-select-filled-label" id="acompanhamento" {...register("acompanhamento")}>
                <MenuItem value="AcompanhamentoUm">Acompanhamento 1</MenuItem>
                <MenuItem value="AcompanhamentoDois">Acompanhamento 2</MenuItem>
                <MenuItem value="AcompanhamentoTres">Acompanhamento 3</MenuItem>
              </Select>
              {errors.acompanhamento && <Typography id="erro-cargo01" sx={{fontWeight:"500", display: "inline-block", marginTop: "5px"}} color="error">{errors.acompanhamento.message}</Typography>}
            </FormControl>
            
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
                    <input type="radio" value="frontend" id="frontend" {...register("trilha")} />
                    <Typography sx={{fontWeight:"700"}}>Front</Typography>
                  </Stack>
                </Box>
                
              </Box>
              {errors.trilha && <Typography id="erro-cargo01" sx={{fontWeight:"500", display: "inline-block", marginTop: "5px"}} color="error">{errors.trilha.message}</Typography>}
            </FormControl>

            <FormControl variant="filled" sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <InputLabel id="aluno">Aluno</InputLabel>
              <Select labelId="demo-simple-select-filled-label" id="aluno" {...register("aluno")}>
                <MenuItem value="marcus">Marcus</MenuItem>
                <MenuItem value="maria">Maria</MenuItem>
                <MenuItem value="joao">Joao</MenuItem>
              </Select>
              {errors.aluno && <Typography id="erro-cargo01" sx={{fontWeight:"500", display: "inline-block", marginTop: "5px"}} color="error">{errors.aluno.message}</Typography>}
            </FormControl>

            <FormControl variant="filled" sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <InputLabel id="responsavel">Responsavel</InputLabel>
              <Select labelId="demo-simple-select-filled-label" id="responsavel" {...register("responsavel")}>
                <MenuItem value="matheus">Matheus</MenuItem>
                <MenuItem value="noah">Noah</MenuItem>
                <MenuItem value="gaby">Gaby</MenuItem>
              </Select>
              {errors.responsavel && <Typography id="erro-cargo01" sx={{fontWeight:"500", display: "inline-block", marginTop: "5px"}} color="error">{errors.responsavel.message}</Typography>}
            </FormControl>

            <FormControl variant="filled" sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <InputLabel id="tipo">Tipo</InputLabel>
              <Select labelId="demo-simple-select-filled-label" id="tipo" {...register("tipo")}>
                <MenuItem value="positivo">Positivo</MenuItem>
                <MenuItem value="negativo">Negativo</MenuItem>
              </Select>
              {errors.tipo && <Typography id="erro-cargo01" sx={{fontWeight:"500", display: "inline-block", marginTop: "5px"}} color="error">{errors.tipo.message}</Typography>}
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
              label="Digite uma descrição"
              placeholder="Digite uma descrição"
              multiline
              variant="filled"
              {...register("descricao")}
            />
            {errors.descricao && <Typography id="erro-cargo01" sx={{fontWeight:"500", display: "inline-block", marginTop: "5px"}} color="error">{errors.descricao.message}</Typography>}
            </FormControl>

            <FormControl sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <TextField
                id="data"
                label="Data inicial"
                defaultValue={state.dataInicial}
                type="date"
                sx={{ width: "100%" }}
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("data")}
              />
              {errors.data && <Typography id="erro-cargo01" sx={{fontWeight:"500", display: "inline-block", marginTop: "5px"}} color="error">{errors.data.message}</Typography>}
            </FormControl>

            <Button  type="submit" sx={{textTransform: "capitalize",width:{
              xs:"20%",
              md:"150px"
            },marginTop:"200px!important"}} variant="contained">Avaliar</Button>
          </Stack>
        </Box>
      </Box>
    </>
  )
}
