import React, { useState } from "react";
import { Paper, TableContainer, Table,TableBody, TablePagination, Button, styled, Typography } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import { Header } from "../../components/Header/Header";

import foto from "../../assets/bg-login.png";
import { Box } from "@mui/system";

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
  id: "nameColaborador" | "email" | "cargo" | "acoes";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "nameColaborador", label: "Colaborador(a)", minWidth: 5 },
  { id: "email", label: "E-mail", minWidth: 5 },
  {
    id: "cargo",
    label: "Cargo",
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
  {nameColaborador: "Marcus",email:"marcuspaulo.moreno@dbccompany.com.br",cargo: "Admin"},
  {nameColaborador: "Matheus",email:"Matheus@dbccompany.com.br",cargo: "colaborador"},
  {nameColaborador: "Matheus",email:"Matheus@dbccompany.com.br",cargo: "colaborador"},
  {nameColaborador: "Matheus",email:"Matheus@dbccompany.com.br",cargo: "colaborador"},
  {nameColaborador: "Matheus",email:"Matheus@dbccompany.com.br",cargo: "colaborador"},
  {nameColaborador: "Matheus",email:"Matheus@dbccompany.com.br",cargo: "colaborador"},
  {nameColaborador: "Matheus",email:"Matheus@dbccompany.com.br",cargo: "colaborador"},
  {nameColaborador: "Matheus",email:"Matheus@dbccompany.com.br",cargo: "colaborador"},
  {nameColaborador: "Matheus",email:"Matheus@dbccompany.com.br",cargo: "colaborador"},
  {nameColaborador: "Matheus",email:"Matheus@dbccompany.com.br",cargo: "colaborador"},
  {nameColaborador: "Matheus",email:"Matheus@dbccompany.com.br",cargo: "colaborador"},
  {nameColaborador: "Matheus",email:"Matheus@dbccompany.com.br",cargo: "colaborador"},


];


export const DashboardAdmin = () => {
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
      <Header cargo="admin" nome="Marcus" avatar={foto} />
      <Typography  sx={{textAlign: "center", marginTop:"50px",fontWeight:"700",color:"#090f27"}} variant="h3">Dashboard Colaboradores</Typography>
      <Box sx={{height:"calc(100vh - 200px)",display:"flex",justifyContent:"center",alignItems:"center"}}>
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
                  <StyledTableRow  key={data.nameColaborador}>
                    <StyledTableCell  sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}} component="td" scope="row">
                      {data.nameColaborador}
                    </StyledTableCell>
                    <StyledTableCell id="nome" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}} >{data.email}</StyledTableCell>
                    <StyledTableCell id="email" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}} >{data.cargo}</StyledTableCell>
                    <StyledTableCell id="cargo"  sx={{textAlign:"center"}}  ><Button id="botao-editar-admin" title="Editar"><EditIcon/></Button></StyledTableCell>
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
