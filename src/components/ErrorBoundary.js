import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error) => {
      setHasError(true);
      console.log(error);
    };

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError) {
    return (
      <Box m={4}>
        <Typography variant="h4" mb={4}>
          Something went wrong.
        </Typography>
        <Typography>
          Please try again later or contact support if the issue persists.
        </Typography>
      </Box>
    );
  }

  return children;
};

export default ErrorBoundary;