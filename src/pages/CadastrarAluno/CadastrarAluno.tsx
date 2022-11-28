import { Header } from "../../components/Header/Header";

import { Box, FormControl, TextField, Stack, Typography, InputLabel, MenuItem, Select, Avatar, Button } from "@mui/material";

import foto from "../../assets/bg-login.png";
import { useState } from "react";

import { toast } from "react-toastify";
import { toastConfig } from "../../utils/toast";


import { yupResolver } from "@hookform/resolvers/yup";
import { alunoSchema} from "../../utils/schemas";
import { useForm } from "react-hook-form";

interface IAluno{
  nomeCompletoAluno: string,
  emailAluno: string,
  selectAluno: string
}

export const CadastrarAluno = () => {
  const [selectedImage, setSelectedImage] = useState();
  const [verificarEmail, setVerificarEmail] = useState("");

  const imageChange = (e: any): void => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  
  const {register, handleSubmit, formState: { errors }} = useForm<IAluno>({
    resolver: yupResolver(alunoSchema)
  });

  const cadastroAluno = (data: IAluno) =>{
    const dominio = verificarEmail.split("@");
    if(dominio[1] === "dbccompany.com.br") {
      console.log(data);
      console.log(selectedImage);
      toast.success("Aluno cadastrado com sucesso!", toastConfig);
    } else {
      toast.error("Por favor digite um email válido. Ex: fulano@dbccompany.com.br", toastConfig);
    }
  };

  

  return (
    <>
      <Header cargo="gestor" nome="Marcus" avatar={foto} />
      <Box component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center", height:"calc(100vh - 200px)" }}>
        <Typography sx={{textAlign: "center", marginBottom:"20px", fontWeight:"700",color:"#090f27"}} variant="h3">Cadastrar Aluno</Typography>
        <Box component="form" onSubmit={handleSubmit(cadastroAluno)} sx={{ display: {
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
              <TextField id="nomeCompletoAluno" label="Nome Completo" placeholder="Fulano da Silva" variant="filled" error={!!errors.nomeCompletoAluno}  {...register("nomeCompletoAluno")} focused />
              {errors.nomeCompletoAluno && <Typography id="erro-nomeCompletoAluno" sx={{fontWeight:"500", display: "flex", marginTop: "5px"}} color="error">{errors.nomeCompletoAluno.message}</Typography>}
            </FormControl>
            <FormControl sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <TextField id="emailAluno" label="E-mail DBC" placeholder="fulano.silva@dbccompany.com.br" variant="filled" {...register("emailAluno")} onChange={(e) => setVerificarEmail(e.target.value)} focused />
              {errors.emailAluno && <Typography id="erro-emailAluno" sx={{fontWeight:"500", display: "flex", marginTop: "5px"}} color="error">{errors.emailAluno.message}</Typography>}
            </FormControl>
            <FormControl variant="filled" sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <InputLabel id="selectAluno">Trilha do Aluno</InputLabel>
              <Select labelId="demo-simple-select-filled-label" id="selectAluno" error={!!errors.selectAluno}  {...register("selectAluno")}>
                <MenuItem value=""><em>Selecione a Trilha</em></MenuItem>
                <MenuItem value="frontend">Front-End</MenuItem>
                <MenuItem value="backend">Back-End</MenuItem>
                <MenuItem value="qa">Quality Assurance</MenuItem>
              </Select>
              {errors.selectAluno && <Typography id="erro-selectAluno" sx={{fontWeight:"500", display: "flex", marginTop: "5px"}} color="error">{errors.selectAluno.message}</Typography>}
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
