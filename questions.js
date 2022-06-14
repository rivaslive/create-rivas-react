const questions = {
  appName: {
    type: 'input',
    name: 'appNameInput',
    message: 'Insert app name.'
  },
  template: {
    type: 'list',
    name: 'templateInput',
    message: 'Select template.',
    choices: [
      {
        name: 'Vite',
        value: 'vitejs'
      },
      {
        name: 'Nextjs',
        value: 'nextjs'
      },
      {
        name: 'React Create App',
        value: 'cra'
      }
    ]
  },
  language: {
    type: 'list',
    name: 'languageInput',
    message: 'Select language.',
    choices: [
      {
        name: 'Javascript',
        value: 'javascript'
      },
      {
        name: 'Typescript',
        value: 'typescript'
      }
    ]
  },
  styled: {
    type: 'list',
    name: 'styledInput',
    message: 'Select styled lib.',
    choices: [
      {
        name: 'styled-components',
        value: 'styled-components'
      },
      {
        name: 'Stitches (Coming soon)',
        value: 'stitches'
      }
    ]
  },
  overrideFolder: {
    type: 'confirm',
    name: 'overrideFolder',
    message: 'The folder already exists, do you want to overwrite it?.'
  }
};

module.exports = {
  questions
};
