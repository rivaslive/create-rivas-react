import 'styles/grid.css';
import ReactDOM from 'react-dom/client';
import { memo, StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from 'routes';
import GlobalStyle from 'styles/global';
import { themeDark, themeLight } from 'styles/theme';
import { AppThemeProvider, useAppTheme } from 'context/AppTheme';

const AppRenderTheme = memo(() => {
  const { theme } = useAppTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppThemeProvider>
      <AppRenderTheme />
    </AppThemeProvider>
  </StrictMode>,
);
