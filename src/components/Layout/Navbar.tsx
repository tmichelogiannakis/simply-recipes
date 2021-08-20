import { Link, GatsbyLinkProps } from 'gatsby';
import { FC, MouseEvent, useState, useEffect } from 'react';
import { useLocation } from '@reach/router';
import { FiMenu } from 'react-icons/fi';

const MenuItem: FC<Omit<GatsbyLinkProps<unknown>, 'ref'>> = ({
  children,
  ...linkProps
}) => {
  return (
    <Link
      activeClassName="text-indigo-700"
      className="leading-none capitalize text-base text-black hover:text-indigo-600 border-t py-3 px-4 text-center block w-full md:py-2 md:w-auto md:border-t-0 md:inline-block"
      {...linkProps}
    >
      {children}
    </Link>
  );
};

const Navbar = (): JSX.Element => {
  const location = useLocation();

  const [opended, setOpened] = useState<boolean>(false);

  const handleMenuButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setOpened(o => !o);
  };

  // each time location changed close the menu
  useEffect(() => {
    setOpened(false);
  }, [location]);

  return (
    <div
      className={`${
        opended ? 'fixed overflow-auto h-screen' : ''
      } w-full bg-white md:static md:h-auto md:py-4`}
    >
      <div className="max-w-screen-xl px-4 mx-auto">
        <nav className="navbar">
          <h2 className="overflow-hidden whitespace-nowrap indent-full h-0">
            Navigation menu
          </h2>
          <div className="flex flex-wrap items-center">
            <div className="flex items-center justify-between flex-shrink-0 w-full py-3 md:w-auto md:py-0">
              <Link to="/">
                <span className="sr-only">Simply recipes home page</span>
                <img src="logo.svg" alt="simply recipes" />
              </Link>
              <button
                className="p-2 text-2xl bg-indigo-700 hover:bg-indigo-600 text-white md:hidden"
                onClick={handleMenuButtonClick}
              >
                <FiMenu />
              </button>
            </div>
            <div
              className={`${
                opended ? 'flex' : 'hidden'
              } flex flex-wrap items-center justify-between flex-shrink-0 w-full md:flex md:w-auto md:flex-grow md:ml-4`}
            >
              <div className="flex-shrink-0 w-full md:w-auto">
                <MenuItem to="/">home</MenuItem>
                <MenuItem to="/recipes">recipes</MenuItem>
                <MenuItem to="/tags">tags</MenuItem>
                <MenuItem to="/about">about</MenuItem>
              </div>
              <div className="border-t py-3 text-center block w-full md:w-auto md:border-t-0 md:inline-block md:py-0">
                <Link
                  className="inline-block rounded capitalize py-3 px-4 leading-none bg-indigo-700 hover:bg-indigo-600 text-white text-base"
                  to="/contact"
                >
                  contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
