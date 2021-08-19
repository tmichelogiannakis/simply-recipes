import Layout from '../components/Layout/Layout';

const NotFound = (): JSX.Element => {
  return (
    <Layout>
      <div className="text-center">
        <p className="text-9xl leading-snug">404</p>
        <h1 className="text-3xl leading-snug">Page Not Found</h1>
      </div>
    </Layout>
  );
};

export default NotFound;
