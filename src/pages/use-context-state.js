import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/core';

import Layout from '../components/Layout';
import Metadata from '../components/Metadata';

import useContextStateIcon from '../images/use-context-state-icon.png';

function Intro() {
  return (
    <Flex mb={32} align="center" direction="column">
      <Image
        mb={4}
        src={useContextStateIcon}
        width="96px"
        height="96px"
        alt=""
      />
      <Heading as="h1" size="2xl" paddingBottom={8}>
        use-context-state
      </Heading>
      <Text>Lightweight state management for React Context</Text>
    </Flex>
  );
}

export default function UseContextStatePage() {
  return (
    <Layout>
      <Metadata title="use-context-state" />
      <Intro />
      <Box mx="auto" maxWidth="960px">
        <Heading as="h2" mb={4}>
          <span role="img" aria-label="">
            😕
          </span>{' '}
          Why another state management library?
        </Heading>
        <Text mb={8}>The reason is...</Text>
      </Box>
    </Layout>
  );
}
