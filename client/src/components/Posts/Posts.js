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

  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  console.log("post status:", postsStatus);
  console.log("posts:", posts);

  useEffect(() => {
    if (postsStatus === "idle") {
      console.log("triggered effect");
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  let content;
  console.log(postsStatus);
  switch (postsStatus) {
    case "idle":
      content = <div>idle</div>;
      break;
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
            <Grid item key={post._id} xs={12} sm={3}>
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
