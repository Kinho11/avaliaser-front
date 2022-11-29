import { Header } from "../../components/Header/Header";

import { Box, FormControl, TextField, Stack, Typography, Avatar, Button, FormLabel } from "@mui/material";

import foto from "../../assets/bg-login.png";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

interface IColaborador{
  nomeCompletoColaborador: string,
  emailColaborador: string,
  tipoPerfil: string
}

export const EditarColaborador = () => {
  const { state } = useLocation();
  const [selectedImage, setSelectedImage] = useState();
  console.log(state)

  const imageChange = (e: any): void => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const { register, handleSubmit } = useForm<IColaborador>();

  const cadastroColaborador = (data: IColaborador) => console.log(data);

  return (
    <>
      <Header cargo="admin" nome="Marcus" avatar={foto} />
      <Box component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center", height:"calc(100vh - 200px)" }}>
        <Typography sx={{textAlign: "center",marginBottom:"20px",fontSize:{
          xs:"35px",
          md:"40px"
        }, fontWeight:"700",color:"white"}} variant="h3">Editar Colaborador</Typography>
        <Box component="form" onSubmit={handleSubmit(cadastroColaborador)} sx={{ display: {
          xs:"block",
          md:"flex"
        }, justifyContent: "space-between", backgroundColor: "#fff", width: {
          xs:"90%",
          md:"50%"
        }, borderRadius: "10px", padding: {
          xs: 5,
          md: 5
        }, boxShadow: "10px 10px 10px #2f407ccf"  }}>
          <Stack component="div" spacing={2} sx={{ width:{
            xs:"100%",
            md:"50%"
          }, display: "flex", alignItems:{
            xs:"start",
            md:"start"
          } }}>
            <FormControl sx={{ width: {
              xs:"100%",
              md:"100%"
            } }}>
              <TextField id="nomeCompletoColaborador" defaultValue={state.nameColaborador} {...register("nomeCompletoColaborador")} label="Nome Completo" placeholder="Fulano da Silva" variant="filled" focused />
            </FormControl>
            <FormControl sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <TextField id="emailColaborador" defaultValue={state.email} {...register("emailColaborador")} label="E-mail DBC" placeholder="fulano.silva@dbccompany.com.br" variant="filled" focused />
            </FormControl>
            
            <FormControl variant="filled">

              <FormLabel sx={{color:"#1D58F9",fontWeight:"500",marginBottom:"10px"}} id="demo-controlled-radio-buttons-group">Selecionar cargo</FormLabel>

              <Box sx={{display:"flex",gap:4}}>
                <FormLabel color="primary" sx={{display:"flex", alignItems:"center", gap:1,fontWeight:"700",color:"#1D58F9"}}>
                  <input type="radio" defaultValue={state.cargo} id="gestorDePessoas" {...register("tipoPerfil")} />
                  Gestor de Pessoas
                </FormLabel>

                <FormLabel sx={{display:"flex", alignItems:"center", gap:1,fontWeight:"700",color:"#1D58F9"}}>
                  <input type="radio" defaultValue={state.cargo} id="instrutor" {...register("tipoPerfil")}/>
                  Instrutor
                </FormLabel>
              </Box>

            </FormControl>

          </Stack>
          <Stack component="div" spacing={2} sx={{ width: {
            xs:"100%",
            md:"50%"
          }, display: "flex", alignItems: "center",marginTop:{
            xs:2,
            md:0
          }}}>
            {selectedImage && <Avatar alt="Foto Enviada" src={URL.createObjectURL(selectedImage)} sx={{ width: 150, height: 150 }} />}
            {!selectedImage && <Avatar alt="Foto Padrao" sx={{ width: 150, height: 150 }} />}
            <Button component="label" variant="contained">
              <input id="imagemAluno" type="file" accept="image/jpeg" hidden onChange={imageChange} />
              <Typography sx={{ textTransform: "capitalize" }} variant="body1">Inserir nova Foto</Typography>
            </Button>

            <Box sx={{display:"flex",width:"100%",height:"110%", justifyContent:"end",marginTop:"40px!important"}}>
              <Button color="success" type="submit" variant="contained" sx={{textTransform: "capitalize", width:{
                xs:"15ch",
                md:"15ch"
              }}}>Editar</Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  )
}
