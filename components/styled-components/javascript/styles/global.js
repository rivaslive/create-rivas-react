import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
  p, span, div, button, section, h1, h2, h3, h4, h5, h6, a {
    font-size: 14px;
  }
  * {
    margin: 0;
    padding: 0;
    font-size: 14px;
    box-sizing: border-box;
  }
  a {
    color: currentColor;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  a {
    text-decoration: none;
  }
  .ReactModal__Overlay {
    z-index: ${({ theme }) => theme.zIndex.modal};
    background: ${({ theme }) => theme.colors.modal} !important;
    .ReactModal__Content {
      border: none !important;
      background: ${({ theme }) => theme.colors.bgModal} !important;
      color: ${({ theme }) => theme.colors.text} !important;
    }
  }
`;

export default GlobalStyle;
