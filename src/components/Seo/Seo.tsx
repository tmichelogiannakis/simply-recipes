import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

const query = graphql`
  {
    site {
      metadata: siteMetadata {
        title
        description
      }
    }
  }
`;

type SeoProps = {
  title: string;
  description?: string;
};

const Seo = ({ title, description }: SeoProps): JSX.Element => {
  const {
    site: { metadata }
  } = useStaticQuery(query);
  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={`${title} | ${metadata.title}`}
      meta={[
        { name: `description`, content: description || metadata.description }
      ]}
    ></Helmet>
  );
};

export default Seo;
