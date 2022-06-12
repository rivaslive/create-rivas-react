import './styles/index.css';
import React, { memo } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';


import Routes from 'routes';
import GlobalStyle from 'styles/global';
import { themeDark, themeLight } from 'styles/theme';
import { useAppTheme, AppThemeProvider } from 'context/AppTheme';

const AppRenderTheme = memo(() => {
  const { theme } = useAppTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppThemeProvider>
      <AppRenderTheme />
    </AppThemeProvider>
  </React.StrictMode>
);
