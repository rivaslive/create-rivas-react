import 'styles/grid.css';
import React, { memo } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import Routes from 'routes';
import GlobalStyle from 'styles/global';
import { themeDark, themeLight } from 'styles/theme';
import { useAppTheme, AppThemeProvider } from 'context/AppTheme';
import reportWebVitals from './reportWebVitals';

const AppRenderTheme = memo(() => {
  const { theme } = useAppTheme();

  return (
    <ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <AppRenderTheme />
    </AppThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
