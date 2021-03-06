import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  Box,
  Flex,
  Link,
  IconButton,
  DarkMode,
  useColorMode,
} from '@chakra-ui/react';
import { FiMoon, FiSun } from 'react-icons/fi';

import MaxWidthContainer from './MaxWidthContainer';
import Search from './Search';
import Logo from './Logo';

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

const NavLink = ({ isCurrent, ...otherProps }) => (
  <Link
    as={otherProps.to ? GatsbyLink : 'a'}
    fontSize="2xl"
    mr={[4, 8]}
    borderBottom={isCurrent && '1px solid rgba(255, 255, 255, 0.5)'}
    _hover={{
      borderBottom: '1px solid white',
      textDecoration: 'none',
    }}
    {...otherProps}
  />
);

export default function Header({ location }) {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container>
      <Flex direction={['column', 'column', 'row']} align="center">
        <div>
          <GatsbyLink to="/">
            <Logo />
          </GatsbyLink>
        </div>

        <Search />

        <Flex
          bg="transparent"
          align="center"
          p={[2, 4]}
          marginLeft={[0, 0, 'auto']}
        >
          <NavLink
            to="/"
            fontSize={['xl', '2xl']}
            isCurrent={location.pathname === '/'}
          >
            Recent
          </NavLink>
          <NavLink
            to="/categories"
            fontSize={['xl', '2xl']}
            isCurrent={location.pathname === '/categories'}
          >
            Explore
          </NavLink>
          <NavLink
            href="https://sunny.link/resrcsubmit"
            fontSize={['xl', '2xl']}
            mr={0}
          >
            Submit
          </NavLink>
          <IconButton
            ml={[6, 8]}
            variant="outline"
            size="lg"
            onClick={toggleColorMode}
            icon={colorMode === 'dark' ? <FiMoon /> : <FiSun />}
            aria-label="Change color mode"
          />
        </Flex>
      </Flex>
    </Container>
  );
}
