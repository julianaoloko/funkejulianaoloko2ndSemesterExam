import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  List,
  ListItem,
  Pagination,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { getRepos } from "../service/api";
import LoadingSpinner from "../components/LoadingSpinner";

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchRepo, setSearchRepo] = useState("");
  const [filterTerm, setFilterTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      const data = await getRepos(currentPage, 10, searchRepo);
      setRepos(data);
      setTotalPages(Math.ceil(data.total_count / 10));
      setLoading(false);
    };

    fetchRepos();
  }, [currentPage, searchRepo]);
  const handleSearchChange = (e) => {
    setSearchRepo(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterTerm(e.target.value);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const filteredRepos = repos?.filter(
    (repo) =>
      repo?.name?.toLowerCase().includes(searchRepo?.toLowerCase()) &&
      (filterTerm === "" || repo.language === filterTerm)
  );

  if (loading) {
    return <LoadingSpinner viewPortHeight="h-[80vh]" />;
  }

  return (
    <Box m={4}>
      <Typography variant="h4" mb={4}>
        GitHub Repositories
      </Typography>
      <TextField
        placeholder="Search repositories..."
        value={searchRepo}
        onChange={handleSearchChange}
        fullWidth
        mb={4}
      />
      <Box sx={{ margin: "1rem 0" }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            label="Filter"
            labelId="demo-simple-select-label"
            value={filterTerm}
            onChange={handleFilterChange}
            fullWidth
          >
            <MenuItem value="">Select</MenuItem>
            {Array.from(new Set(repos?.map((repo) => repo.language))).map(
              (language) => {
                return (
                  <MenuItem key={language} value={language}>
                    {language || "Unknown"}
                  </MenuItem>
                );
              }
            )}
          </Select>
        </FormControl>
      </Box>

      <List>
        {filteredRepos?.map((repo) => (
          <ListItem key={repo.id}>
            <Link to={`/repo/${repo.name}`}>{repo.name}</Link>
          </ListItem>
        ))}
      </List>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        showFirstButton
        showLastButton
        mt={4}
      />
    </Box>
  );
};

export default RepoList;
