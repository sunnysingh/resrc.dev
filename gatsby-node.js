const dotenv = require('dotenv');
const slugify = require('voca/slugify');
const ImgixClient = require('imgix-core-js');

dotenv.config({ path: '.env' });

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

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Airtable') {
    const data = normalizeAirtableData(node.data);

    Object.entries(data).forEach(([name, value]) => {
      createNodeField({ node, name, value });
    });
  }
};

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allAirtable(
        filter: { table: { eq: "Resources" } }
        sort: { order: DESC, fields: data___Date }
      ) {
        edges {
          node {
            data {
              Category
              Name
              Description
              URL
              Image {
                url
              }
            }
          }
        }
      }
    }
  `);

  const pagesByCategory = {};

  results.data.allAirtable.edges.forEach((edge) => {
    const { categories, name, description, url, image } = normalizeAirtableData(
      edge.node.data
    );

    console.log('CATEGORIES', categories);

    if (categories.length === 0) return;

    categories.forEach((category) => {
      if (!pagesByCategory[category]) pagesByCategory[category] = [];
      pagesByCategory[category].push({ name, description, url, image });
    });
  });

  Object.entries(pagesByCategory).forEach(([category, items]) => {
    const slug = slugify(category.toLowerCase());
    createPage({
      path: `/${slug}`,
      component: require.resolve('./src/components/ResourceLayout.js'),
      context: {
        items,
        category,
        slug,
      },
    });
  });
};
