import React, { useState } from "react";

import Cinput from "./Cinput";
import { Container, Paper, Grid, Button, Typography } from "@mui/material";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const isSignUp = true;
  const handleChange = () => {};
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
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
              <Typography variant="button">Daftar</Typography>
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Auth;
