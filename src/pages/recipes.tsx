import { graphql, useStaticQuery } from 'gatsby';
import Seo from '../components/Seo/Seo';
import RecipesComponent from '../components/Recipes/Recipes';
import { FetchRecipesQuery } from '../../graphql-types';

export const query = graphql`
  query FetchRecipes {
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
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

const Recipes = (): JSX.Element => {
  const {
    allContentfulRecipe: { nodes: recipes }
  } = useStaticQuery<FetchRecipesQuery>(query);

  return (
    <>
      <Seo title="Recipes" />
      <h1 className="text-center text-4xl mt-4 mb-8">Recipes!</h1>
      <RecipesComponent recipes={recipes} />
    </>
  );
};

export default Recipes;
