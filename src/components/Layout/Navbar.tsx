import { Link } from 'gatsby';

const Navbar = (): JSX.Element => {
  return (
    <nav>
      <h2 className="overflow-hidden whitespace-nowrap indent-full h-0">
        Navigation menu
      </h2>
      <div className="flex items-center py-4">
        <div className="mr-8">
          <Link to="/">
            <span className="sr-only">Simply recipes home page</span>
            <img src="logo.svg" alt="simply recipes" />
          </Link>
        </div>
        <div>
          <Link to="/about">About</Link>
          <Link to="/tags">Tags</Link>
          <Link to="/recipes">Recipes</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
