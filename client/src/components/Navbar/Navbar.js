import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Toolbar,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import logo from "../../images/memories-Logo.png";

import { useDispatch, useSelector } from "react-redux";
import { signout } from "../../features/Auth/authSlice";

const Navbar = () => {
  const [authMenu, setAuthMenu] = useState(null);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.data);

  const menuOpen = Boolean(authMenu);
  const handleMenuClick = (e) => setAuthMenu(e.currentTarget);
  const handleMenuClose = () => setAuthMenu(null);

  const handleSignOut = () => {
    dispatch(signout());
    setAuthMenu(null);
  };

  return (
    <Box mb={1}>
      <AppBar
        position="static"
        color="default"
        variant="outlined"
        elevation={0}
      >
        <Toolbar sx={{ display: "flex" }}>
          <Box
            component={Link}
            to={"/"}
            sx={{ textDecoration: "none" }}
            color={"inherit"}
          >
            <img src={logo} alt="memories" height="48rem" width={"48rem"} />
            <Typography variant="h2" display={{ xs: "none", sm: "inline" }}>
              SosialGram
            </Typography>
          </Box>
          <Box flexGrow={1} />
          {user ? (
            <Box display={"flex"} justifyContent={"space-evenly"}>
              <Typography
                variant="h5"
                display={{ xs: "none", sm: "inline" }}
              >{`${user.data.firstName} ${user.data.lastName}`}</Typography>
              <Avatar onClick={handleMenuClick}>
                {user.data.firstName[0].toUpperCase()}
              </Avatar>
            </Box>
          ) : (
            <Button>
              <Typography variant="button" component={Link} to={"/auth"}>
                Login
              </Typography>
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Menu
        id="auth-menu"
        anchorEl={authMenu}
        open={menuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem>
          <Typography>Edit</Typography>
        </MenuItem>
        <MenuItem onClick={handleSignOut}>
          <Typography>Log out</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default Navbar;
