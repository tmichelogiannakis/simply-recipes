import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/Seo/Seo';

const About = (): JSX.Element => {
  return (
    <>
      <Seo title="About" />
      <div className="flex flex-wrap -mx-4">
        <div className="px-4 w-full md:w-2/4 md:order-2">
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            placeholder="blurred"
            className="h-96 rounded"
          />
        </div>
        <div className="px-4 py-4 w-full md:py-0 md:w-2/4 md:order-1">
          <h1 className="text-4xl leading-snug">
            I&apos;m baby coloring book poke taxidermy
          </h1>
          <p>
            Vitae, pariatur eligendi dis enim soluta voluptatem curabitur mus!
            Rhoncus laudantium scelerisque? Tortor gravida, similique ultricies
            tempor recusandae. Alias massa! Illo!
          </p>
          <p>
            Quam erat, repellendus hac elementum, at mollitia, aspernatur est
            fugit, euismod integer nonummy sollicitudin congue laborum.
          </p>
          <div>
            <Link
              className="inline-block rounded capitalize py-3 px-4 leading-none bg-indigo-700 hover:bg-indigo-600 text-white text-base"
              to="/contact"
            >
              contact
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
