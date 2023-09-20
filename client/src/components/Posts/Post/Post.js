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
import { deletePost } from "../../../features/Posts/postsAPI";

const Post = ({ postData, userId }) => {
  const [editMenu, setEditMenu] = useState(null);
  const [dialogDelete, setDialogDelete] = useState(null);
  const dispatch = useDispatch();

  const menuOpen = Boolean(editMenu);
  const deleteOpen = Boolean(dialogDelete);

  const handleMenuClick = (e) => setEditMenu(e.currentTarget);
  const handleMenuClose = () => setEditMenu(null);
  const handleDeleteClick = () => setDialogDelete(true);
  const handleDeleteClose = () => setDialogDelete(false);
  const handleDelete = (id) => dispatch(deletePost(id));

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
              {postData.creator}
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
          <IconButton size="small">
            <ThumbUp />
          </IconButton>
          <Typography>{postData.likeCount}</Typography>
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
