import React from "react";
import { useState } from "react";
import { Box, Paper, TextField, Typography } from "@mui/material";

const PostForm = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const handleSubmit = () => {};
  return (
    <form onSubmit={handleSubmit}>
      <Box display={"flex"} flexDirection={"column"} rowGap={0.5}>
        <Typography variant="h6">Buat post</Typography>
        <TextField name="creator" variant="outlined" label="Creator" />
        <TextField name="title" variant="outlined" label="Title" />
        <TextField name="message" variant="outlined" label="Message" />
        <TextField name="tags" variant="outlined" label="Tags" />
      </Box>
    </form>
  );
};

export default PostForm;
