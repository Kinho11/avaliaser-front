import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header/Header";

import { TableCell, tableCellClasses, TableRow, Typography, Box, Paper, TableContainer, Table, TableBody, Button, TablePagination,styled } from "@mui/material";

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { Navigate, useNavigate } from "react-router-dom";
import { GestorContext } from "../../context/GestorContext";


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
  id: "codigo" | "titulo" | "dataInicial" | "descricao" | "acoes";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "codigo", label: "Codigo", minWidth: 5 },
  { id: "titulo", label: "Titulo", minWidth: 5 },
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

export const ListarAcompanhamento = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate()
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const { acompanhamento, pegarAcompanhamento} = useContext(GestorContext);

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => { pegarAcompanhamento() }, [])

  const infosUsuario = JSON.parse(localStorage.getItem("infoUsuario") || "{}");
  if(infosUsuario.cargo !== "Gestor de Pessoas") return <Navigate to="/"/>

  return (
    <>
      <Header />
     
      <Box sx={{height:"calc(100vh - 200px)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:5}}>
        <Typography  sx={{textAlign: "center", fontSize: {
          xs:30,
          md:44
        },marginTop:"50px",fontWeight:"700",color:"white"}} variant="h3">Lista acompanhamento</Typography>
        <Paper sx={{ width: {
          xs:"95%",
          md:"65%"
        }, borderRadius: "10px", boxShadow: "10px 10px 10px #2f407ccf"  }}>
          <TableContainer sx={{ maxHeight:430 }}>
            <Table stickyHeader aria-label="sticky table">
              <thead>
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
              </thead>
              <TableBody>
                {acompanhamento.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((acompanhamentos) => (
                  <StyledTableRow  key={acompanhamentos.idAcompanhamento}>
                    <StyledTableCell  sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}} component="td" scope="row">
                      {acompanhamentos.idAcompanhamento}
                    </StyledTableCell>
                    <StyledTableCell id="titulo" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}} >{acompanhamentos.titulo}</StyledTableCell>  
                    <StyledTableCell id="dataInicio" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem", whiteSpace:"nowrap",overflow:"hidden", textOverflow:"ellipsis",maxWidth:"100px"}} >{acompanhamentos.dataInicio}</StyledTableCell>
                    <StyledTableCell id="descricao" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem", whiteSpace:"nowrap",overflow:"hidden", textOverflow:"ellipsis",maxWidth:"100px"}} >{acompanhamentos.descricao}</StyledTableCell>
                    <StyledTableCell id="cargo" sx={{textAlign:"center"}}><Button id="botao-avaliar-acompanhamento"
                    onClick={()=>{navigate("/avaliar-acompanhamneto",{state: acompanhamentos})}}
                    title="Avaliar acompanhamento"><AssignmentTurnedInIcon/></Button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* Paginação */}
          <TablePagination
            rowsPerPageOptions={[10,20,100]}
            component="div"
            count={acompanhamento.length}
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