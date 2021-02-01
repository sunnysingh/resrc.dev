import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Flex, Heading, Box, SimpleGrid, Image, Link } from '@chakra-ui/react';
import FitText from 'react-fittext';

import Layout from '../components/Layout';
import Metadata from '../components/Metadata';

import categories from '../config/categories';

export default function CategoriesPage({ location }) {
  return (
    <Layout location={location}>
      <Metadata title="Categories" />

      <Flex mb={[4, 10]} align="center" direction="column">
        <Heading as="h1" size="xl" mb={4} textAlign="center">
          Software Development Resources
        </Heading>
        <Heading as="h2" size="md">
          Recently curated by{' '}
          <Link href="https://sunnysingh.io/" textDecoration="underline">
            Sunny Singh
          </Link>
        </Heading>
      </Flex>
      <SimpleGrid minChildWidth="280px" spacing={4}>
        {categories.map((category) => (
          <Box
            key={category.url}
            as={GatsbyLink}
            to={category.url}
            p={[4, 8]}
            borderWidth="1px"
            borderColor="gray.300"
            rounded="lg"
            _hover={{
              borderColor: 'gray.400',
              transition: 'border-color 200ms ease-in-out',
            }}
          >
            <FitText>
              <Heading as="h3" mb={4} textAlign="center">
                {category.name}
              </Heading>
            </FitText>

            <Flex justify="center" align="center">
              {category.icon && (
                <Box as={category.icon} boxSize="96px" color={category.color} />
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
