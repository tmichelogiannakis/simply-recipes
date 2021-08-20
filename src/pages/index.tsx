import { StaticImage } from 'gatsby-plugin-image';

const Home = (): JSX.Element => {
  return (
    <header className="h-screen-40 relative mb-8">
      <StaticImage
        src="../assets/images/main.jpeg"
        alt="eggs"
        className="h-full rounded"
        placeholder="tracedSVG"
        layout="fullWidth"
      ></StaticImage>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 rounded">
        <div className="text-white text-center">
          <h1 className="text-6xl">Simply Recipes</h1>
          <p>No Fluff, Just Recipes</p>
        </div>
      </div>
    </header>
  );
};

export default Home;
