import { Header } from "../../components/Header/Header";

import { Box, FormControl, TextField, Stack, Typography, InputLabel, MenuItem, Select, Avatar, Button } from "@mui/material";

import { useContext, useState } from "react";

import { toast } from "react-toastify";
import { toastConfig } from "../../utils/toast";

import { yupResolver } from "@hookform/resolvers/yup";
import { alunoSchema} from "../../utils/schemas";
import { useForm } from "react-hook-form";
import { ICadastroAluno } from "../../utils/interface";
import { AlunoContext } from "../../context/AlunoContext";

export const CadastrarAluno = () => {
  const { criarAluno } = useContext(AlunoContext)

  const [selectedImage, setSelectedImage] = useState();
  const [verificarEmail, setVerificarEmail] = useState("");

  const imageChange = (e: any): void => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const {register, handleSubmit, formState: { errors }} = useForm<ICadastroAluno>({
    resolver: yupResolver(alunoSchema)
  });

  const cadastroAluno = (data: ICadastroAluno) => {
    const dominio = verificarEmail.split("@");
    if(dominio[1] === "dbccompany.com.br"){
      criarAluno(data);
    } else {
      toast.error("Por favor digite um email válido. Ex: fulano@dbccompany.com.br", toastConfig);
    }
  };

  return (
    <>
      <Header />
      <Box component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center", height:"calc(100vh - 200px)" }}>
        <Typography sx={{textAlign: "center", marginBottom:"20px", fontWeight:"700",color:"white"}} variant="h3">Cadastrar Aluno</Typography>
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
              <TextField id="nomeCompletoAluno" label="Nome Completo" placeholder="Fulano da Silva" variant="filled" error={!!errors.nome}  {...register("nome")} focused />
              {errors.nome && <Typography id="erro-nomeCompletoAluno" sx={{fontWeight:"500", display: "flex", marginTop: "5px"}} color="error">{errors.nome.message}</Typography>}
            </FormControl>
            <FormControl sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <TextField id="emailAluno" label="E-mail DBC" placeholder="fulano.silva@dbccompany.com.br" variant="filled" {...register("email")} onChange={(e) => setVerificarEmail(e.target.value)} focused />
              {errors.email && <Typography id="erro-emailAluno" sx={{fontWeight:"500", display: "flex", marginTop: "5px"}} color="error">{errors.email.message}</Typography>}
            </FormControl>
            <FormControl variant="filled" sx={{ width:  {
              xs:"100%",
              md:"100%"
            } }}>
              <InputLabel id="selectAluno">Trilha do Aluno</InputLabel>
              <Select labelId="demo-simple-select-filled-label" id="select-trilha" error={!!errors.stack}  {...register("stack")}>
                <MenuItem value=""><em>Selecione a Trilha</em></MenuItem>
                <MenuItem value="FRONTEND">Front-End</MenuItem>
                <MenuItem value="BACKEND">Back-End</MenuItem>
                <MenuItem value="QA">Quality Assurance</MenuItem>
              </Select>
              {errors.stack && <Typography id="erro-selectAluno" sx={{fontWeight:"500", display: "flex", marginTop: "5px"}} color="error">{errors.stack.message}</Typography>}
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
              <input id="imagemAluno" type="file" hidden accept="image/jpeg" onChange={imageChange} />
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
