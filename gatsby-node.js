const path = require('path');
const slugify = require('slugify');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query FetRecipesTags {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `);

  // create a set of tags
  const tags = new Set();
  result.data.allContentfulRecipe.nodes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      tags.add(tag);
    });
  });
  // Iterate over set tags
  Array.from(tags).forEach(tag => {
    createPage({
      path: `/tags/${slugify(tag, { lower: true })}`,
      component: path.resolve('src/templates/tag-template.tsx'),
      context: {
        tag: tag
      }
    });
  });
};
