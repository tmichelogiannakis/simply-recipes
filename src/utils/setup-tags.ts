import { ContentfulRecipeContentJsonNode, Maybe } from '../../graphql-types';

const setupTags = (
  recipes: {
    content?: Maybe<Pick<ContentfulRecipeContentJsonNode, 'tags'>> | undefined;
  }[]
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

export default setupTags;
