import React, { useContext, useEffect, useState } from "react";

import { Paper, TableContainer, Table,TableBody, TablePagination, Button, styled, Typography, Box, TableCell, tableCellClasses, TableRow } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { Navigate, useNavigate } from "react-router-dom";

import { Header } from "../../components/Header/Header";

import { AdminContext } from "../../context/AdminContext";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: { backgroundColor: theme.palette.common.black, color: theme.palette.common.white },
  [`&.${tableCellClasses.body}`]: { fontSize: 14 },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": { backgroundColor: theme.palette.action.hover },
  "&:last-child td, &:last-child th": { border: 0 },
}));

interface Column {
  id: "nome" | "email" | "cargo" | "acoes";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "nome", label: "Colaborador(a)", minWidth: 5 },
  { id: "email", label: "E-mail", minWidth: 5 },
  { id: "cargo", label: "Cargo", minWidth: 5, align: "right", format: (value: number) => value.toLocaleString("en-US") },
  { id: "acoes", label: "Ações", minWidth: 5, align: "right", format: (value: number) => value.toLocaleString("en-US") }
];

export const DashboardAdmin = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { colaborador, pegarColaborador, deletarColaborador } = useContext(AdminContext);

  const handleChangePage = (event: unknown, newPage: number) => { setPage(newPage); };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => { pegarColaborador() }, [])

  const infosUsuario = JSON.parse(localStorage.getItem("infoUsuario") || "{}");
  if(infosUsuario.cargo !== "Admin") return <Navigate to="/"/>

  return (
    <>
      <Header />
      
      <Box sx={{height:"calc(100vh - 200px)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", gap:5}}>
        <Typography id="titulo-body" sx={{textAlign: "center", marginTop:"50px",fontWeight:"700",fontSize: { xs:30, md:44 },color:"white"}} variant="h3">Dashboard Colaboradores</Typography>
        <Paper sx={{ width: { xs:"95%", md:"60%"}, borderRadius: "10px", boxShadow: "10px 10px 10px #2f407ccf" }}>

          <TableContainer id="tabela-admin" sx={{ maxHeight:430 }}>
            <Table stickyHeader aria-label="sticky table">
              <thead>
                <TableRow sx={{ backgroundColor:"#090F27", color: "white" }}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align} style={{ top: 57, minWidth: column.minWidth,fontWeight:"700", fontSize:"1rem", textAlign: "center" }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </thead>
              <TableBody>
                {colaborador.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => (
                  <StyledTableRow  key={data.idUsuario}>
                    <StyledTableCell id="nome" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem", width: { md: "340px" }}} scope="row">{data.nome}</StyledTableCell>
                    <StyledTableCell id="email" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem", whiteSpace:"nowrap",overflow:"hidden", textOverflow:"ellipsis",maxWidth:"100px"}}>{data.email}</StyledTableCell>
                    <StyledTableCell id="cargo" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}}>{data.cargo}</StyledTableCell>
                    <StyledTableCell id="acoes" sx={{textAlign:"center"}}>
                      <Button id={`botao-editar-admin-${data.idUsuario}`} title="Editar" onClick={() => { navigate("/editar-colaborador", { state: data }) }}><EditIcon/></Button>
                      <Button id={`botao-deletar-admin-${data.idUsuario}`} title="Deletar" onClick={() => deletarColaborador(data.idUsuario)}><DeleteForeverIcon /></Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* Paginação */}
          <TablePagination rowsPerPageOptions={[10, 20, 30]} component="div" count={colaborador.length} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
        </Paper>
      </Box>
    </>
  );
};
