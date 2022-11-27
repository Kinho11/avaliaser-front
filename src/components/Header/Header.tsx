import { useState, FC } from "react";

import { Box, Typography, Tooltip, IconButton, Avatar, Menu, MenuItem, ListItemIcon, Button } from "@mui/material";
import { AddBox, AssignmentInd, Chat, PersonAdd, Logout } from "@mui/icons-material";

import { IHeaderProps } from "../../utils/interface";

import logo from "../../assets/dbc-logo.png";
import { useNavigate } from "react-router-dom";

export const Header: FC<IHeaderProps> = ({ nome, cargo, avatar }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      {/* Header Admin */}
      {cargo === "admin" &&
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", backgroundColor: "#fff", paddingLeft: 4, paddingRight: 4, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <a href="https://www.dbccompany.com.br/" id="logo-dbc-admin" title="DBC Company" rel="noreferrer" target={"_blank"}><img style={{ cursor: "pointer" }} src={logo} width={80} alt="Logo DBC" /></a>
              <Button variant="outlined" id="button-dashboard-admin" onClick={() => navigate("/dashboard/admin")} sx={{ textTransform: "capitalize" }}>Dashboard</Button>
              <Button variant="outlined" id="button-cadastro-admin" sx={{ textTransform: "capitalize" }} endIcon={<AssignmentInd />}>Cadastrar colaborador</Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography id="texto-boas-vindas" sx={{ minWidth: 100, fontWeight: 600, color: "#090F27" }}>Seja bem-vindo(a) {nome}!</Typography>
              <Tooltip title="Menu" id="menu-avatar-admin">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }} aria-controls={open ? "account-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined}>
                  <Avatar sx={{ width: 40, height: 40 }} src={avatar} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} onClick={handleClose} transformOrigin={{ horizontal: "right", vertical: "top" }} anchorOrigin={{ horizontal: "right", vertical: "bottom" }} PaperProps={{ elevation: 0, sx: { overflow: "visible",filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))", mt: 1.5, "& .MuiAvatar-root": { width: 32, height: 32, ml: -0.5, mr: 1 }, "&:before": { content: "''", display: "block", position: "absolute", top: 0, right: 14, width: 10, height: 10, bgcolor: "background.paper", transform: "translateY(-50%) rotate(45deg)", zIndex: 0 }}}}>
            <MenuItem id="menu-logout">
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Sair
            </MenuItem>
          </Menu>
        </Box>
      }

      {/* Header Gestor */}
      {cargo === "gestor" &&
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", backgroundColor: "#fff", paddingLeft: 4, paddingRight: 4, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <a href="https://www.dbccompany.com.br/" id="logo-dbc-gestor" title="DBC Company" rel="noreferrer" target={"_blank"}><img style={{ cursor: "pointer" }} src={logo} width={80} alt="Logo DBC" /></a>
              <Button variant="outlined" id="button-dashboard-gestor" onClick={() => navigate("/dashboard/gestor")} sx={{ textTransform: "capitalize" }}>Dashboard</Button>
              <Button variant="outlined" id="button-cadastro-gestor" onClick={() => navigate("/cadastrar-aluno")} sx={{ textTransform: "capitalize" }} endIcon={<PersonAdd />}>Cadastrar aluno</Button>
              <Button variant="outlined" id="button-acompanhamento-gestor" sx={{ textTransform: "capitalize" }} endIcon={<AddBox />}>Cadastrar acompanhamento</Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography id="texto-boas-vindas-gestor" sx={{ minWidth: 100, fontWeight: 600, color: "#090F27" }}>Seja bem-vindo(a) {nome}!</Typography>
              <Tooltip title="Menu" id="menu-avatar-gestor">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }} aria-controls={open ? "account-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined}>
                  <Avatar sx={{ width: 40, height: 40 }} src={avatar} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} onClick={handleClose} transformOrigin={{ horizontal: "right", vertical: "top" }} anchorOrigin={{ horizontal: "right", vertical: "bottom" }} PaperProps={{ elevation: 0, sx: { overflow: "visible",filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))", mt: 1.5, "& .MuiAvatar-root": { width: 32, height: 32, ml: -0.5, mr: 1 }, "&:before": { content: "''", display: "block", position: "absolute", top: 0, right: 14, width: 10, height: 10, bgcolor: "background.paper", transform: "translateY(-50%) rotate(45deg)", zIndex: 0 }}}}>
            <MenuItem id="menu-logout-gestor">
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Sair
            </MenuItem>
          </Menu>
        </Box>
      }

      {/* Header instrutor */}
      {cargo === "instrutor" &&
        <Box>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center", backgroundColor: "#fff", paddingLeft: 4, paddingRight: 4, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <a href="https://www.dbccompany.com.br/" title="DBC Company" rel="noreferrer" target={"_blank"}><img style={{ cursor: "pointer" }} src={logo} width={80} alt="Logo DBC" /></a>
              <Button variant="outlined" id="dashboard-instrutor" onClick={() => navigate("/dashboard/instrutor")} sx={{ textTransform: "capitalize" }}>Dashboard</Button>
              <Button variant="outlined" id="dashboard-cadastrar-instrutor" onClick={() => navigate("/cadastrar-aluno")} sx={{ textTransform: "capitalize" }} endIcon={<PersonAdd />}>Cadastrar aluno</Button>
              <Button variant="outlined" id="dashboard-feedback-instrutor" sx={{ textTransform: "capitalize" }} endIcon={<Chat />}>Cadastrar feedback</Button>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography id="boas-vindas-instrutor" sx={{ minWidth: 100, fontWeight: 600, color: "#090F27" }}>Seja bem-vindo(a) {nome}!</Typography>
              <Tooltip title="Menu" id="menu-avatar-instrutor">
                <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }} aria-controls={open ? "account-menu" : undefined} aria-haspopup="true" aria-expanded={open ? "true" : undefined}>
                  <Avatar sx={{ width: 40, height: 40 }} src={avatar} />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
          <Menu anchorEl={anchorEl} id="account-menu" open={open} onClose={handleClose} onClick={handleClose} transformOrigin={{ horizontal: "right", vertical: "top" }} anchorOrigin={{ horizontal: "right", vertical: "bottom" }} PaperProps={{ elevation: 0, sx: { overflow: "visible",filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))", mt: 1.5, "& .MuiAvatar-root": { width: 32, height: 32, ml: -0.5, mr: 1 }, "&:before": { content: "''", display: "block", position: "absolute", top: 0, right: 14, width: 10, height: 10, bgcolor: "background.paper", transform: "translateY(-50%) rotate(45deg)", zIndex: 0 }}}}>
            <MenuItem id="menu-logout-instrutor">
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Sair
            </MenuItem>
          </Menu>
        </Box>
      }
    </>
  );
};
