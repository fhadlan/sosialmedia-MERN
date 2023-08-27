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

const Post = ({ postData }) => {
  return (
    <Card sx={{ maxWidth: "20rem", position: "relative" }}>
      <CardMedia
        sx={{ objectFit: "fill", filter: "brightness(50%)" }}
        component={"img"}
        image={`http://localhost:5000/assets/${postData.fileName}`}
      />
      <Box position={"absolute"} top={5} left={5} color={"HighlightText"}>
        <Typography gutterBottom variant="h6">
          {postData.creator}
        </Typography>
        <Typography variant="body2">
          {moment(postData.createdAt).fromNow()}
        </Typography>
      </Box>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {postData.title}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton size="small">
          <ThumbUp />
        </IconButton>
        <Typography>{postData.likeCount}</Typography>
        <IconButton>
          <Delete />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
