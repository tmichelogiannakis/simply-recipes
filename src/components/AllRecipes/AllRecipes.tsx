import { graphql, useStaticQuery } from 'gatsby';
import TagsList from '../TagsList/TagsList';
import RecipesList from '../RecipesList/RecipesList';
import { FetchAllRecipesQuery } from '../../../graphql-types';

export const query = graphql`
  query FetchAllRecipes {
    allContentfulRecipe(sort: { fields: title, order: ASC }) {
      nodes {
        id
        title
        cookTime
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

const AllRecipes = () => {
  const {
    allContentfulRecipe: { nodes: recipes }
  } = useStaticQuery<FetchAllRecipesQuery>(query);

  return (
    <section className="grid gap-y-8 gap-x-4 lg:grid-cols-recipes lg:gap-4 recipes-container">
      <TagsList recipes={recipes} />
      <RecipesList recipes={recipes} />
    </section>
  );
};

export default AllRecipes;
