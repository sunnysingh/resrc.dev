import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Flex, Link } from '@chakra-ui/core';

import Logo from './Logo';

export default function Header() {
  return (
    <Box bg="background" w="100%" p={4}>
      <Flex>
        <GatsbyLink to="/">
          <Logo />
        </GatsbyLink>
        <Flex bg="transparent" align="center" p={8} marginLeft={[0, 0, 'auto']}>
          <Link as={GatsbyLink} to="/libraries" fontSize="2xl">
            Libraries
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
