import { Header } from "../../components/Header/Header";

import { Box, FormControl, TextField, Stack, Typography, InputLabel, MenuItem, Select, Avatar, Button } from "@mui/material";

import foto from "../../assets/bg-login.png";
import { useState } from "react";

export const CadastrarAluno = () => {
  const [selectedImage, setSelectedImage] = useState();

  const imageChange = (e: any): void => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <>
      <Header cargo="gestor" nome="Marcus" avatar={foto} />
      <Box component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center", height:"calc(100vh - 200px)" }}>
        <Typography sx={{textAlign: "center", marginBottom:"20px", fontWeight:"700",color:"#090f27"}} variant="h3">Cadastrar Aluno</Typography>
        <Box component="form" sx={{ display: "flex", justifyContent: "space-between", backgroundColor: "#fff", width: "60%", borderRadius: "10px", padding: "50px 50px", boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.25)" }}>
          <Stack component="div" spacing={2} sx={{ width: "50%" }}>
            <FormControl sx={{ width: "40ch" }}>
              <TextField label="Nome Completo" placeholder="Fulano da Silva" variant="filled" focused />
            </FormControl>
            <FormControl sx={{ width: "40ch" }}>
              <TextField label="E-mail DBC" placeholder="fulano.silva@dbccompany.com.br" variant="filled" focused />
            </FormControl>
            <FormControl variant="filled" sx={{ width: "40ch" }}>
              <InputLabel id="demo-simple-select-filled-label">Trilha do Aluno</InputLabel>
              <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled">
                <MenuItem value=""><em>Selecione a Trilha</em></MenuItem>
                <MenuItem value="frontend">Front-End</MenuItem>
                <MenuItem value="backend">Back-End</MenuItem>
                <MenuItem value="qa">Quality Assurance</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" sx={{ textTransform: "capitalize", width: "10ch" }}>Salvar</Button>
          </Stack>
          <Stack component="div" spacing={2} sx={{ width: "50%", display: "flex", alignItems: "center" }}>
            {selectedImage && <Avatar alt="Foto Enviada" src={URL.createObjectURL(selectedImage)} sx={{ width: 150, height: 150 }} />}
            {!selectedImage && <Avatar alt="Foto Padrao" sx={{ width: 150, height: 150 }} />}
            <Button component="label" variant="contained">
              <input type="file" accept="image/*" hidden onChange={imageChange} />
              <Typography sx={{ textTransform: "capitalize" }} variant="body1">Inserir Foto</Typography>
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
