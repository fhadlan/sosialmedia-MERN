import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Input,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../features/Posts/postsAPI";

const PostForm = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.data.token);
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    tags: [],
    selectedFile: {},
  });

  const clearPost = () => {
    setPostData();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(postData).forEach((data) => {
      let [key, value] = data;
      formData.append(key, value);
    });
    console.log("handlesubmit", token);
    dispatch(createPost([formData, token]));
  };

  return (
    <Paper variant="outlined">
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        display={"flex"}
        flexDirection={"column"}
        gap={1}
        m={1}
      >
        <Typography variant="h5" textAlign={"center"}>
          Buat post
        </Typography>

        <TextField
          name="title"
          size="small"
          label="Title"
          onBlur={(e) => handleChange(e)}
        />
        <TextField
          name="message"
          size="small"
          label="Message"
          onBlur={(e) => handleChange(e)}
        />
        <TextField
          name="tags"
          size="small"
          label="Tags"
          onBlur={(e) => handleChange(e)}
        />
        <Input
          type="file"
          label="Image"
          multiline={false}
          inputProps={{ accept: "image/png, image/jpeg" }}
          onChange={(e) =>
            setPostData({ ...postData, selectedFile: e.target.files[0] })
          }
        />
        <Button type="submit" variant="contained">
          POST
        </Button>
      </Box>
    </Paper>
  );
};

export default PostForm;
