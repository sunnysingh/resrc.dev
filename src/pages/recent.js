import React from 'react';
import {
  Flex,
  Heading,
  Box,
  SimpleGrid,
  Text,
  Image,
  Avatar,
  Tag,
  TagLabel,
} from '@chakra-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import FitText from 'react-fittext';

import Layout from '../components/Layout';
import Metadata from '../components/Metadata';
import categories from '../config/categories';

export default function RecentPage() {
  const { allAirtable } = useStaticQuery(
    graphql`
      query {
        allAirtable(limit: 28, sort: { order: DESC, fields: data___Date }) {
          nodes {
            data {
              Category
              Date
              Description
              Name
              URL
              Image {
                url
              }
            }
          }
        }
      }
    `
  );
  return (
    <Layout>
      <Metadata
        title="Recently added"
        description="Software development resources recently added to Resrc"
      />

      <Flex mb={[4, 8]} align="center" direction="column">
        <Heading as="h1" size="xl" textAlign="center">
          Recently added
        </Heading>
      </Flex>

      <SimpleGrid minChildWidth="280px" spacing={4}>
        {allAirtable.nodes.map((node) => (
          <Box
            key={node.data.URL}
            as="a"
            href={node.data.URL}
            target="_blank"
            rel="noopener"
            p={[4, 8]}
            borderWidth="1px"
            rounded="lg"
          >
            {node.data.Category && (
              <Box mb={2}>
                {node.data.Category.map((categoryName) => {
                  const category = categories.find(
                    ({ name }) => name === categoryName
                  );

                  return (
                    <Tag mb={2} mr={2} rounded="full">
                      {category.icon && (
                        <Box
                          as={category.icon}
                          size="24px"
                          ml={-1}
                          mr={2}
                          color={category.color}
                        />
                      )}

                      {category.image && (
                        <Avatar
                          src={category.image}
                          size="xs"
                          ml={-1}
                          mr={2}
                          background="transparent"
                        />
                      )}
                      <TagLabel>{category.name}</TagLabel>
                    </Tag>
                  );
                })}
              </Box>
            )}

            <Flex
              mb={4}
              overflow="hidden"
              height="160px"
              align="center"
              justify="center"
            >
              {Array.isArray(node.data.Image) && (
                <Image src={node.data.Image[0].url} alt="" />
              )}
            </Flex>

            <FitText>
              <Heading as="h3" mb={4}>
                {node.data.Name}
              </Heading>
            </FitText>

            <Text>{node.data.Description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Layout>
  );
}
