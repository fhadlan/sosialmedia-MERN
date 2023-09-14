import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from "../../images/memories-Logo.png";

const Navbar = () => {
  const user = null;
  return (
    <Box mb={1}>
      <AppBar position="static" color="default" variant="outlined">
        <Toolbar sx={{ display: "flex" }}>
          <img src={logo} alt="memories" height="48rem" width={"48rem"} />
          <Typography
            component={Link}
            to={"/"}
            variant="h2"
            display={{ xs: "none", sm: "inline" }}
          >
            SosialGram
          </Typography>
          <Box flexGrow={1} />
          {user ? (
            <Avatar></Avatar>
          ) : (
            <Button>
              <Typography variant="button" component={Link} to={"/auth"}>
                Login
              </Typography>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
