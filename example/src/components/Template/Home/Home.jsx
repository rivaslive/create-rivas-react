import Text from 'components/Atoms/Text';
import Title from 'components/Atoms/Title';
import Container from 'components/Atoms/Container';
import AllComponents from 'components/Organisms/AllComponents';
import HeadAllComponents from 'components/Molecules/HeadAllComponents';

const HomeTemplate = ({
  technology = 'Vite',
  docLink = 'https://vitejs.dev/guide/features.html',
  ...props
}) => {
  return (
    <Container {...props}>
      <header className="App-header" style={{ marginBottom: 30 }}>
        <HeadAllComponents technology={technology} />


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
