import { Link } from 'gatsby';
import { FetchRecipesQuery } from '../../../graphql-types';
import setupTags from '../../utils/setup-tags';

type TagsListProps = {
  recipes: FetchRecipesQuery['allContentfulRecipe']['nodes'];
};

const TagsList = ({ recipes }: TagsListProps): JSX.Element => {
  const newTags = setupTags(recipes);
  return (
    <div>
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
