const Airtable = require('airtable');
const ImgixClient = require('imgix-core-js');

const AIRTABLE_BASE_ID = 'appxAjT2ITT8Y4zRv';
const AIRTABLE_TABLE_NAME = 'Resources';
const AIRTABLE_PAGE_SIZE = 30;

const RESPONSE_HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
};

const imgix = new ImgixClient({
  domain: 'cdn.sunny.app',
  secureURLToken: process.env.IMGIX_SECURE_URL_TOKEN,
});

const getCdnUrl = (url) => imgix.buildURL(url, { w: 500 });

const normalizeAirtableData = (data) => ({
  id: data.id,
  name: data.Name,
  description: data.Description,
  url: data.URL,
  categories: data.Category || [],
  date: data.Date,
  image: Array.isArray(data.Image) ? getCdnUrl(data.Image[0].url) : null,
});

exports.handler = async function (event) {
  const { query } = event.queryStringParameters;

  if (!query) {
    return {
      statusCode: 422,
      body: JSON.stringify({ error: 'Query is required in query string.' }),
    };
  }

  if (!process.env.AIRTABLE_API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Airtable API key is missing.' }),
    };
  }

  const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
    AIRTABLE_BASE_ID
  );

  const records = await base(AIRTABLE_TABLE_NAME)
    .select({
      pageSize: AIRTABLE_PAGE_SIZE,
      filterByFormula: `
      OR(
        SEARCH("${query.toLowerCase()}", LOWER({Name})),
        SEARCH("${query.toLowerCase()}", LOWER({Description})),
        SEARCH("${query.toLowerCase()}", LOWER({Category})),
        SEARCH("${query.toLowerCase()}", LOWER({URL}))
      )
    `,
    })
    .firstPage()
    .catch((error) => {
      console.log(`Search error from Airtable API: ${error.message}`);
      return null;
    });

  const noResults = !Array.isArray(records) || records.length === 0;

  if (noResults) {
    return {
      statusCode: 404,
      body: JSON.stringify({ error: 'No results.' }),
    };
  }

  const results = records.map((record) => ({
    id: record.id,
    ...normalizeAirtableData(record.fields),
  }));

  return {
    statusCode: 200,
    headers: RESPONSE_HEADERS,
    body: JSON.stringify({ results }),
  };
};
