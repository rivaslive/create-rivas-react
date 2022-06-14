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
  nextjs: 'nextjs',
  cra: 'cra',
};

const resolveStyledLib = {
  'styled-components': 'styled-components',
  stitches: 'stitches'
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
