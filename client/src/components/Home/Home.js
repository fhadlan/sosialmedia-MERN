import React from "react";
import { Container, Grow, Grid } from "@mui/material";
import Posts from "../Posts/Posts";
import PostForm from "../Form/PostForm";

const Home = () => {
  return (
    <Container>
      <Grow in>
        <Grid container justifyContent="space-between" spacing={1}>
          <Grid item xs={12} sm={8} md={9}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <PostForm />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default Home;
