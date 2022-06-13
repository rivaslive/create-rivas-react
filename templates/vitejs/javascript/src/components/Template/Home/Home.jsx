import { useAppTheme } from 'context/AppTheme';
import Text from 'components/Atoms/Text';
import Title from 'components/Atoms/Title';
import Button from 'components/Atoms/Button';
import Container from 'components/Atoms/Container';
import AllComponents from 'components/Organisms/AllComponents';

const HomeTemplate = (props) => {
  const { theme, themeToggle } = useAppTheme();
  return (
    <Container>
      <header className="App-header" style={{ marginBottom: 30 }}>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <img width={350} src="/logo.svg" className="App-logo" alt="logo" />
          <Text align="center">Hello Vite + React!</Text>
          <Button style={{ margin: 'auto' }} onClick={themeToggle}>
            Change Theme {theme}
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
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
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
