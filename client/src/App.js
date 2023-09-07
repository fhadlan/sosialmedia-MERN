import React from "react";
import { Container, Grow, Grid } from "@mui/material";

/**IMPORT COMPONENT */
import Posts from "./components/Posts/Posts";
import PostForm from "./components/Form/PostForm";

import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Grow in>
          <Grid container justifyContent="space-between" mt={1} spacing={1}>
            <Grid item xs={12} sm={9}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={3}>
              <PostForm />
            </Grid>
          </Grid>
        </Grow>
      </Container>
    </>
  );
};

export default App;
