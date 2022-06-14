import { Link } from 'react-router-dom';

import ROUTES from 'config/routes';
import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';

function NotFound() {
  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Title>404 NOT FOUND</Title>
        <Link to={ROUTES.DASHBOARD.path}>
          <Button>Go to safe page</Button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
