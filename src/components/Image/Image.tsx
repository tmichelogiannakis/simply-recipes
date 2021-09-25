import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { Maybe, ContentfulAsset } from '../../../graphql-types';

type ImageProps = {
  className?: string;
  image: Maybe<Pick<ContentfulAsset, 'gatsbyImageData'>> | undefined;
  alt: Maybe<string> | undefined;
};

const Image = ({ image, alt, className }: ImageProps): JSX.Element | null => {
  if (image) {
    const pathToImage = getImage(image as ImageDataLike);
    if (pathToImage) {
      return (
        <GatsbyImage
          className={className}
          image={pathToImage}
          alt={alt || ''}
        />
      );
    }
  }

  return null;
};

export default Image;
