import { graphql, PageProps } from 'gatsby';
import slugify from 'slugify';
import { MdAccessTime, MdPeople } from 'react-icons/md';
import { ContentfulRecipe } from '../../graphql-types';
import Image from '../components/Image/Image';

type RecipePageContextType = {
  id: string;
  title: string;
};

// Gatsby always queries for id,
// so both title and id are available to fetch the recipe
export const query = graphql`
  query FetchRecipe($id: String!) {
    contentfulRecipe(id: { eq: $id }) {
      id
      title
      cookTime
      description {
        description
      }
      servings
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
      featured
      prepTime
      content {
        tags
        tools
        ingredients
        instructions
      }
    }
  }
`;

const Recipe = (
  props: PageProps<
    { contentfulRecipe: ContentfulRecipe },
    RecipePageContextType
  >
): JSX.Element => {
  const {
    data: { contentfulRecipe: recipe }
  } = props;

  const { title, image, servings, cookTime, prepTime, content } = recipe;

  const description = recipe?.description?.description;

  const { tags, tools, ingredients, instructions } = content || {};

  return (
    <div>
      <div className="flex flex-wrap -mx-4 items-center">
        <div className="px-4 py-4 w-full md:py-0 md:w-2/5">
          <Image image={image} alt={title} className="h-full" />
        </div>
        <div className="px-4 py-4 w-full md:w-3/5">
          {title && <h1 className="text-4xl leading-snug">{title}</h1>}
          {description && (
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
          )}
          <div className="grid grid-cols-3 gap-4 my-4 text-center">
            <div className="font-bold text-sm">
              <MdAccessTime className="inline-block text-3xl" />
              <div>prep time</div>
              <div>{prepTime} min.</div>
            </div>
            <div className="font-bold text-sm">
              <MdAccessTime className="inline-block text-3xl" />
              <div>cook time</div>
              <div>{cookTime} min.</div>
            </div>
            <div className="font-bold text-sm">
              <MdPeople className="inline-block text-3xl" />
              <div>serving</div>
              <div>{servings}</div>
            </div>
          </div>
          {tags && (
            <div>
              <span className="font-bold text-sm mr-1">Tags:</span>
              {tags.map(
                tag =>
                  tag && (
                    <a
                      href={`/tags/${slugify(tag)}`}
                      className="inline-block px-2 py-1 mx-1 bg-indigo-700 text-white leading-none rounded"
                    >
                      {tag}
                    </a>
                  )
              )}
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div>
          {instructions && (
            <article>
              <h4 className="capitalize">instructions</h4>
              {instructions.map((item, index) => {
                return (
                  <div key={index}>
                    <p>step {index + 1}</p>
                    <p>{item}</p>
                  </div>
                );
              })}
            </article>
          )}
        </div>
        <div>
          {ingredients && (
            <article>
              <h4 className="capitalize">ingredients</h4>
              {ingredients.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </article>
          )}
          {tools && (
            <article>
              <h4 className="capitalize">tools</h4>
              {tools.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </article>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
