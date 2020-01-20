import React from 'react';
import { Flex, Heading, Box, Stack, Text, Image } from '@chakra-ui/core';

import Layout from './Layout';
import Metadata from './Metadata';

export default function ResourcePage({ pageContext }) {
  const { items, category } = pageContext;
  return (
    <Layout>
      <Metadata title={category} />
      <Flex mb={8} align="center" direction="column">
        <Heading as="h1" size="xl">
          {category} Resources
        </Heading>
      </Flex>

      <Stack spacing={8} direction="row">
        {items.map(item => (
          <Box
            key={item.url}
            as="a"
            href={item.url}
            target="_blank"
            rel="noopener"
            p={8}
            maxW="md"
            borderWidth="1px"
            rounded="lg"
          >
            <Flex mb={4} justify="center">
              <Image src={item.image} alt="" height="140px" />
            </Flex>

            <Heading as="h3" mb={4}>
              {item.name}
            </Heading>

            <Text>{item.description}</Text>
          </Box>
        ))}
      </Stack>
    </Layout>
  );
}
