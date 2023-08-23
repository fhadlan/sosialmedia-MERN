import React from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  Toolbar,
} from "@mui/material";

/**IMPORT COMPONENT */
import Posts from "./components/posts/Posts";
import Post from "./components/posts/post/Post";
import PostForm from "./components/Form/PostForm";
import logo from "./images/memories-Logo.png";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar
        position="static"
        color="inherit"
        sx={{
          borderRadius: 5,
          margin: "40px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h2" align="left" color="skyblue" fontSize={"3rem"}>
          SosialGram
        </Typography>
        <img src={logo} alt="memories" height="48rem" width={"48rem"} />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems={"stretch"}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PostForm />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
