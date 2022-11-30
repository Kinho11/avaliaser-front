import { Box, Typography, Stack, FormControl, TextField, Button } from "@mui/material"
import React from "react"
import { Header } from "../../components/Header/Header"
import logo from "../../assets/dbc-logo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CadastrarAcompanhamentoSchema } from "../../utils/schemas";
import { Navigate } from "react-router-dom";


interface ICadastrarAcompanhamento{
  descricao: string,
  data: string
}

export const CadastrarAcompanhamento = () => {


  const {register, handleSubmit, formState:{errors}}= useForm<ICadastrarAcompanhamento>({
    resolver: yupResolver(CadastrarAcompanhamentoSchema)

  })

  const cadastrarAcompanhamento = (data:ICadastrarAcompanhamento) =>{
    console.log(data)
  }

  const infosUsuario = JSON.parse(localStorage.getItem("infoUsuario") || "{}");
  if(infosUsuario.cargo !== "Gestor de Pessoas") return <Navigate to="/"/>

  return (
    <>
      <Header/>

      <Box component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center", height:"calc(100vh - 200px)" }}>
        <Typography sx={{textAlign: "center",marginBottom:"20px",fontSize:{
          xs:"35px",
          md:"40px"
        }, fontWeight:"700",color:"white"}} variant="h3">Cadastrar acompanhamento</Typography>

        <Box component="form" onSubmit={handleSubmit(cadastrarAcompanhamento)} sx={{ display: {
          xs:"flex",
          md:"flex"
        },flexDirection:"column",alignItems:"center",backgroundColor: "#fff", width: {
          xs:"90%",
          md:"30%"
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

            <FormControl sx={{ width: {
              xs:"100%",
              md:"100%"
            } }}>
            <TextField
              id="descricao"
              error={!!errors.descricao}
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
                error={!!errors.data}
                label="Data inicial"
                type="date"
                sx={{ width: "100%" }}
                InputLabelProps={{
                  shrink: true,
                }}
                {...register("data")}
              />
              {errors.data && <Typography id="erro-cargo01" sx={{fontWeight:"500", display: "inline-block", marginTop: "5px"}} color="error">{errors.data.message}</Typography>}
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
