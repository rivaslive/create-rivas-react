#!/usr/bin/env node
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const { createApp } = require('./createApp');
const { questions } = require('./questions');
const { verifyNodeVersion, getAppName } = require('./utils');
const { resolveLanguage, resolveStyledLib, resolveTemplate } = require('./config');

const handleExit = () => {
  console.log('Exiting without error.');
  process.exit();
};

const handleError = (e) => {
  console.error('ERROR! An error was encountered while executing');
  console.error(e);
  console.log('Exiting with error.');
  process.exit(1);
};

// verify node version
verifyNodeVersion();

process.on('SIGINT', handleExit);
process.on('uncaughtException', handleError);

console.log();
console.log('-------------------------------------------------------');
console.log('Assuming you have already run `npm install` to update the deps.');
console.log('If not, remember to do this before testing!');
console.log('-------------------------------------------------------');
console.log();

const packagesDir = path.join(__dirname, 'templates');
const packagePathsByName = {};

// get cra, nextjs, vitejs
fs.readdirSync(packagesDir).forEach((name) => {
  if (name && name !== '.DS_Store') {
    // get locations for cra, nextjs, vitejs
    const templateDir = path.join(packagesDir, name);

    // get directories javascript and typescript
    fs.readdirSync(templateDir).forEach((template) => {
      const packageDir = path.join(templateDir, template);
      const packageJson = path.join(packageDir, 'package.json');
      if (fs.existsSync(packageJson)) {
        packagePathsByName[`${name}-${template}`] = packageDir;
      }
    });
  }
});

console.log('Replaced all local dependencies for testing.');
console.log('Do not edit any package.json while this task is running.');

const [_name, _template, _language, _styledLib] = process.argv.slice(2);

let appName = getAppName(_name);
let template = resolveTemplate[_template];
let language = resolveLanguage[_language];
let styledLib = resolveStyledLib[_styledLib];

if (appName && template && language && styledLib) {
  createApp({ appName, template, language, styledLib });
}

if (appName && template && language) {
  inquirer.prompt([questions.styledLib]).then(({ styledInput }) => {
    styledLib = styledInput;
    createApp({ appName, template, language, styledLib });
  });
}

if (appName && template) {
  inquirer
    .prompt([questions.language, questions.styledLib])
    .then(({ languageInput, styledInput }) => {
      language = languageInput;
      styledLib = styledInput;
      createApp({ appName, template, language, styledLib });
    });
}

if (appName) {
  inquirer
    .prompt([questions.template, questions.language, questions.styledLib])
    .then(({ languageInput, templateInput, styledInput }) => {
      template = templateInput;
      language = languageInput;
      styledLib = styledInput;
      createApp({ appName, template, language, styledLib });
    });
}

inquirer
  .prompt([
    questions.appName,
    questions.template,
    questions.language,
    questions.styled
  ])
  .then(({ templateInput, appNameInput, languageInput, styledInput }) => {
    appName = getAppName(appNameInput);
    template = templateInput;
    language = languageInput;
    styledLib = styledInput;

    createApp({ appName, template, language, styledLib });
  });
