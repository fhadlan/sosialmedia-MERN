import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { ThumbUp, Delete, MoreHoriz } from "@mui/icons-material";
import moment from "moment";
import React from "react";
import { deletePost } from "../../../features/Posts/postsSlice";
import { useDispatch } from "react-redux";

const Post = ({ postData }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log("handledelete", id);
    dispatch(deletePost(id));
  };

  return (
    <Card sx={{ position: "relative" }}>
      <CardMedia
        sx={{
          height: "10rem",
          objectFit: "cover",
          filter: "brightness(50%)",
        }}
        component={"img"}
        image={`http://localhost:5000/assets/${postData.fileName}`}
      />
      <Box
        width={"100%"}
        position={"absolute"}
        top={0}
        left={0}
        color={"HighlightText"}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Box p={1} maxWidth={"70%"}>
          <Typography variant="h6" noWrap>
            {postData.creator}
          </Typography>
          <Typography variant="body2">
            {moment(postData.createdAt).fromNow()}
          </Typography>
        </Box>
        <Box p={1}>
          <IconButton size="small" color="inherit">
            <MoreHoriz />
          </IconButton>
        </Box>
      </Box>
      <CardContent>
        <Typography variant="h5" gutterBottom noWrap>
          {postData.title}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton size="small">
          <ThumbUp />
        </IconButton>
        <Typography>{postData.likeCount}</Typography>
        <IconButton onClick={() => handleDelete(postData._id)}>
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
