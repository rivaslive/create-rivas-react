const path = require('path');

const resolveLanguage = {
  javascript: 'javascript',
  js: 'javascript',
  '--js': 'javascript',
  '--jsx': 'javascript',
  '--javascript': 'javascript',
  // ts paths
  tsx: 'typescript',
  ts: 'typescript',
  typescript: 'typescript',
  '--typescript': 'typescript',
  '--ts': 'typescript',
  '--tsx': 'typescript'
};

const resolveTemplate = {
  vitejs: 'vitejs',
  Vitejs: 'vitejs',
  Vite: 'vitejs',
  vite: 'vitejs',
  nextjs: 'nextjs',
  Nextjs: 'nextjs',
  next: 'nextjs',
  Next: 'nextjs',
  cra: 'cra',
  'create-react-app': 'cra'
};

const resolveStyledLib = {
  'styled-components': 'styled-components',
  styled: 'styled-components',
  '--styled': 'styled-components',
  sc: 'styled-components',
  '--sc': 'styled-components',
  '--styled-components': 'styled-components',
  stitches: 'stitches',
  '--stitches': 'stitches'
};

const removeComponents = {
  'nextjs': (clientPath) => [path.join(clientPath, 'src', 'components', 'Atoms', 'PrivateRoute'), path.join(clientPath, 'src', 'components', 'Atoms', 'PublicRoute')],
  'vitejs': () => [],
  'cra': () => [],
}

module.exports = {
  resolveTemplate,
  resolveLanguage,
  resolveStyledLib,
  removeComponents
};
