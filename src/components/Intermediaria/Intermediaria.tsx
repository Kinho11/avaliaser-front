import { Box } from "@mui/material"
import logo from "../../assets/logo-branco.webp";

export const Intermediaria = () => {
  return (
    <Box component="main" id="teste" sx={{height:"100vh",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <img src={logo} width={700} alt="Logo DBC Branco" />
    </Box>
  )
}
