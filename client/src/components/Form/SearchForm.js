import React from "react";
import { Box, Paper, TextField, Typography } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPostsSearch } from "../../features/Posts/postsAPI";

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const handleKeyUp = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setSearchParams({ searchQuery: value });
    if (e.keyCode == "13") {
      console.log(searchParams.get("searchQuery"));
      dispatch(fetchPostsSearch({ searchParams }));
    }
  };

  return (
    <Paper variant="outlined">
      <Box display={"flex"} flexDirection={"column"} m={1}>
        <Typography variant="h5" textAlign={"center"}>
          Search
        </Typography>
        <TextField
          label="Search"
          name="Search"
          size="small"
          onKeyUp={handleKeyUp}
        />
      </Box>
    </Paper>
  );
};

export default SearchForm;
