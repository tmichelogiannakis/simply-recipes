import { useStaticQuery, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { FetchSiteMetataQuery } from '../../../graphql-types';

const query = graphql`
  query FetchSiteMetata {
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
  const { site } = useStaticQuery<FetchSiteMetataQuery>(query);
  const { metadata } = site as NonNullable<FetchSiteMetataQuery['site']>;

  const metaTitle = metadata?.title ? `${title} | ${metadata?.title}` : title;
  const metaDescription = description || metadata?.description || '';
  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription
        }
      ]}
    ></Helmet>
  );
};

export default Seo;
