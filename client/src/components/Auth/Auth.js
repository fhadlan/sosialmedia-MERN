import React, { useState } from "react";

import Cinput from "./Cinput";
import {
  Container,
  Paper,
  Grid,
  Button,
  Typography,
  Link,
  Box,
  Avatar,
} from "@mui/material";
import { Lock, PersonAdd } from "@mui/icons-material";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSingUp] = useState(false);
  const handleChange = () => {};
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  const handleSwitchSignUp = () => setIsSingUp((prevIsSignUp) => !prevIsSignUp);
  const handleSubmit = () => {};

  return (
    <Container component={"main"} maxWidth="xs">
      <Paper variant="outlined">
        <Grid
          container
          spacing={1}
          p={1}
          component="form"
          onSubmit={handleSubmit}
        >
          <Grid
            item
            display={"block"}
            justifyContent={"center"}
            xs={12}
            sm={12}
          >
            {isSignUp ? (
              <Box display={"grid"} justifyItems={"center"} rowGap={1}>
                <Avatar>
                  <PersonAdd />
                </Avatar>
                <Typography variant="h5">Daftar Akun Baru</Typography>
              </Box>
            ) : (
              <Box display={"grid"} justifyItems={"center"} rowGap={1}>
                <Avatar>
                  <Lock />
                </Avatar>

                <Typography variant="h5">Login SocialGram</Typography>
              </Box>
            )}
          </Grid>

          {isSignUp && (
            <>
              <Cinput
                name={"firstName"}
                label={"Nama Awal"}
                handleChange={handleChange}
                autoFocus
                half
              />
              <Cinput
                name={"lastName"}
                label={"Nama Akhir"}
                handleChange={handleChange}
                half
              />
            </>
          )}
          <Cinput
            type={"email"}
            name={"email"}
            label={"Email"}
            handleChange={handleChange}
          />
          <Cinput
            type={showPassword ? "text" : "password"}
            name={"password"}
            label={"Password"}
            handleChange={handleChange}
            handleShowPassword={handleShowPassword}
          />
          {isSignUp && (
            <Cinput
              type={"password"}
              name={"confirmPassword"}
              label={"Ulangi password"}
              handleChange={handleChange}
            />
          )}
          <Grid item xs={12} sm={12}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              <Typography variant="button">
                {isSignUp ? "DAFTAR" : "MASUK"}
              </Typography>
            </Button>
          </Grid>

          <Grid container item justifyContent={"right"}>
            {isSignUp ? (
              <Typography>
                Sudah punya akun?{" "}
                <Link component={"button"} onClick={handleSwitchSignUp}>
                  Login
                </Link>
              </Typography>
            ) : (
              <Typography>
                Belum punya akun?{" "}
                <Link component={"button"} onClick={handleSwitchSignUp}>
                  Daftar
                </Link>
              </Typography>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Auth;
