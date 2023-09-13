import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Cinput = ({
  half,
  type,
  name,
  label,
  autoFocus,
  handleChange,
  handleShowPassword,
}) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      fullWidth
      type={type}
      name={name}
      label={label}
      variant="outlined"
      autoFocus={autoFocus}
      onChange={handleChange}
      required
      InputProps={
        name === "password" && {
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {type === "password" ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }
      }
    />
  </Grid>
);

export default Cinput;
