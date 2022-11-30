import { Box, Button } from "@mui/material";
import React from "react";

interface ITexto{
  texto: string
}

export const BotaoVerde: React.FC<ITexto>= ({texto}) => {
  return (
    <>
      <Box sx={{display:"flex",width:"100%",maxHeight:"100%", justifyContent:"end",marginTop:"40px!important"}}>
        <Button color="success" type="submit" variant="contained" sx={{textTransform: "capitalize", width:{
          xs:"15ch",
          md:"15ch"
        }}}>{texto}</Button>
      </Box>
    
    </>
  )
}
