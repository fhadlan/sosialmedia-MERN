import {
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { ThumbUp, Delete, MoreHoriz, Edit } from "@mui/icons-material";
import moment from "moment";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, likePost } from "../../../features/Posts/postsAPI";

const Post = ({ postData, userId }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.data.token);
  const [editMenu, setEditMenu] = useState(null);
  const [dialogDelete, setDialogDelete] = useState(null);
  const isLiked = postData.likes.findIndex((id) => id === userId);
  const creator = `${postData.userId.firstName} ${postData.userId.lastName}`;

  const menuOpen = Boolean(editMenu);
  const deleteOpen = Boolean(dialogDelete);

  const handleMenuClick = (e) => setEditMenu(e.currentTarget);
  const handleMenuClose = () => setEditMenu(null);
  const handleLike = () => dispatch(likePost({ postId: postData._id, token }));
  const handleDeleteClick = () => setDialogDelete(true);
  const handleDeleteClose = () => setDialogDelete(false);
  const handleDelete = (id) => dispatch(deletePost([id, token]));

  return (
    <>
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
          color={"white"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Box p={1} maxWidth={"70%"}>
            <Typography variant="h6" noWrap>
              {creator}
            </Typography>
            <Typography variant="body2">
              {moment(postData.createdAt).fromNow()}
            </Typography>
          </Box>
          <Box p={1}>
            {userId === postData.userId._id && (
              <IconButton
                size="small"
                color="inherit"
                onClick={handleMenuClick}
              >
                <MoreHoriz />
              </IconButton>
            )}
          </Box>
        </Box>
        <CardContent>
          <Typography variant="h5" gutterBottom noWrap>
            {postData.title}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton
            size="small"
            onClick={handleLike}
            disabled={userId === null ? true : false}
          >
            <ThumbUp color={isLiked >= 0 ? "primary" : "inherit"} />
          </IconButton>
          <Typography>{postData.likes.length}</Typography>
        </CardActions>
      </Card>

      {/* Menu edit/delete */}
      <Menu
        id="edit-menu"
        anchorEl={editMenu}
        open={menuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem>
          <Edit />
          <Typography>Edit</Typography>
        </MenuItem>
        <MenuItem onClick={handleDeleteClick}>
          <Delete />
          <Typography>Delete</Typography>
        </MenuItem>
      </Menu>

      {/* Dialog delete confirmation */}
      <Dialog open={deleteOpen} onClose={handleDeleteClose}>
        <DialogContent>
          <DialogContentText>Hapus postingan ini ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleDelete(postData._id)}>Ya</Button>
          <Button onClick={handleDeleteClose}>Tidak</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Post;
