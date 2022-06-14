import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import { useAuth } from 'context/AuthContext';
import Container from 'components/Atoms/Container';

function Dashboard() {
  const { logout, loading } = useAuth();

  return (
    <Container>
      <Title>Dashboard</Title>
      <Button loading={loading} onClick={logout}>Logout</Button>
    </Container>
  );
}

export default Dashboard;
