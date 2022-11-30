import { Typography } from '@mui/material'
import React from 'react'

interface ITexto{
  texto: string
}

export const Titulo: React.FC<ITexto> = ({texto}) => {
  return (
    <>
      <Typography sx={{textAlign: "center",marginBottom:"20px",fontSize:{ xs:"35px", md:"40px" }, fontWeight:"700",color:"white"}} variant="h3">{texto}</Typography>
    </>
  )
}
