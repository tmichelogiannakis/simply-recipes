import { PageProps } from 'gatsby';

type TagTemplatePageContextType = {
  tag: string;
};

const TagTemplate = (
  props: PageProps<unknown, TagTemplatePageContextType>
): JSX.Element => {
  const { pageContext } = props;

  return (
    <div>
      <h1>{pageContext.tag}</h1>
    </div>
  );
};

export default TagTemplate;
