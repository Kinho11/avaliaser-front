import { useState } from "react";

import backgroundLogin from "../../assets/bg-login.png";

import { Box, Button, Typography, Stack, InputLabel, OutlinedInput, InputAdornment, IconButton, FormControl  } from "@mui/material";
import { LoginOutlined, Visibility, VisibilityOff, AccountCircle } from "@mui/icons-material";

import { ILogin } from "../../utils";

export const Login = () => {
  const [values, setValues] = useState<ILogin>({ password: "", showPassword: false });

  const handleChange = (prop: keyof ILogin) => (event: React.ChangeEvent<HTMLInputElement>) => setValues({ ...values, [prop]: event.target.value });
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();
  const handleClickShowPassword = () => setValues({ ...values, showPassword: !values.showPassword });

  return (
    <>
      <Box id="container-global" component="section" sx={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Box id="box-esquerda" sx={{ backgroundImage: `url(${backgroundLogin})`, width: "40%", height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}></Box>

        <Box id="box-direita" sx={{ width: "60%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
          <Box id="box-login" component="form" sx={{ backgroundColor: "#fff", width: "70%", borderRadius: 3, padding: 5, boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.25)"}}>
            <Stack spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Typography id="titulo" variant='h3' sx={{ color: "#1e62fe", fontWeight: "700" }}>AvaliaSer</Typography>
              <Typography id="subtitulo" variant='body1' sx={{ color: "#090F27", fontWeight: "600" }}>Faça seu login!</Typography>

              <FormControl sx={{ width: "60%" }} variant="outlined">
                <InputLabel htmlFor="input-usuario">Email</InputLabel>
                <OutlinedInput id="input-usuario" placeholder="fulano.silva" label="Email" endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end" sx={{ cursor: "initial", ":hover": {background: "transparent"} }}>
                      <AccountCircle />
                    </IconButton>
                  </InputAdornment>
                } />
              </FormControl>

              <FormControl sx={{ width: "60%" }} variant="outlined">
                <InputLabel htmlFor="input-senha">Senha</InputLabel>
                <OutlinedInput id="input-senha" placeholder="Insira sua senha" type={values.showPassword ? "text" : "password"} label="Senha" value={values.password} onChange={handleChange("password")} endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                      {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }/>
              </FormControl>
              <Button id="botao-logar" onClick={handleMouseDownPassword} size="medium" type="submit" endIcon={<LoginOutlined />} sx={{ width: "30%", backgroundColor: "#1e62fe" }} variant="contained">Entrar</Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};
