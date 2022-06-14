import Text from 'components/Atoms/Text';
import Image from 'components/Atoms/Image';
import Button from 'components/Atoms/Button';
import { useAuth } from 'context/AuthContext';
import { useAppTheme } from 'context/AppTheme';

const HeadAllComponents = ({ technology }) => {
  const { theme, themeToggle } = useAppTheme();
  const { login, loading } = useAuth();

  return (
    <div style={{ textAlign: 'center', marginBottom: 30 }}>
      <Image
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
  );
};

export default HeadAllComponents;
