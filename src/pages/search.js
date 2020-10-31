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
  Link,
  TagLabel,
  Skeleton,
} from '@chakra-ui/core';
import FitText from 'react-fittext';
import { titleCase } from 'voca';

import Layout from '../components/Layout';
import Metadata from '../components/Metadata';
import { useSearch } from '../components/Search';
import categories from '../config/categories';
import SunnyAvatar from '../images/sunny.jpg';

function SkeletonCard() {
  return (
    <Box p={[4, 8]} borderWidth="1px" rounded="lg">
      <Skeleton mb={2} width="100px" height="24px" />
      <Skeleton mb={4} height="160px" />
      <Skeleton mb={4} width="140px" height="24px" />
      <Skeleton mb={2} width="200px" height="24px" />
      <Skeleton width="200px" height="24px" />
    </Box>
  );
}

function SearchResults({ query }) {
  const { isLoading, isSuccess, isError, data, error } = useSearch(query);

  return (
    <>
      <Flex mb={[4, 10]} align="center" direction="column">
        <Heading as="h1" size="xl" mb={4} textAlign="center">
          {titleCase(query)} Resources
        </Heading>
      </Flex>

      {isLoading && (
        <SimpleGrid minChildWidth="280px" spacing={4}>
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </SimpleGrid>
      )}

      {isError && (
        <Flex width="100%" justifyContent="center" alignItems="center">
          <Flex alignItems="center" borderWidth="1px" p={8} rounded="lg">
            <Box mr={8}>
              <Heading mb={8} as="h2" size="lg">
                {error.statusCode === 404
                  ? "Hmm... I haven't come across that yet."
                  : error.message}
              </Heading>

              {error.statusCode === 404 ? (
                <Text fontSize="lg">
                  Keyword is <em>yet</em>, though. Maybe you have a{' '}
                  <Link
                    href="https://sunny.link/resrcsubmit"
                    textDecoration="underline"
                  >
                    suggestion to add
                  </Link>
                  ?
                </Text>
              ) : (
                <Text fontSize="lg">
                  If you continue to have this issue,{' '}
                  <Link
                    href="https://sunnysingh.io/contact"
                    textDecoration="underline"
                  >
                    please contact me
                  </Link>
                  .
                </Text>
              )}
            </Box>

            <Avatar src={SunnyAvatar} width="140px" height="140px" />
          </Flex>
        </Flex>
      )}

      {isSuccess && (
        <SimpleGrid minChildWidth="280px" spacing={4}>
          {data.results.map((result) => (
            <Box
              key={result.id}
              as="a"
              href={result.url}
              target="_blank"
              rel="noopener"
              p={[4, 8]}
              borderWidth="1px"
              rounded="lg"
            >
              {result.categories && (
                <Box mb={2}>
                  {result.categories.map((categoryName) => {
                    const category = categories.find(
                      ({ name }) => name === categoryName
                    );

                    return (
                      <Tag key={category.name} mb={2} mr={2} rounded="full">
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
                {result.image && <Image src={result.image} alt="" />}
              </Flex>

              <FitText>
                <Heading as="h3" mb={4}>
                  {result.name}
                </Heading>
              </FitText>

              <Text>{result.description}</Text>
            </Box>
          ))}
        </SimpleGrid>
      )}
    </>
  );
}

export default function SearchPage({ location }) {
  const query = new URLSearchParams(window.location.search).get('query');
  return (
    <Layout location={location}>
      <Metadata title={titleCase(query)} />
      <SearchResults query={query} />
    </Layout>
  );
}
