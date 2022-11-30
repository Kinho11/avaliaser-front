import { Header } from "../../components/Header/Header";

import { Box, FormControl, TextField, Stack, Typography, Avatar, Button } from "@mui/material";

import { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { Navigate, useLocation } from "react-router-dom";

import { editarColaboradorSchema } from "../../utils/schemas";
import { yupResolver } from "@hookform/resolvers/yup";

import { IColaboradorEditado } from "../../utils/interface";

import { AdminContext } from "../../context/AdminContext";

export const EditarColaborador = () => {
  const { editarColaborador } = useContext(AdminContext);
  const { state } = useLocation();
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e: any): void => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const { register, handleSubmit, formState: { errors } } = useForm<IColaboradorEditado>({
    resolver: yupResolver(editarColaboradorSchema)
  });

  const cadastroColaborador = (data: IColaboradorEditado) => {
    editarColaborador(data, state.idUsuario, selectedImage);
  }

  const infosUsuario = JSON.parse(localStorage.getItem("infoUsuario") || "{}");
  if(infosUsuario.cargo !== "Admin") return <Navigate to="/"/>

  return (
    <>
      <Header />
      <Box component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center", height:"calc(100vh - 200px)" }}>
        <Typography sx={{textAlign: "center",marginBottom:"20px",fontSize:{ xs:"35px", md:"40px" }, fontWeight:"700",color:"white"}} variant="h3">Editar Colaborador</Typography>

        <Box component="form" onSubmit={handleSubmit(cadastroColaborador)} sx={{ display: { xs:"block", md:"flex" }, justifyContent: "space-between", backgroundColor: "#fff", width: { xs:"90%", md:"50%" }, borderRadius: "10px", padding: { xs: 5, md: 5 }, boxShadow: "10px 10px 10px #2f407ccf"  }}>

          <Stack component="div" spacing={2} sx={{ width:{ xs:"100%", md:"50%" }, display: "flex", alignItems:{ xs:"start", md:"start" } }}>

            <FormControl sx={{ width: { xs:"100%", md:"100%" } }}>
              <TextField id="nomeCompletoColaborador" defaultValue={state.nome} {...register("nome")} label="Nome Completo" placeholder="Fulano da Silva" variant="filled" focused />
              {errors.nome && <Typography id="erro-nome" sx={{fontWeight:"500", display: "flex", marginTop: "5px"}} color="error">{errors.nome.message}</Typography>}
            </FormControl>
            <FormControl sx={{ width:  { xs:"100%", md:"100%" } }}>
              <TextField id="emailColaborador" defaultValue={state.email} {...register("email")} label="E-mail DBC" placeholder="fulano.silva@dbccompany.com.br" variant="filled" focused />
              {errors.email && <Typography id="erro-email" sx={{fontWeight:"500", display: "flex", marginTop: "5px"}} color="error">{errors.email.message}</Typography>}
            </FormControl>

            <Typography variant="body1" sx={{fontWeight:"700", display: "inline-block", marginTop: "10px", paddingBottom: 0, marginBottom: 0, color: "#ff9800"}} >*Imagens são opcionais</Typography>
            <Typography variant="body1" sx={{fontWeight:"700", display: "inline-block", paddingTop: 0, marginTop: 0, color: "#ff9800"}} >*Só são aceitas imagens com extensão .jpg</Typography>
          </Stack>

          <Stack component="div" spacing={2} sx={{ width: { xs:"100%", md:"50%" }, display: "flex", alignItems: "center",marginTop:{ xs:2, md:0 }}}>
            <Avatar alt="Foto Enviada" src={state.foto ? `data:image/jpeg;base64,${state.foto}` : selectedImage ? URL.createObjectURL(selectedImage) : ""} sx={{ width: 150, height: 150 }} />
            
            <Button component="label" variant="contained">
              <input id="imagemAluno" type="file" accept="image/jpeg" hidden onChange={imageChange} />
              <Typography sx={{ textTransform: "capitalize" }} variant="body1">Inserir nova Foto</Typography>
            </Button>

            <Box sx={{display:"flex", width:"100%", justifyContent:"end", alignItems: "end", marginTop:"40px!important"}}>
              <Button color="success" type="submit" variant="contained" sx={{textTransform: "capitalize", width:{ xs:"15ch", md:"15ch"}}}>Editar</Button>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  )
}
