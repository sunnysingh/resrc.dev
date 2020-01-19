const slugify = require('voca/slugify');

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      allAirtable(filter: { table: { eq: "Resources" } }) {
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

  results.data.allAirtable.edges.forEach(edge => {
    const resrc = edge.node.data;

    resrc.Category.forEach(category => {
      if (!pagesByCategory[category]) pagesByCategory[category] = [];
      pagesByCategory[category].push({
        name: resrc.Name,
        description: resrc.Description,
        url: resrc.URL,
        image: Array.isArray(resrc.Image) ? resrc.Image[0].url : null,
      });
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
