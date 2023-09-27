import React from "react";
import { Container, Grow, Grid } from "@mui/material";
import Posts from "../Posts/Posts";
import PostForm from "../Form/PostForm";
import { useSelector } from "react-redux";
import SearchForm from "../Form/SearchForm";

const Home = () => {
  const auth = useSelector((state) => state.auth.data._id);
  return (
    <Container>
      <Grow in>
        <Grid container justifyContent="space-between" spacing={1}>
          <Grid item xs={12} sm={4} md={3}>
            <SearchForm />
            {auth && <PostForm />}
          </Grid>
          <Grid item xs={12} sm={8} md={9}>
            <Posts />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};

export default Home;
