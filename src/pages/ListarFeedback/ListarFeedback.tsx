import { Box, Typography, Paper, TableContainer, Table, TableRow, TableCell, TableBody, Button, TablePagination, styled, tableCellClasses, FormControl, Stack } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom";
import { Header } from "../../components/Header/Header"
import EditIcon from "@mui/icons-material/Edit";


import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { InstrutorContext } from "../../context/InstrutorContext";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: { backgroundColor: theme.palette.common.black, color: theme.palette.common.white },
  [`&.${tableCellClasses.body}`]: { fontSize: 14 },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": { backgroundColor: theme.palette.action.hover },
  "&:last-child td, &:last-child th": { border: 0 },
}));


interface Column {
  id: "codigo" | "nome" | "status" | "acoes";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "codigo", label: "Codigo", minWidth: 5 },
  { id: "nome", label: "Nome", minWidth: 5 },
  { id: "status", label: "Status", minWidth: 5, align: "right", format: (value: number) => value.toLocaleString("en-US") },
  { id: "acoes", label: "Ações", minWidth: 5, align: "right", format: (value: number) => value.toLocaleString("en-US") }
];

export const ListarFeedback = () => {
  const { pegarFeedback, feedback} = useContext(InstrutorContext);

  const navigate = useNavigate()

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => { setPage(newPage); };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

 
  useEffect(() => { pegarFeedback(); }, [])


  const infosUsuario = JSON.parse(localStorage.getItem("infoUsuario") || "{}");
  if(infosUsuario.cargo !== "Instrutor") return <Navigate to="/"/>



  return (
    <>
      <Header/>

      <Box sx={{height:"calc(100vh - 200px)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:5}}>
        <Typography  sx={{textAlign: "center", fontSize: { xs:30, md:44 },marginTop:"50px",fontWeight:"700",color:"white"}} variant="h3">Lista feedback</Typography>  

        <Paper sx={{ width: { xs:"95%", md:"65%" }, borderRadius: "10px", boxShadow: "10px 10px 10px #2f407ccf" }}>
          <TableContainer sx={{ maxHeight:430 }}>
            <Table stickyHeader aria-label="sticky table">
              <thead>
                <TableRow sx={{ backgroundColor:"#090F27", color: "white" }}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align} style={{ top: 57, minWidth: column.minWidth,fontWeight:"700", fontSize:"1rem", textAlign: "center" }}>{column.label}</TableCell>
                  ))}
                </TableRow>
              </thead>
              <TableBody>
                {feedback.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => (
                  <StyledTableRow key={data.idFeedback}>
                    <StyledTableCell sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}} component="td" scope="row">{data.idFeedback}</StyledTableCell>
                    <StyledTableCell id="nome" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}}>{data.descricao}</StyledTableCell> 
                    <StyledTableCell id="nome" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}}>{data.tipo}</StyledTableCell> 
                    <StyledTableCell id="cargo" sx={{textAlign:"center"}}>
                      <Button id="botao-avaliar-acompanhamento" onClick={() => { navigate("/editar-feedback", {state: data}) }} title="Avaliar acompanhamento"><EditIcon/>
                    </Button>
                    <Button id="botao-deletar-gestor" title="Deletar"><DeleteForeverIcon /></Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Paginação */}
          <Box sx={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0 20px"}}>
            <FormControl variant="filled">
              <Box sx={{display:"flex",gap:3,flexDirection:{
                xs:"column",
                md:"row"
              }}}>
                <Box color="primary" sx={{display:"flex",flexDirection:"column", gap:1,color:"#1D58F9"}}>
                  <Stack spacing={2} direction="row">
                    <input type="radio" value="QA" id="qa"/>
                    <Typography sx={{fontWeight:"700"}}>QA</Typography>
                  </Stack>
                </Box>

                <Box sx={{display:"flex",flexDirection:"column", gap:1,color:"#1D58F9"}}>
                  <Stack spacing={2} direction="row">
                    <input type="radio" value="backend" id="backend"/>
                    <Typography sx={{fontWeight:"700"}}>Back</Typography>
                  </Stack>
                </Box>

                <Box sx={{display:"flex",flexDirection:"column", gap:1,color:"#1D58F9"}}>
                  <Stack spacing={2} direction="row">
                    <input type="radio" value="frontend" id="frontend" />
                    <Typography sx={{fontWeight:"700"}}>Front</Typography>
                  </Stack>
                </Box>
              
              </Box>
              
              </FormControl>
            <TablePagination rowsPerPageOptions={[10, 20, 30]} component="div" count={feedback.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
          </Box>
        </Paper>
      </Box>
    
    </>
  )
}
