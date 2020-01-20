import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Box, Flex, Link, IconButton, useColorMode } from '@chakra-ui/core';
import { FiMoon, FiSun } from 'react-icons/fi';

import Logo from './Logo';

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      bg={!colorMode || colorMode === 'dark' ? '#15171a' : 'white'}
      w="100%"
      p={4}
    >
      <Flex>
        <div>
          <GatsbyLink to="/">
            <Logo />
          </GatsbyLink>
        </div>
        <Flex bg="transparent" align="center" p={4} marginLeft="auto">
          <Link as={GatsbyLink} to="/categories" fontSize="2xl">
            Explore
          </Link>
          <IconButton
            ml={8}
            variant="outline"
            size="lg"
            onClick={toggleColorMode}
            icon={colorMode === 'dark' ? FiMoon : FiSun}
            aria-label="Change color mode"
          />
        </Flex>
      </Flex>
    </Box>
  );
}
