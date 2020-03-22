import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  Box,
  Flex,
  Link,
  IconButton,
  DarkMode,
  useColorMode,
} from '@chakra-ui/core';
import { FiMoon, FiSun } from 'react-icons/fi';

import Logo from './Logo';
import MaxWidthContainer from './MaxWidthContainer';

const Container = ({ children }) => {
  return (
    <DarkMode>
      <Box
        color="white"
        bg="#15171a"
        w="100%"
        py={4}
        borderBottom="2px solid #242424"
      >
        <MaxWidthContainer>
          <Box px={[4, 8]}>{children}</Box>
        </MaxWidthContainer>
      </Box>
    </DarkMode>
  );
};

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container>
      <Flex direction={['column', 'row']} align="center">
        <div>
          <GatsbyLink to="/">
            <Logo />
          </GatsbyLink>
        </div>
        <Flex
          bg="transparent"
          align="center"
          p={[2, 4]}
          marginLeft={[0, 'auto']}
        >
          <Link as={GatsbyLink} to="/recent" fontSize="2xl" mr={[4, 8]}>
            Recent
          </Link>
          <Link as={GatsbyLink} to="/categories" fontSize="2xl" mr={[4, 8]}>
            Explore
          </Link>
          <Link href="https://sunny.link/resrcsubmit" fontSize="2xl">
            Submit
          </Link>
          <IconButton
            ml={[6, 8]}
            variant="outline"
            size="lg"
            onClick={toggleColorMode}
            icon={colorMode === 'dark' ? FiMoon : FiSun}
            aria-label="Change color mode"
          />
        </Flex>
      </Flex>
    </Container>
  );
}
