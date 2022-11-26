import React, { useState } from "react";
import { Header } from "../../components/Header/Header";
import foto from "../../assets/bg-login.png";
import { TableCell, tableCellClasses, TableRow, Typography, Box, Paper, TableContainer, Table, TableBody, Button, TablePagination,styled } from "@mui/material";

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


interface Column {
  id: "codigo" | "dataInicial" | "descricao" | "acoes";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "codigo", label: "Codigo", minWidth: 5 },
  { id: "dataInicial", label: "Data inicial", minWidth: 5 },
  {
    id: "descricao",
    label: "Descrição",
    minWidth: 5,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "acoes",
    label: "Ações",
    minWidth: 5,
    align: "right",
    format: (value: number) => value.toLocaleString("en-US"),
  }

];


const data =[
  {codigo: 1,dataInicial:"11/12/2001",descricao: "Tabela de gestor"},
  {codigo: 2,dataInicial:"11/12/2001",descricao: "Tabela de gestor"},
  {codigo: 3,dataInicial:"11/12/2001",descricao: "Tabela de gestor"},
  {codigo: 4,dataInicial:"11/12/2001",descricao: "Tabela de gestor"},
  {codigo: 5,dataInicial:"11/12/2001",descricao: "Tabela de gestor"},
  {codigo: 6,dataInicial:"11/12/2001",descricao: "Tabela de gestor"},
];
export const DashboardGestor = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Header cargo="gestor" nome="Marcus" avatar={foto} />
      <Typography  sx={{textAlign: "center", marginTop:"100px",fontWeight:"700",color:"#090f27"}} variant="h3">Dashboard Acompanhamentos</Typography>
      <Box sx={{height:"calc(100vh - 200px)",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"-100px"}}>
        <Paper sx={{ width: "60%", borderRadius: "10px" }}>
          <TableContainer sx={{ maxHeight:430 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableRow sx={{backgroundColor:"#090F27",color: "white"}}>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ top: 57, minWidth: column.minWidth,fontWeight:"700", fontSize:"1rem", textAlign: "center" }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
              <TableBody>
                {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => (
                  <StyledTableRow  key={data.codigo}>
                    <StyledTableCell  sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}} component="td" scope="row">
                      {data.codigo}
                    </StyledTableCell>
                    <StyledTableCell id="nome" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}} >{data.dataInicial}</StyledTableCell>  
                    <StyledTableCell id="email" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}} >{data.descricao}</StyledTableCell>
                    <StyledTableCell id="cargo" sx={{textAlign:"center"}}  ><Button id="botao-editar-admin"><AssignmentTurnedInIcon/></Button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Paginação */}
          <TablePagination
            rowsPerPageOptions={[10,20,100]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
};
