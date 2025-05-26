import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";


const SideMenuHd = () => {

  return (
    <AppBar 
    position="sticky" 
    color="primary">
      <Toolbar sx={{ display: "flex", flexFlow:"column", justifyContent: "space-between", padding: "0 20px" }}>
        <Typography variant="h3" >
          BeastMode
        </Typography>
        <Typography variant="subtitle1">
          Gym X
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default SideMenuHd;
