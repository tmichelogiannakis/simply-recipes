import { FC, createElement } from 'react';
import TagsList from './TagsList';
import RecipesList from './RecipesList';
import { FetchRecipesQuery } from '../../../graphql-types';

type RecipesProps = {
  recipes: FetchRecipesQuery['allContentfulRecipe']['nodes'];
  title?: string;
};

const Recipes = ({ title, recipes }: RecipesProps): JSX.Element => {
  const Element: FC = props => createElement(title ? 'section' : 'div', props);

  return (
    <Element>
      {title && <h2 className="text-center text-3xl mb-4">{title}</h2>}
      <div className="grid gap-y-8 gap-x-4 lg:grid-cols-recipes lg:gap-4">
        <TagsList recipes={recipes} />
        <RecipesList recipes={recipes} />
      </div>
    </Element>
  );
};

export default Recipes;
