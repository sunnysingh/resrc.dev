import React from 'react';
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/core';

import Layout from '../components/Layout';
import Metadata from '../components/Metadata';

import useContextStateIcon from '../images/use-context-state-icon.png';

function Intro() {
  return (
    <Flex mb={32} align="center" direction="column">
      <Image mb={4} src={useContextStateIcon} width="96px" alt="" />
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
      <Metadata />
      <Intro />
      <Text textAlign="center">Coming soon...</Text>
    </Layout>
  );
}
