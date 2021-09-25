import { Link } from 'gatsby';
import slugify from 'slugify';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { FetchRecipesQuery } from '../../../graphql-types';

type RecipesListProps = {
  recipes: FetchRecipesQuery['allContentfulRecipe']['nodes'];
};

const RecipesList = ({ recipes = [] }: RecipesListProps): JSX.Element => {
  return (
    <div className="grid gap-y-8 gap-x-4 pb-12 md:grid-cols-2 xl:grid-cols-3">
      {recipes.map(recipe => {
        const { id, title, image, prepTime, cookTime } = recipe;
        if (image && title) {
          const pathToImage = getImage(image as ImageDataLike);
          const slug = slugify(title, { lower: true });
          return (
            <article key={id}>
              <Link to={`/${slug}`}>
                {pathToImage && (
                  <GatsbyImage
                    image={pathToImage}
                    className="md:h-40 recipe-img"
                    alt={title}
                  />
                )}
                <h5 className="mt-4 text-lg leading-none">{title}</h5>
                <p className="mt-2 mb-0 text-sm leading-none">
                  Prep : {prepTime}min | Cook : {cookTime}min
                </p>
              </Link>
            </article>
          );
        }
      })}
    </div>
  );
};

export default RecipesList;
