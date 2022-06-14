import 'styles/grid.css';
import ReactDOM from 'react-dom/client';
import { memo, StrictMode } from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from 'routes';
import GlobalStyle from 'styles/global';
import { themeDark, themeLight } from 'styles/theme';
import { AppThemeProvider, useAppTheme } from 'context/AppTheme';
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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <StrictMode>
    <AppThemeProvider>
      <AppRenderTheme />
    </AppThemeProvider>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
