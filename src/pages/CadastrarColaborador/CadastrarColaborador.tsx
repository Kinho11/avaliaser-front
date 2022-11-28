import { Header } from "../../components/Header/Header";

import { Box, FormControl, TextField, Stack, Typography, InputLabel, MenuItem, Select, Avatar, Button, Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material";

import foto from "../../assets/bg-login.png";
import { useState } from "react";

import { toast } from "react-toastify";
import { toastConfig } from "../../utils/toast";


import { colaboradorSchema} from "../../utils/schemas";
import { useForm } from "react-hook-form";


interface IColaborador{
  nomeCompletoColaborador: string,
  emailColaborador: string,
  tipoPerfil: string
}

export const CadastrarColaborador = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [verificarEmail, setVerificarEmail] = useState("");

  const imageChange = (e: any): void => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const {register,handleSubmit, formState:{errors}} = useForm<IColaborador>();

  const cadastroColaborador = (data: IColaborador) => console.log(data);

  return (
    <>
      <Header cargo="admin" nome="Marcus" avatar={foto} />
      <Box component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center", height:"calc(100vh - 200px)" }}>
        <Typography sx={{textAlign: "center", marginBottom:"20px", fontWeight:"700",color:"white"}} variant="h3">Cadastrar Colaborador</Typography>
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
              <TextField id="nomeCompletoColaborador" {...register("nomeCompletoColaborador")} label="Nome Completo" placeholder="Fulano da Silva" variant="filled" focused />
            </FormControl>
            <FormControl sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <TextField id="emailColaborador" {...register("emailColaborador")} label="E-mail DBC" placeholder="fulano.silva@dbccompany.com.br" variant="filled" focused />
            </FormControl>

            <FormControl variant="filled">

              <FormLabel sx={{color:"#1D58F9",fontWeight:"500"}} id="demo-controlled-radio-buttons-group">Perfil</FormLabel>

              <FormLabel color="primary" sx={{display:"flex", alignItems:"center", gap:1,fontWeight:"700",color:"#1D58F9"}}>
                <input type="radio" value="gestorDePessoas" id="gestorDePessoas" {...register("tipoPerfil")} />
                Gestor de Pessoas
              </FormLabel>

              <FormLabel sx={{display:"flex", alignItems:"center", gap:1,fontWeight:"700",color:"#1D58F9"}}>
                <input type="radio" value="instrutor" id="instrutor" {...register("tipoPerfil")}/>
                Instrutor
              </FormLabel>

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
              <input id="imagemAluno" type="file" accept="image/*" hidden onChange={imageChange} />
              <Typography sx={{ textTransform: "capitalize" }} variant="body1">Inserir Foto</Typography>
            </Button>

            <Box sx={{display:"flex",width:"100%",height:"110%", justifyContent:"end",marginTop:"40px!important"}}>
              <Button color="success" type="submit" variant="contained" sx={{textTransform: "capitalize", width:{
                xs:"15ch",
                md:"15ch"
              }}}>Enviar</Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

