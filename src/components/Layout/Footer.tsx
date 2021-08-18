const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();
  return <footer>© {year} SimplyRecipes</footer>;
};

export default Footer;
