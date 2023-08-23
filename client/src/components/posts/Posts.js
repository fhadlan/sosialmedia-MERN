import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchPosts,
  getPostsStatus,
  selectAllPosts,
} from "../../features/Posts/postsSlice";

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
      content = <div>Loading</div>;
      break;
    case "succeeded":
      content = <div>sukses</div>;
      break;
    case "failed":
      content = <div>error</div>;
      break;
  }

  return <>{content} </>;
};

export default Posts;
