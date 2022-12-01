import { Box, Stack, FormControl, TextField, InputLabel, Select, MenuItem, Typography, Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import { BotaoVerde } from '../../components/BotaoVerde/BotaoVerde'
import { Header } from '../../components/Header/Header'
import { Titulo } from '../../components/Titulo/Titulo'



export const EditarUsuario = () => {
  const [selectedImage, setSelectedImage] = useState();

  const infosUsuario = JSON.parse(localStorage.getItem("infoUsuario") || "{}");
  console.log(infosUsuario)
  
  const imageChange = (e: any): void => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <>
      <Header/>

      <Box component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center", height:"calc(100vh - 200px)" }}>
        <Titulo texto="Editar usuário"/>

        <Box component="form" sx={{ display: {
          xs:"flex",
          md:"flex"
        },flexDirection:"column",alignItems:"center",justifyContent: "center", backgroundColor: "#fff", width: {
          xs:"90%",
          md:"25%"
        }, borderRadius: "10px", padding: {
          xs: 5,
          md: 5
        }, boxShadow: "10px 10px 10px #2f407ccf",gap:3  }}>

            <FormControl sx={{ width: {
              xs:"100%",
              md:"100%"
            } }}>
              <TextField id="nomeCompletoAluno" defaultValue={infosUsuario.nome} label="Editar nome" placeholder="Fulano da Silva" variant="filled"  focused />

            </FormControl>

            <Avatar alt="Foto Enviada" src={selectedImage ? URL.createObjectURL(selectedImage) : infosUsuario.foto ? `data:image/jpeg;base64,${infosUsuario.foto}` : ""} sx={{ width: 150, height: 150 }} />
            <Button component="label" variant="contained">
              <input id="imagemAluno" type="file" hidden accept="image/jpeg" onChange={imageChange} />
              <Typography sx={{ textTransform: "capitalize" }} variant="body1">Inserir Foto</Typography>
            </Button>

            <BotaoVerde texto="Editar"/>

        </Box>
      </Box>
    
    </>
  )
}
