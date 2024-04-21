import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Link as MuiLink } from "@mui/material";
import { getRepo } from "../service/api";

const RepoDetails = () => {
  const { repoName } = useParams();
  const [repo, setRepo] = useState(null);

  useEffect(() => {
    const fetchRepo = async () => {
      const data = await getRepo(repoName);
      setRepo(data);
    };
    fetchRepo();
  }, [repoName]);

  if (!repo) {
    return <div>Loading...</div>;
  }

  return (
    <Box m={4}>
      <Typography variant="h4" mb={4}>
        {repo.name}
      </Typography>
      <Typography mb={2}>Description: {repo.description}</Typography>
      <Typography mb={2}>Language: {repo.language}</Typography>
      <Typography mb={2}>
        Stars: {repo.stargazers_count}{" "}
        <MuiLink href={repo.html_url} target="_blank" rel="noopener">
          View on GitHub
        </MuiLink>
      </Typography>
    </Box>
  );
};

export default RepoDetails;
