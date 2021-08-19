const Footer = (): JSX.Element => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-2 bg-black text-white">
      <div className="container px-4 mx-auto">&copy; {year} SimplyRecipes</div>
    </footer>
  );
};

export default Footer;
