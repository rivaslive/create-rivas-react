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
        name: 'React Create App',
        value: 'rca'
      },
      {
        name: 'Nextjs',
        value: 'nextjs'
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
  overrideFolder: {
    type: 'confirm',
    name: 'overrideFolder',
    message: 'The folder already exists, do you want to overwrite it?.'
  }
};

module.exports = {
  questions
};
