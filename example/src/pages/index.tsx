import HomeTemplate from 'components/Template/Home';
import PublicRoute from 'layout/PublicRoute';

function HomePage() {
  return (
    <PublicRoute>
      <HomeTemplate
        technology="Nextjs"
        docLink="https://nextjs.org/docs/getting-started"
      />
    </PublicRoute>
  );
}

export default HomePage;
