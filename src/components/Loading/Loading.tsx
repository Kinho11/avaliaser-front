import { Box, Typography } from "@mui/material"

export const Loading = () => {
  return (
    <>
      <Box component="main" sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100vw", height: "100vh", color: "#fff" }}>
        <Typography variant="h1">Carregando...</Typography>
      </Box>
    </>
  )
}