// @ts-ignore
import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // get variables env
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react({
        babel: {
          plugins: [
            [
              // fixed displayName class for styled-components
              'babel-plugin-styled-components',
              {
                displayName: true,
                fileName: false
              }
            ]
          ]
        }
      })
    ],
    define: {
      // define env vars
      'process.env': Object.entries(env).reduce((prev, [key, val]) => {
        return {
          ...prev,
          [key]: val
        };
      }, {})
    },
    resolve: {
      alias: {
        styles: path.resolve(__dirname, 'src/styles'),
        components: path.resolve(__dirname, 'src/components'),
        assets: path.resolve(__dirname, 'src/assets'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        pages: path.resolve(__dirname, 'src/pages'),
        lib: path.resolve(__dirname, 'src/lib'),
        routes: path.resolve(__dirname, 'src/routes'),
        services: path.resolve(__dirname, 'src/services'),
        context: path.resolve(__dirname, 'src/context'),
        graphql: path.resolve(__dirname, 'src/graphql'),
        apollo: path.resolve(__dirname, 'src/apollo'),
        config: path.resolve(__dirname, 'src/config')
      }
    }
  };
});
