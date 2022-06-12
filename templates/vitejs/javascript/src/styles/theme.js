const colorsLight = {
  primary: '#127dff',
  secondary: '#ff9800',
  accent: '#9c27b0',
  error: '#f44336',
  warning: '#ffeb3b',
  info: '#2196f3',
  success: '#4caf50',
  black: '#000',
  white: '#fff',
  transparent: 'transparent',
  background: '#ffffff',
  bgCard: 'rgba(100, 100, 200, .2)',
  text: '#000000',
  nav: 'rgba(255, 255, 255, 0.8)',
  modal: 'rgba(0, 0, 0, 0.1)',
  bgModal: 'white',
  input: '#F5F5F5',
  shadowInput: 'rgb(224, 224, 224)'
};

const colorsDark = {
  ...colorsLight,
  background: '#000000',
  text: '#ffffff',
  bgCard: 'rgba(100, 100, 200, 0.3)',
  nav: 'rgba(0, 0, 0, .5)',
  bgModal: '#161616',
  input: '#161616',
  shadowInput: 'rgb(77, 77, 77)'
};

const zIndex = {
  min: -1,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  max: 10,
  nav: 20,
  modal: 30
};

export const themeLight = {
  colors: colorsLight,
  zIndex
};

export const themeDark = {
  ...themeLight,
  colors: colorsDark
};

export const mediaQueries = {
  tablet: '@media (min-width: 768px)',
  desktop: '@media (min-width: 1200px)',
}
