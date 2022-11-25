import { Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import styles from "./App.module.css";

import logo from "./assets/logo.png";

function App() {
  return (
    <> 
      <Box display="flex" gap={6}>
        <Button variant="contained" href="https://www.youtube.com/" target="_blank" color={"secondary"}  className={styles.btn}>OLA</Button>
        <Button variant="contained" className={styles.btn}>OLA</Button>
      </Box>
      <h1>dasdsadsad</h1>

      <img className={styles.logo} src={logo} alt="logo" />
    </>
  );
}

export default App;
