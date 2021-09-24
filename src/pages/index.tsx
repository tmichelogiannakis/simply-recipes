import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo/Seo';
import { FetchFeauteredRecipesQuery } from '../../graphql-types';
import Recipes from '../components/Recipes/Recipes';

export const query = graphql`
  query FetchFeauteredRecipes {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
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

const Home = (): JSX.Element => {
  const {
    allContentfulRecipe: { nodes: recipes }
  } = useStaticQuery<FetchFeauteredRecipesQuery>(query);

  return (
    <>
      <Seo title="Home" />
      <header className="h-screen-40 relative mb-8">
        <StaticImage
          src="../assets/images/main.jpeg"
          alt="eggs"
          className="h-full rounded"
          placeholder="tracedSVG"
          layout="fullWidth"
        ></StaticImage>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 rounded">
          <div className="text-white text-center">
            <h1 className="text-6xl">Simply Recipes</h1>
            <p>No Fluff, Just Recipes</p>
          </div>
        </div>
      </header>
      <Recipes title=" Look At This Awesomesouce!" recipes={recipes} />
    </>
  );
};

export default Home;
