import 'styles/grid.css';
import { memo } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/global';
import { themeDark, themeLight } from 'styles/theme';
import { useAppTheme, AppThemeProvider } from 'context/AppTheme';
import { AuthProvider} from 'context/AuthContext';

const AppRenderTheme = memo(({ children }) => {
  const { theme } = useAppTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
});

function MyApp({ Component, pageProps }) {
  return (
    <AppThemeProvider>
      <AuthProvider>
        <AppRenderTheme>
          <Component {...pageProps} />
        </AppRenderTheme>
      </AuthProvider>
    </AppThemeProvider>
  );
}

export default MyApp;
