import React, { useState, useEffect, useRef } from 'react';
import { navigate } from 'gatsby';
import { useQuery } from 'react-query';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { Box, Input } from '@chakra-ui/react';

const SEARCH_API_ENDPOINT = '/.netlify/functions/search';

const fetchSearch = async (key, query) => {
  if (!query) {
    throw new Error('Search query is required.');
  }

  return fetch(
    `${SEARCH_API_ENDPOINT}?query=${encodeURIComponent(query)}`
  ).then(async (response) => {
    const data = await response.json().catch((error) => null);

    if (response.status !== 200 || !data) {
      const error = new Error(data?.error || 'Unknown error');
      error.statusCode = response.status;
      throw error;
    }

    return data;
  });
};

export function useSearch(query) {
  return useQuery(['search', query], fetchSearch, {
    retry: 1,
    refetchOnWindowFocus: false,
  });
}

export default function Search() {
  const [query, setQuery] = useState('');
  const inputElement = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${encodeURIComponent(query)}`);
    inputElement.current.blur();
  };

  useEffect(() => {
    const queryFromQueryString = new URLSearchParams(
      window.location.search
    ).get('query');

    if (queryFromQueryString) setQuery(queryFromQueryString);
  }, []);

  return (
    <Box
      as="form"
      pt={[8, 8, 0]}
      ml={[0, 8]}
      mr={[0, 8]}
      onSubmit={handleSubmit}
    >
      <Input
        id="query"
        placeholder="Search..."
        aria-label="Search query"
        size="lg"
        variant="filled"
        onChange={(event) => setQuery(event.target.value)}
        value={query}
        ref={inputElement}
        isRequired
      />

      <VisuallyHidden>
        <button type="submit">Submit</button>
      </VisuallyHidden>
    </Box>
  );
}
