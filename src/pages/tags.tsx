import { graphql, Link, useStaticQuery } from 'gatsby';
import { FetchRecipesTagsQuery } from '../../graphql-types';
import Seo from '../components/Seo/Seo';
import setupTags from '../utils/setup-tags';

export const query = graphql`
  query FetchRecipesTags {
    allContentfulRecipe {
      nodes {
        content {
          tags
        }
      }
    }
  }
`;

const Tags = (): JSX.Element => {
  const {
    allContentfulRecipe: { nodes: recipes }
  } = useStaticQuery<FetchRecipesTagsQuery>(query);

  const tags = setupTags(recipes);

  return (
    <>
      <Seo title="Tags" />
      <h1 className="text-center text-4xl mt-4 mb-8">Tags!</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tags.map((tag, index) => {
          const [text, value] = tag;
          return (
            <Link
              to="/tags"
              key={index}
              className="bg-gray-500 rounded text-center text-white py-4 hover:bg-indigo-700 transition ease-in-out duration-300"
            >
              <h5 className="text-lg leading-tight capitalize">{text}</h5>
              <p className="my-0">{value} recipe</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Tags;
