import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Link } from '@chakra-ui/core';

import Header from './Header';
import MaxWidthContainer from './MaxWidthContainer';

export default function Layout({ children }) {
  return (
    <>
      <Header />

      <MaxWidthContainer>
        <Box p={[4, 8]}>
          <Box as="main" paddingBottom={24}>
            {children}
          </Box>

          <Box as="footer" textAlign="center">
            <Text>
              © {new Date().getFullYear()} Resrc, a project by{' '}
              <Link href="https://sunnysingh.io/" textDecoration="underline">
                Sunny Singh
              </Link>
              . Open sourced{' '}
              <Link
                href="https://github.com/sunnysingh/resrc.dev"
                textDecoration="underline"
              >
                on GitHub
              </Link>
              .
            </Text>
          </Box>
        </Box>
      </MaxWidthContainer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
