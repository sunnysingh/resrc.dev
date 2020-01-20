import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Link } from '@chakra-ui/core';

import Header from './Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <Box p={8} borderTop="2px solid #242424">
        <Box as="main" paddingBottom={24}>
          {children}
        </Box>

        <Box as="footer" textAlign="center">
          <Text>
            © {new Date().getFullYear()} Resrc, A project by{' '}
            <Link href="https://sunnysingh.io/" textDecoration="underline">
              Sunny Singh
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
