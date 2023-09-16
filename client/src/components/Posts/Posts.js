import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CircularProgress, Grid } from "@mui/material";
import {
  fetchPosts,
  getPostsStatus,
  selectAllPosts,
} from "../../features/Posts/postsSlice";
import Post from "./Post/Post";

const Posts = () => {
  const dispatch = useDispatch();
  /* CEK STATE POSTS */
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  switch (postsStatus) {
    case "loading":
      content = (
        <div>
          <CircularProgress />
        </div>
      );
      break;
    case "succeeded":
      content = (
        <Grid container spacing={1}>
          {posts.map((post) => (
            <Grid item key={post._id} xs={12} sm={5} md={3}>
              <Post postData={post}></Post>
            </Grid>
          ))}
        </Grid>
      );
      break;
    case "failed":
      content = <div>error</div>;
      break;
  }

  return <>{content} </>;
};

export default Posts;
