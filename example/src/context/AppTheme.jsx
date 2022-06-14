import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import storage from 'utils/storage';

const AppThemeContext = createContext({
  theme: 'light',
  themeToggle: () => {},
});

const KEY_THEME_NAME = 'theme';

export const AppThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const setMode = useCallback((mode) => {
    storage.setItem(KEY_THEME_NAME, mode);
    setTheme(mode);
  }, [])

  const themeToggle = useCallback(() => {
    setMode(theme === 'light' ? 'dark' : 'light');
  }, [setMode, theme]);

  useEffect(() => {
    const deviceTheme =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const localTheme = storage.getItem(KEY_THEME_NAME);
    if (localTheme) {
      setMode(localTheme);
    } else {
      setMode(deviceTheme ? 'dark' : 'light');
    }
  }, [setMode]);

  const out = useMemo(() => {
    return {
      theme,
      themeToggle,
    };
  }, [theme, themeToggle]);

  return (
    <AppThemeContext.Provider value={out}>
      {children}
    </AppThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(AppThemeContext);
