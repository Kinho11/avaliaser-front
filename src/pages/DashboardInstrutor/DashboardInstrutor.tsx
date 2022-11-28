import { TableCell, tableCellClasses, TableRow, Typography, Box, Paper, TableContainer, Table, TableBody, Button, TablePagination,styled } from "@mui/material";
import { useState } from "react";
import { Header } from "../../components/Header/Header";
import foto from "../../assets/bg-login.png";
import EditIcon from "@mui/icons-material/Edit";
import FactCheckIcon from "@mui/icons-material/FactCheck";


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
  id: "codigo" | "nome" | "status" | "acoes";
  label: string;
  minWidth?: number;
  align?: "right";
  format?: (value: number) => string;
}

const columns: Column[] = [
  { id: "codigo", label: "Codigo", minWidth: 5 },
  { id: "nome", label: "Nome", minWidth: 5 },
  {
    id: "status",
    label: "Status",
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
  {codigo: 1,nome:"Marcus",status: "Positvo"},
  {codigo: 1,nome:"Marcus",status: "Atenção"},
  {codigo: 1,nome:"Marcus",status: "Atenção"},
  {codigo: 1,nome:"Marcus",status: "Atenção"},
  {codigo: 1,nome:"Marcus",status: "Atenção"},
  {codigo: 1,nome:"Marcus",status: "Atenção"},
  {codigo: 1,nome:"Marcus",status: "Atenção"},
  {codigo: 1,nome:"Marcus",status: "Atenção"},
];

export const DashboardInstrutor = () => {
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
      <Header cargo="instrutor" nome="Mayra" avatar={foto} />
      
      <Box sx={{height:"calc(100vh - 200px)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",gap:5}}>
        <Typography  sx={{textAlign: "center", marginTop:"50px",fontWeight:"700",fontSize: {
          xs:30,
          md:44
        },color:"#090f27"}} variant="h3">Dashboard Feedback</Typography>
        <Paper sx={{ width: {
          xs:"95%",
          md:"60%"
        }, borderRadius: "10px", boxShadow: "10px 10px 10px #2f407ccf"  }}>
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
                    <StyledTableCell id="nome" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}} >{data.nome}</StyledTableCell>  
                    <StyledTableCell id="email" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}} >{data.status}</StyledTableCell>
                    <StyledTableCell id="cargo" sx={{textAlign:"center"}}><Button id="botao-editar-admin" title="Editar"><EditIcon/></Button><Button title="Cadastrar feedback"><FactCheckIcon/></Button></StyledTableCell>
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
