import React from 'react';
import { Box, Typography } from '@mui/material';

const NotFound = () => {
  return (
    <Box m={4}>
      <Typography variant="h4" mb={4}>
        404 - Page Not Found
      </Typography>
      <Typography>The page you are looking for does not exist.</Typography>
    </Box>
  );
};

export default NotFound;