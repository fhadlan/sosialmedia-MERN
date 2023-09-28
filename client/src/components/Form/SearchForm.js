import React, { useEffect, useState } from "react";
import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchPosts, fetchPostsSearch } from "../../features/Posts/postsAPI";
import { MuiChipsInput } from "mui-chips-input";

const SearchForm = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [chips, setChips] = useState([]);
  const [searchQuery, setSearchQuery] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchParams) dispatch(fetchPostsSearch({ searchParams }));
  }, [searchParams]);

  const handleChangeQuery = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleChangeChips = (e) => {
    setChips(e);
  };

  const handleSearch = () => {
    const search = {};
    if (searchQuery) search["searchQuery"] = searchQuery;
    if (chips.length > 0) search["tags"] = chips.join("-");
    setSearchParams(search);
  };

  return (
    <Paper variant="outlined">
      <Box display={"flex"} flexDirection={"column"} m={1} rowGap={1}>
        <Typography variant="h5" textAlign={"center"}>
          Search
        </Typography>
        <TextField
          label="Search"
          name="searchQuery"
          size="small"
          defaultValue={searchParams.get("searchQuery")}
          onChange={handleChangeQuery}
        />
        <MuiChipsInput
          size="small"
          label="Tags"
          value={chips}
          onChange={handleChangeChips}
        />
        <Button onClick={handleSearch}>Search</Button>
      </Box>
    </Paper>
  );
};

export default SearchForm;
