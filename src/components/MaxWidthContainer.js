import React from 'react';
import { Box } from '@chakra-ui/core';

export default function MaxWidthContainer({ children }) {
  return (
    <Box maxWidth="1280px" mx="auto">
      {children}
    </Box>
  );
}
