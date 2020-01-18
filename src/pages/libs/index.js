import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  Flex,
  Heading,
  Box,
  Stack,
  Text,
  Button,
  Alert,
  AlertIcon,
} from '@chakra-ui/core';

import Layout from '../../components/Layout';
import Metadata from '../../components/Metadata';

function Intro() {
  return (
    <Flex mb={8} align="center" direction="column">
      <Heading as="h1" size="2xl">
        Libraries
      </Heading>
    </Flex>
  );
}

export default function LibrariesPage() {
  return (
    <Layout>
      <Metadata />
      <Intro />
      <Alert maxWidth="lg" status="info">
        <AlertIcon />
        Resrc is a work in progress. More resources coming soon!
      </Alert>
      <Box pt={8}>
        <Heading as="h2" mb={4}>
          React
        </Heading>
        <Stack spacing={8}>
          <Box
            as={GatsbyLink}
            to="/use-context-state"
            p={4}
            maxW="md"
            borderWidth="1px"
            rounded="lg"
          >
            <Heading as="h3" mb={2}>
              use-context-state
            </Heading>
            <Text mb={4}>Lightweight state management for React Context</Text>
            <Button variant="outline">View</Button>
          </Box>
        </Stack>
      </Box>
    </Layout>
  );
}
