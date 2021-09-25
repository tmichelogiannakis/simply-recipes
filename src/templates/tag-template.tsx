import { graphql, PageProps } from 'gatsby';
import RecipesList from '../components/Recipes/RecipesList';
import Seo from '../components/Seo/Seo';
import { ContentfulAsset, ContentfulRecipe, Maybe } from '../../graphql-types';

type TagTemplatePageContextType = {
  tag: string;
};

type TagTemplatePageDataType = {
  allContentfulRecipe: {
    nodes: Array<
      Pick<ContentfulRecipe, 'title' | 'id' | 'cookTime' | 'prepTime'> & {
        image?: Maybe<Pick<ContentfulAsset, 'gatsbyImageData'>>;
      }
    >;
  };
};

export const query = graphql`
  query FetchRecipesByTag($tag: String) {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { content: { tags: { eq: $tag } } }
    ) {
      nodes {
        title
        id
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

const TagTemplate = (
  props: PageProps<TagTemplatePageDataType, TagTemplatePageContextType>
): JSX.Element => {
  const { pageContext, data } = props;
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <>
      <Seo title={pageContext.tag} />
      <main className="page">
        <h2>{pageContext.tag}</h2>
        <div className="tag-recipes">
          <RecipesList recipes={recipes} />
        </div>
      </main>
    </>
  );
};

export default TagTemplate;
