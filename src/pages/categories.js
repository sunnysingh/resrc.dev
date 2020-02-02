import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Flex, Heading, Box, SimpleGrid, Image } from '@chakra-ui/core';

import Layout from '../components/Layout';
import Metadata from '../components/Metadata';

import categories from '../config/categories';

export default function CategoriesPage() {
  return (
    <Layout>
      <Metadata title="Categories" />

      <Flex mb={[4, 8]} align="center" direction="column">
        <Heading as="h1" size="xl">
          Find a resrc
        </Heading>
      </Flex>

      <SimpleGrid minChildWidth="280px" spacing={4}>
        {categories.map(category => (
          <Box
            key={category.url}
            as={GatsbyLink}
            to={category.url}
            p={4}
            borderWidth="1px"
            rounded="lg"
          >
            <Heading as="h3" mb={4} textAlign="center">
              {category.name}
            </Heading>

            <Flex justify="center" align="center">
              {category.icon && (
                <Box as={category.icon} size="96px" color={category.color} />
              )}

              {category.image && (
                <Image src={category.image} alt="" height="96px" />
              )}
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Layout>
  );
}
