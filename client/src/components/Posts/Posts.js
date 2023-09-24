import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CircularProgress, Grid } from "@mui/material";
import { fetchPosts } from "../../features/Posts/postsAPI";
import Post from "./Post/Post";

const Posts = () => {
  const dispatch = useDispatch();
  /* CEK STATE POSTS */
  const auth = useSelector((state) => state.auth.data._id);
  const posts = useSelector((state) => state.posts.data);
  const postsStatus = useSelector((state) => state.posts.status);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  switch (postsStatus) {
    case "loading":
      content = <CircularProgress />;
      break;
    case "succeeded":
      content = (
        <Grid container spacing={1}>
          {posts.map((post) => (
            <Grid item key={post._id} width={"280px"}>
              <Post postData={post} userId={auth} />
            </Grid>
          ))}
        </Grid>
      );
      break;
    case "failed":
      content = <div>error</div>;
      break;
  }

  return content;
};

export default Posts;
