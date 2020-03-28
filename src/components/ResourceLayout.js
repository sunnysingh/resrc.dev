import React from 'react';
import { Flex, Heading, Box, SimpleGrid, Text, Image } from '@chakra-ui/core';
import FitText from 'react-fittext';

import Layout from './Layout';
import Metadata from './Metadata';

export default function ResourceLayout({ pageContext }) {
  const { items, category } = pageContext;
  return (
    <Layout>
      <Metadata
        title={`${category} resources`}
        description={`Software development resources related to ${category}`}
      />

      <Flex mb={[4, 8]} align="center" direction="column">
        <Heading as="h1" size="xl">
          {category} resources
        </Heading>
      </Flex>

      <SimpleGrid minChildWidth="280px" spacing={4}>
        {items.map(item => (
          <Box
            key={item.url}
            as="a"
            href={item.url}
            target="_blank"
            rel="noopener"
            p={[4, 8]}
            borderWidth="1px"
            rounded="lg"
          >
            <Flex
              mb={4}
              overflow="hidden"
              height="160px"
              align="center"
              justify="center"
            >
              <Image src={item.image} alt="" />
            </Flex>

            <FitText>
              <Heading as="h3" mb={4}>
                {item.name}
              </Heading>
            </FitText>

            <Text>{item.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Layout>
  );
}
