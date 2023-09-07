import React from "react";
import { AppBar, Avatar, Box, Link, Toolbar, Typography } from "@mui/material";
import logo from "../../images/memories-Logo.png";

const Navbar = () => {
  const user = true;
  return (
    <>
      <AppBar position="static" color="default" variant="outlined">
        <Toolbar sx={{ display: "flex" }}>
          <img src={logo} alt="memories" height="48rem" width={"48rem"} />
          <Typography
            component={Link}
            href="/"
            variant="h2"
            display={{ xs: "none", sm: "inline" }}
          >
            SosialGram
          </Typography>
          <Box flexGrow={1} />
          {user ? <Avatar></Avatar> : <Typography>belum login</Typography>}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
