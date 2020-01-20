import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Flex, Heading, Box, Stack, Image } from '@chakra-ui/core';

import Layout from '../components/Layout';
import Metadata from '../components/Metadata';

import categories from '../config/categories';

export default function CategoriesPage() {
  return (
    <Layout>
      <Metadata title="Categories" />

      <Flex mb={8} align="center" direction="column">
        <Heading as="h1" size="xl">
          Explore
        </Heading>
      </Flex>

      <Stack
        mx="auto"
        maxWidth="1280px"
        spacing={8}
        direction="row"
        wrap="wrap"
        justify="center"
        mt={-8}
      >
        {categories.map(category => (
          <Box
            key={category.url}
            as={GatsbyLink}
            to={category.url}
            mt={8}
            p={8}
            width="sm"
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
        {/* Hack to get items to align properly */}
        <div />
      </Stack>
    </Layout>
  );
}
