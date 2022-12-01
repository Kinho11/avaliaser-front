import { useContext } from 'react';

import { Box, FormControl, TextField, Typography } from '@mui/material';

import { BotaoAzul } from '../../components/BotaoAzul/BotaoAzul';
import { Header } from '../../components/Header/Header';
import { Titulo } from '../../components/Titulo/Titulo';

import logo from '../../assets/dbc-logo.webp';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editarNomePerfil } from '../../utils/schemas';
import { IEditarNome } from '../../utils/interface';

import { AuthContext } from '../../context/AuthContext';

export const EditarUsuario = () => {
  const { editarPerfil } = useContext(AuthContext)

  const infosUsuario = JSON.parse(localStorage.getItem("infoUsuario") || "{}");
  
  const { register, handleSubmit, formState: { errors } } = useForm<IEditarNome>({
    resolver: yupResolver(editarNomePerfil)
  })

  const nomeEditado = (data: IEditarNome) => { editarPerfil(data) }

  return (
    <>
      <Header/>

      <Box component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center", height:"calc(100vh - 200px)" }}>
        <Titulo texto="Editar nome do perfil"/>

        <Box component="form" onSubmit={handleSubmit(nomeEditado)} sx={{ display: { xs:"flex", md:"flex" },flexDirection:"column",alignItems:"center",justifyContent: "center", backgroundColor: "#fff", width: { xs:"90%", md:"25%" }, borderRadius: "10px", padding: { xs: 5, md: 5
        }, boxShadow: "10px 10px 10px #2f407ccf", gap:3 }}>
          <img src={logo} alt="Logo DBC Azul" width={100} />
          <FormControl sx={{ width: { xs:"100%", md:"100%" }}}>
            <TextField id="nomeCompletoAluno" {...register("nome")} defaultValue={infosUsuario.nome} label="Editar nome" placeholder="Fulano da Silva" variant="filled" focused />
            {errors.nome && <Typography id="erro-nome" sx={{fontWeight:"500", display: "flex", marginTop: "5px"}} color="error">{errors.nome.message}</Typography>}
          </FormControl>
          <BotaoAzul texto="Editar" />
        </Box>
      </Box>
    </>
  )
}
