import { Box, Typography, Stack, FormControl, TextField, Button, Paper, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TablePagination, TableRow } from "@mui/material";
import { Navigate, useLocation, useNavigate } from "react-router-dom"
import { Header } from "../../components/Header/Header";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";


import logo from "../../assets/dbc-logo.png";
import { useState } from "react";

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
  {codigo: 2,dataInicial:"11/12/2001",descricao: "Tabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaela de gestor"},
  {codigo: 3,dataInicial:"11/12/2001",descricao: "Tabela de gestor"},
  {codigo: 4,dataInicial:"11/12/2001",descricao: "Tabela de gestor"},
  {codigo: 5,dataInicial:"11/12/2001",descricao: "Tabela de gestor"},
  {codigo: 6,dataInicial:"11/12/2001",descricao: "Tabela de gestor"},
]


export const VerificarAluno = () => {
  const { state } = useLocation();
  console.log(state)

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const navigate = useNavigate()
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const infosUsuario = JSON.parse(localStorage.getItem("infoUsuario") || "{}");
  if(infosUsuario.cargo !== "ROLE_INSTRUTOR") return <Navigate to="/"/>
  
  return (
    <>
      <Header />

      <Box component="section" sx={{ display: "flex", flexDirection: "column", alignItems: "center",justifyContent: "center", height:"calc(100vh - 200px)" }}>
        <Typography sx={{textAlign: "center",marginBottom:"20px",fontSize:{
          xs:"35px",
          md:"40px"
        }, fontWeight:"700",color:"white",marginTop:{
          xs:"150px",
          md:"120px"
        }}} variant="h3">Verificar aluno</Typography>

        <Box component="div"  sx={{ display: {
          xs:"flex",
          md:"flex"
        },flexDirection:"column",alignItems:"end",backgroundColor: "#fff", width: {
          xs:"90%",
          md:"50%"
        }, borderRadius: "10px", padding: {
          xs: 2,
          md: 3
        }, boxShadow: "10px 10px 10px #2f407ccf",gap:2 }}>
          <Stack component="div" spacing={2} sx={{ width:{
            xs:"100%",
            md:"100%"
          }, display: "flex", alignItems:{
            xs:"start",
            md:"start"
          } }}>
            <Box sx={{display:{
              xs:"flex",
              md:"flex"
            },flexDirection:{
              xs:"column",
              md:"row"
            },alignItems:"center",justifyContent:"space-between",width:"100%",marginBottom:{
              xs:"25px",
              md:"35px"
            }}}>
              <Box sx={{display:"flex",flexWrap:"wrap",width:{
                xs:"100%",
                md:"80%"
              },justifyContent:"space-between",gap:2,marginBottom:"20PX"}}>
                <Typography sx={{whiteSpace:"nowrap"}}>Nome: <span style={{fontWeight:700}}>{state.nome}</span></Typography>
                <Typography sx={{whiteSpace:"nowrap"}}>Turma: <span style={{fontWeight:700}}>{state.stack}</span></Typography>
                <Typography sx={{whiteSpace:"nowrap"}}>Email: <span style={{fontWeight:700}}>marcuspaulo.moreno@gmai.com</span></Typography>
              </Box>
              <img src={logo} style={{borderRadius:"50px",margin:"0 auto"}} alt="" width={100} />
            </Box>


            <Paper sx={{ width: {
              xs:"95%",
              md:"100%"
            }, borderRadius: "10px", boxShadow: "10px 10px 10px #a6b0d4cf"  }}>
              <Typography sx={{fontWeight:700,color:"#1565C0",fontSize:"22px"}}>Feedbacks:</Typography>
              <TableContainer sx={{ maxHeight:{
                xs:150,
                md:200
              } }}>
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
                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => (
                      <StyledTableRow  key={data.codigo}>
                        <StyledTableCell  sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}} component="td" scope="row">
                          {data.codigo}
                        </StyledTableCell>
                        <StyledTableCell id="nome" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}} >{data.dataInicial}</StyledTableCell>  
                        <StyledTableCell id="email" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem", whiteSpace:"nowrap",overflow:"hidden", textOverflow:"ellipsis",maxWidth:"100px"}} >{data.descricao}</StyledTableCell>
                        <StyledTableCell id="cargo" sx={{textAlign:"center"}}><Button id="botao-avaliar-acompanhamento"
                        onClick={()=>{navigate("/avaliar-acompanhamneto",{state: data})}}
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
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>

            <Paper sx={{ width: {
              xs:"95%",
              md:"100%"
            }, borderRadius: "10px", boxShadow: "10px 10px 10px #a6b0d4cf"  }}>
              <Typography sx={{fontWeight:700,color:"#1565C0",fontSize:"22px"}}>Acompanhamentos:</Typography>
              <TableContainer sx={{ maxHeight:{
                xs:150,
                md:200
              } }}>
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
                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((data) => (
                      <StyledTableRow  key={data.codigo}>
                        <StyledTableCell  sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}} component="td" scope="row">
                          {data.codigo}
                        </StyledTableCell>
                        <StyledTableCell id="nome" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem"}} >{data.dataInicial}</StyledTableCell>  
                        <StyledTableCell id="email" sx={{textAlign:"center", fontWeight:"600", fontSize: "1rem", whiteSpace:"nowrap",overflow:"hidden", textOverflow:"ellipsis",maxWidth:"100px"}} >{data.descricao}</StyledTableCell>
                        <StyledTableCell id="cargo" sx={{textAlign:"center"}}><Button id="botao-avaliar-acompanhamento"
                        onClick={()=>{navigate("/avaliar-acompanhamneto",{state: data})}}
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
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Paper>

            

          </Stack>

            <Button sx={{textTransform: "capitalize",width:{
              xs:"20%",
              md:"150px"
            },display:"flex"}} onClick={()=>{navigate("/dashboard/instrutor")}} variant="contained">Voltar</Button>
        </Box>
      </Box>
    </>
  )
}
