import { Header } from "../../components/Header/Header";

import { Box, FormControl, TextField, Stack, Typography,  Avatar, Button,FormLabel } from "@mui/material";

import foto from "../../assets/bg-login.png";
import { useContext, useState } from "react";

import { toast } from "react-toastify";
import { toastConfig } from "../../utils/toast";


import { colaboradorSchema} from "../../utils/schemas";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AdminContext } from "../../context/AdminContext";
import { AuthContext } from "../../context/AuthContext";


interface IColaborador{
  nome: string,
  email: string,
  cargo: string,
}

export const CadastrarColaborador = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [verificarEmail, setVerificarEmail] = useState("");


  const {criarColaborador} = useContext(AdminContext)

  const imageChange = (e: any): void => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const {register,handleSubmit, formState:{errors}} = useForm<IColaborador>({
    resolver: yupResolver(colaboradorSchema)
  });

  const cadastroColaborador = (data: IColaborador) => {
    criarColaborador(data);
    // const dominio = verificarEmail.split("@");
    // if(dominio[1] === "dbccompany.com.br") {
    //   console.log(selectedImage);
    // } else {
      // toast.error("Por favor digite um email válido. Ex: fulano@dbccompany.com.br", toastConfig);
    // }
  };

  return (
    <>
      <Header cargo="admin" nome="Marcus" avatar={foto} />
      <Box component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center", height:"calc(100vh - 200px)" }}>
        <Typography sx={{textAlign: "center",marginBottom:"20px",fontSize:{
          xs:"35px",
          md:"40px"
        }, fontWeight:"700",color:"white"}} variant="h3">Cadastrar Colaborador</Typography>
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
              <TextField id="nome" {...register("nome")} error={!!errors.nome} label="Nome Completo" placeholder="Fulano da Silva" variant="filled" focused />
              {errors.nome && <Typography id="erro-nome" sx={{fontWeight:"500", display: "flex", marginTop: "5px"}} color="error">{errors.nome.message}</Typography>}
            </FormControl>
            <FormControl sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <TextField id="email" {...register("email")} label="E-mail DBC" placeholder="fulano.silva@dbccompany.com.br" variant="filled" focused />
              {errors.email && <Typography id="erro-email" sx={{fontWeight:"500", display: "flex", marginTop: "5px"}} color="error">{errors.email.message}</Typography>}
            </FormControl>

            <FormControl variant="filled">

              <FormLabel sx={{color:"#1D58F9",fontWeight:"500",marginBottom:"10px"}} id="demo-controlled-radio-buttons-group">Selecionar cargo</FormLabel>

              <Box sx={{display:"flex",gap:4}}>
                <Box color="primary" sx={{display:"flex",flexDirection:"column", gap:1,color:"#1D58F9"}}>
                  <Stack spacing={2} direction="row">
                    <input type="radio" value="GESTOR" id="gestor" {...register("cargo")}/>
                    <Typography sx={{fontWeight:"700"}}>Gestor de Pessoas</Typography>
                  </Stack>
                </Box>

                <Box sx={{display:"flex",flexDirection:"column", gap:1,color:"#1D58F9"}}>
                  <Stack spacing={2} direction="row">
                    <input type="radio" value="INSTRUTOR" id="instrutor" {...register("cargo")} />
                    <Typography sx={{fontWeight:"700"}}>Instrutor</Typography>
                  </Stack>
                </Box>
              </Box>
              {errors.cargo && <Typography id="erro-cargo01" sx={{fontWeight:"500", display: "inline-block", marginTop: "5px"}} color="error">{errors.cargo.message}</Typography>}

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
              <Typography sx={{ textTransform: "capitalize" }} variant="body1">Inserir Foto</Typography>
            </Button>

            <Box sx={{display:"flex",width:"100%",maxHeight:"100%", justifyContent:"end",marginTop:"60px!important"}}>
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

