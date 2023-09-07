import React from "react";
import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import logo from "../../images/memories-Logo.png";

const Navbar = () => {
  return (
    <>
      <AppBar position="static" color="default" variant="outlined">
        <Toolbar>
          <Typography component={Link} href="/" variant="h2">
            SosialGram
          </Typography>
          <img src={logo} alt="memories" height="48rem" width={"48rem"} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
