import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts, getPostsStatus, selectAllPosts } from "./postsSlice";
import Post from "./Post";

const Posts = () => {
  const dispatch = useDispatch();

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
      content = <div>Loading</div>;
      break;
    case "succeeded":
      content = <div>sukses</div>;
      break;
    case "failed":
      content = <div>error</div>;
      break;
  }

  console.log(posts.posts);
  return <>{content} </>;
};

export default Posts;
