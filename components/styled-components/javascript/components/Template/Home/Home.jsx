import { useAppTheme } from 'context/AppTheme';
import Text from 'components/Atoms/Text';
import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import { useAuth } from 'context/AuthContext';
import Container from 'components/Atoms/Container';
import AllComponents from 'components/Organisms/AllComponents';

const HomeTemplate = ({
  technology = 'Vite',
  docLink = 'https://vitejs.dev/guide/features.html',
  ...props
}) => {
  const { theme, themeToggle } = useAppTheme();
  const { login, loading } = useAuth();

  return (
    <Container {...props}>
      <header className="App-header" style={{ marginBottom: 30 }}>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <img
            width={350}
            src={theme === 'dark' ? '/logo-dark.svg' : '/logo.svg'}
            className="App-logo"
            alt="logo"
          />
          <Text align="center">Hello {technology} + Reactjs 18!</Text>
          <Button style={{ margin: 'auto' }} onClick={themeToggle}>
            Change Theme {theme}
          </Button>
          <Button
            color="text"
            loading={loading}
            bgColor="transparent"
            borderColor="success"
            style={{ margin: '10px auto' }}
            onClick={() => login('email@mail.com', 'password')}
          >
            Login
          </Button>
        </div>

        <Title>Pre Atoms components build</Title>

        <AllComponents />

        <br />
        <Text align="center">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href={docLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {technology} Docs
          </a>
        </Text>

        <br />
        <Text align="center">
          Created with ❤️ By{' '}
          <a
            rel="noopener noreferrer"
            href="https://github.com/rivaslive"
            target="_blank"
          >
            <b>Kevin Rivas</b>
          </a>
        </Text>
      </header>
    </Container>
  );
};

export default HomeTemplate;
