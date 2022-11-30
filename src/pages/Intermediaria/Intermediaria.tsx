import { Box } from "@mui/material"
import React from "react"
import logo from "../../assets/logo-branco.png";

export const Intermediaria = () => {
  return (
    <Box sx={{height:"100vh",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <img src={logo} width={700} alt="" />
    </Box>
  )
}
