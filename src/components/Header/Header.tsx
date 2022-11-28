import { FC, useState } from "react";

import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Avatar, Button, Tooltip, MenuItem, Divider, ListItemIcon } from "@mui/material";
import { AddBox, AssignmentInd, Chat, PersonAdd, LockReset, ExitToApp } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

import logo from "../../assets/dbc-logo.png";

import { IHeaderProps } from "../../utils/interface";

import { useNavigate } from "react-router-dom";

export const Header: FC<IHeaderProps> = ({ nome, cargo, avatar }) => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  // Funções Header
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => { setAnchorElNav(event.currentTarget); };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => { setAnchorElUser(event.currentTarget); };
  const handleCloseNavMenu = () => { setAnchorElNav(null); };
  const handleCloseUserMenu = () => { setAnchorElUser(null); };

  return (
    <>
      {/* Header Admin */}
      {cargo === "admin" && 
      <AppBar position="static" sx={{ backgroundColor: "#f8f8fff8" }}>
        <Box sx={{ padding: "0 50px" }}>
          <Toolbar disableGutters>
            <Box component="image" sx={{ mr: 2, display: { xs: "none", md: "flex" }}}>
              <a href="https://www.dbccompany.com.br/" id="logo-dbc-admin" title="DBC Company" rel="noreferrer" target={"_blank"}><img style={{ cursor: "pointer" }} src={logo} width={80} alt="Logo DBC" /></a>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, color: "#000" }}>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: "bottom", horizontal: "left" }} keepMounted transformOrigin={{ vertical: "top", horizontal: "left" }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: "block", md: "none" } }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography onClick={() => navigate("/dashboard/admin")} textAlign="center">Dashboard</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography onClick={() => navigate("/cadastrar-colaborador")} textAlign="center">Cadastrar colaborador</Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Box component="image"
              sx={{ mr: 2, display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
              <a href="https://www.dbccompany.com.br/" id="logo-dbc-admin" title="DBC Company" rel="noreferrer" target={"_blank"}><img style={{ cursor: "pointer" }} src={logo} width={80} alt="Logo DBC" /></a>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button variant="outlined" id="dashboard-admin" onClick={() => navigate("/dashboard/admin")} sx={{ my: 2, display: "block", textTransform: "capitalize" }}>Dashboard</Button>

              <Button variant="outlined" id="cadastrar-colaborador-admin" onClick={() => navigate("/cadastrar-colaborador")} sx={{ my: 2, textTransform: "capitalize" }} endIcon={<AssignmentInd />}>Cadastrar colaborador</Button>
            </Box>

            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center", gap: 2 }}>
              <Typography id="boas-vindas-admin" sx={{ minWidth: 100, fontWeight: 600, color: "#090F27", textDecoration: "underline", display: { xs: "none", md: "flex" } }}>Seja bem-vindo(a) {nome}!</Typography>
              <Tooltip title="Menu">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar id="menu-avatar-admin" alt="Foto Usuario" src={avatar} />
                </IconButton>
              </Tooltip>
              <Menu sx={{ mt: "45px" }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{ vertical: "top", horizontal: "right" }} keepMounted transformOrigin={{ vertical: "top", horizontal: "right" }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                <MenuItem onClick={handleCloseUserMenu}>
                  <ListItemIcon>
                    <LockReset fontSize="medium" />
                  </ListItemIcon>
                  <Typography textAlign="center">Trocar senha</Typography>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleCloseUserMenu}>
                  <ListItemIcon>
                    <ExitToApp fontSize="medium" />
                  </ListItemIcon>
                  <Typography textAlign="center">Sair</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
      }

      {/* Header Gestor */}
      {cargo === "gestor" && 
      <AppBar position="static" sx={{ backgroundColor: "#f8f8fff8" }}>
        <Box sx={{ padding: "0 50px" }}>
          <Toolbar disableGutters>
            <Box component="image" sx={{ mr: 2, display: { xs: "none", md: "flex" }}}>
              <a href="https://www.dbccompany.com.br/" id="logo-dbc-gestor" title="DBC Company" rel="noreferrer" target={"_blank"}><img style={{ cursor: "pointer" }} src={logo} width={80} alt="Logo DBC" /></a>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, color: "#000" }}>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: "bottom", horizontal: "left" }} keepMounted transformOrigin={{ vertical: "top", horizontal: "left" }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: "block", md: "none" } }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography onClick={() => navigate("/dashboard/gestor")} textAlign="center">Dashboard</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography onClick={() => navigate("/cadastrar-aluno")} textAlign="center">Cadastrar aluno</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Cadastrar acompanhamento</Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Box component="image"
              sx={{ mr: 2, display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
              <a href="https://www.dbccompany.com.br/" id="logo-dbc-gestor" title="DBC Company" rel="noreferrer" target={"_blank"}><img style={{ cursor: "pointer" }} src={logo} width={80} alt="Logo DBC" /></a>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button variant="outlined" id="dashboard-gestor" onClick={() => navigate("/dashboard/gestor")} sx={{ my: 2, display: "block", textTransform: "capitalize" }}>Dashboard</Button>

              <Button variant="outlined" id="cadastrar-aluno-gestor" onClick={() => navigate("/cadastrar-aluno")} sx={{ my: 2, textTransform: "capitalize" }} endIcon={<PersonAdd />}>Cadastrar aluno</Button>

              <Button variant="outlined" id="cadastrar-acompanhamento-gestor" onClick={handleCloseNavMenu} sx={{ my: 2, textTransform: "capitalize" }} endIcon={<AddBox />}>Cadastrar acompanhamento</Button>
            </Box>
            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center", gap: 2 }}>
              <Typography id="boas-vindas-gestor" sx={{ minWidth: 100, fontWeight: 600, color: "#090F27", textDecoration: "underline", display: { xs: "none", md: "flex" } }}>Seja bem-vindo(a) {nome}!</Typography>
              <Tooltip title="Menu">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar id="menu-avatar-gestor" alt="Foto Usuario" src={avatar} />
                </IconButton>
              </Tooltip>
              <Menu sx={{ mt: "45px" }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{ vertical: "top", horizontal: "right" }} keepMounted transformOrigin={{ vertical: "top", horizontal: "right" }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                <MenuItem onClick={handleCloseUserMenu}>
                  <ListItemIcon>
                    <LockReset fontSize="medium" />
                  </ListItemIcon>
                  <Typography textAlign="center">Trocar senha</Typography>
                </MenuItem>
                <Divider />
                <MenuItem  onClick={handleCloseUserMenu}>
                  <ListItemIcon>
                    <ExitToApp fontSize="medium" />
                  </ListItemIcon>
                  <Typography textAlign="center">Sair</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
      }

      {/* Header Instrutor */}
      {cargo === "instrutor" && 
      <AppBar position="static" sx={{ backgroundColor: "#f8f8fff8" }}>
        <Box sx={{ padding: "0 50px" }}>
          <Toolbar disableGutters>
            <Box component="image" sx={{ mr: 2, display: { xs: "none", md: "flex" }}}>
              <a href="https://www.dbccompany.com.br/" id="logo-dbc-instrutor" title="DBC Company" rel="noreferrer" target={"_blank"}><img style={{ cursor: "pointer" }} src={logo} width={80} alt="Logo DBC" /></a>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, color: "#000" }}>
              <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
              </IconButton>
              <Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{ vertical: "bottom", horizontal: "left" }} keepMounted transformOrigin={{ vertical: "top", horizontal: "left" }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: "block", md: "none" } }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography onClick={() => navigate("/dashboard/instrutor")} textAlign="center">Dashboard</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography onClick={() => navigate("/cadastrar-aluno")} textAlign="center">Cadastrar aluno</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Cadastrar feedback</Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Box component="image"
              sx={{ mr: 2, display: { xs: "flex", md: "none" }, flexGrow: 1 }}>
              <a href="https://www.dbccompany.com.br/" id="logo-dbc-instrutor" title="DBC Company" rel="noreferrer" target={"_blank"}><img style={{ cursor: "pointer" }} src={logo} width={80} alt="Logo DBC" /></a>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, gap: 2 }}>
              <Button variant="outlined" id="dashboard-instrutor" onClick={() => navigate("/dashboard/instrutor")} sx={{ my: 2, display: "block", textTransform: "capitalize" }}>Dashboard</Button>

              <Button variant="outlined" id="cadastrar-aluno-instrutor" onClick={() => navigate("/cadastrar-aluno")} sx={{ my: 2, textTransform: "capitalize" }} endIcon={<PersonAdd />}>Cadastrar aluno</Button>

              <Button variant="outlined" id="cadastrar-feedback-instrutor" onClick={handleCloseNavMenu} sx={{ my: 2, textTransform: "capitalize" }} endIcon={<Chat />}>Cadastrar feedback</Button>
            </Box>

            <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center", gap: 2 }}>
              <Typography id="boas-vindas-instrutor" sx={{ minWidth: 100, fontWeight: 600, color: "#090F27", textDecoration: "underline", display: { xs: "none", md: "flex" } }}>Seja bem-vindo(a) {nome}!</Typography>
              <Tooltip title="Menu">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar id="menu-avatar-instrutor" alt="Foto Usuario" src={avatar} />
                </IconButton>
              </Tooltip>
              <Menu sx={{ mt: "45px" }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{ vertical: "top", horizontal: "right" }} keepMounted transformOrigin={{ vertical: "top", horizontal: "right" }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                <MenuItem onClick={handleCloseUserMenu}>
                  <ListItemIcon>
                    <LockReset fontSize="medium" />
                  </ListItemIcon>
                  <Typography textAlign="center">Trocar senha</Typography>
                </MenuItem>
                <Divider />
                <MenuItem  onClick={handleCloseUserMenu}>
                  <ListItemIcon>
                    <ExitToApp fontSize="medium" />
                  </ListItemIcon>
                  <Typography textAlign="center">Sair</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
      }
    </>
  );
};