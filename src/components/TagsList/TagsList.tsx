import { Link } from 'gatsby';
import { FetchAllRecipesQuery } from '../../../graphql-types';

const setupTags = (
  recipes: FetchAllRecipesQuery['allContentfulRecipe']['nodes']
): [string, number][] => {
  const allTags: { [key: string]: number } = {};
  for (const recipe of recipes) {
    const tags = recipe?.content?.tags;
    if (tags) {
      for (const tag of tags) {
        if (tag) {
          if (allTags[tag]) {
            allTags[tag] += 1;
          } else {
            allTags[tag] = 1;
          }
        }
      }
    }
  }

  // alphabetic order
  return Object.entries(allTags).sort(([tagA], [tagB]) =>
    tagA.localeCompare(tagB)
  );
};

type TagsListProps = {
  recipes: FetchAllRecipesQuery['allContentfulRecipe']['nodes'];
};

const TagsList = ({ recipes }: TagsListProps): JSX.Element => {
  const newTags = setupTags(recipes);
  return (
    <div>
      <h2 className="text-2xl font-normal mb-4">Recipes</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1">
        {newTags.map(([tag, value], index) => {
          return (
            <Link to="/tags" key={index} className="capitalize leading-loose">
              {tag} ({value})
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TagsList;
