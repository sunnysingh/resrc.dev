import React from 'react';
import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { Box, Text, Link } from '@chakra-ui/react';

import Header from './Header';
import MaxWidthContainer from './MaxWidthContainer';

const queryClient = new QueryClient();

export default function Layout({ location, children }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header location={location} />

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
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};
