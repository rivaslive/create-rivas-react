import Text from 'components/Atoms/Text';
import Image from 'components/Atoms/Image';
import Button from 'components/Atoms/Button';
import { useAuth } from 'context/AuthContext';
import { useAppTheme } from 'context/AppTheme';

const HeadAllComponents = ({ technology }: { technology: string }) => {
  const { theme, themeToggle } = useAppTheme();
  const { login, loading } = useAuth();

  const onLogin = async () => {
    await login('email@mail.com', 'password');
  };

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
        onClick={onLogin}
      >
        Login
      </Button>
    </div>
  );
};

export default HeadAllComponents;
