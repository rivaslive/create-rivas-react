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
const { verifyNodeVersion, getAppName } = require('./utils');
const { questions } = require('./questions');
const { resolveLanguage } = require('./config');
const { createApp } = require('./createApp');

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

// Temporarily overwrite package.json of all packages in monorepo
// to point to each other using absolute file:/ URLs.

// const gitStatus = cp.execSync(`git status --porcelain`).toString();

// if (gitStatus.trim() !== '') {
//   console.log('Please commit your changes before running this script!');
//   console.log('Exiting because `git status` is not empty:');
//   console.log();
//   console.log(gitStatus);
//   console.log();
//   process.exit(1);
// }

let finish = false;
const rootDir = __dirname;
const packagesDir = path.join(rootDir, 'templates');
const packagePathsByName = {};

// get cra, nextjs, vitejs
fs.readdirSync(packagesDir).forEach((name) => {
  if (name) {
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

Object.keys(packagePathsByName).forEach((name) => {
  const packageJson = path.join(packagePathsByName[name], 'package.json');
  const json = JSON.parse(fs.readFileSync(packageJson, 'utf8'));
  Object.keys(packagePathsByName).forEach((otherName) => {
    if (json.dependencies && json.dependencies[otherName]) {
      json.dependencies[otherName] = 'file:' + packagePathsByName[otherName];
    }
    if (json.devDependencies && json.devDependencies[otherName]) {
      json.devDependencies[otherName] = 'file:' + packagePathsByName[otherName];
    }
    if (json.peerDependencies && json.peerDependencies[otherName]) {
      json.peerDependencies[otherName] =
        'file:' + packagePathsByName[otherName];
    }
    if (json.optionalDependencies && json.optionalDependencies[otherName]) {
      json.optionalDependencies[otherName] =
        'file:' + packagePathsByName[otherName];
    }
  });

  fs.writeFileSync(packageJson, JSON.stringify(json, null, 2), 'utf8');
  console.log(
    'Replaced local dependencies in packages/' + name + '/package.json'
  );
});
console.log('Replaced all local dependencies for testing.');
console.log('Do not edit any package.json while this task is running.');

const [_name, _template, _language] = process.argv.slice(2);

let appName = getAppName(_name);
let template = _template;
let language = resolveLanguage[_language];

if (appName && template && language) {
  console.log({ appName, template, language });
  createApp({ appName, template, language });
}

if (appName && template) {
  inquirer.prompt([questions.language]).then(({ languageInput }) => {
    language = languageInput;
    console.log({ appName, template, language });
    createApp({ appName, template, language });
  });
}

if (appName) {
  inquirer
    .prompt([questions.template, questions.language])
    .then(({ languageInput, templateInput }) => {
      template = templateInput;
      language = languageInput;
      console.log({ appName, template, language });
      createApp({ appName, template, language });
    });
}

inquirer
  .prompt([questions.appName, questions.template, questions.language])
  .then(({ templateInput, appNameInput, languageInput }) => {
    appName = getAppName(appNameInput);
    template = templateInput;
    language = languageInput;

    console.log({ appName, template });
    createApp({ appName, template, language });
    finish = true;
  });

if (finish) {
  // Cleanup
  handleExit();
}
