import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import { useAuth } from 'context/AuthContext';
import PrivateRoute from 'layout/PrivateRoute';
import Container from 'components/Atoms/Container';

function DashboardPage() {
  const { logout, loading } = useAuth();

  return (
    <PrivateRoute>
      <Container>
        <Title>Dashboard</Title>
        <Button loading={loading} onClick={logout}>
          Logout
        </Button>
      </Container>
    </PrivateRoute>
  );
}

export default DashboardPage;
