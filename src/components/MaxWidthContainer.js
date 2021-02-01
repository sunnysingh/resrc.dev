import React from 'react';
import { Box } from '@chakra-ui/react';

export default function MaxWidthContainer({ children }) {
  return (
    <Box maxWidth="1280px" mx="auto">
      {children}
    </Box>
  );
}
