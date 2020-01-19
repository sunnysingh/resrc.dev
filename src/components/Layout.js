import React from 'react';
import PropTypes from 'prop-types';
import {
  ThemeProvider,
  ColorModeProvider,
  Box,
  Text,
  Link,
} from '@chakra-ui/core';

import Header from './Header';
import theme from '../config/theme';

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Header />

        <Box p={8} borderTop="3px solid #242424">
          <Box as="main" paddingBottom={32}>
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
      </ColorModeProvider>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
