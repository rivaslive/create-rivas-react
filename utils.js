const chalk = require('chalk');
const semver = require('semver');
const fse = require('fs-extra');
const { exec } = require('child_process');
const { removeComponents } = require('./config');

function getAppName(appName) {
  if (!appName) return '';
  let outText = '';

  const wordArr = appName.split(/(\s)|_/g).filter((f) => f !== ' ');

  for (let i in wordArr) {
    if (i > 0) {
      outText += `-${wordArr[i]}`;
    } else {
      outText += wordArr[i];
    }
  }

  return outText.replace(/(\s)/g, '');
}

const verifyNodeVersion = () => {
  const unsupportedNodeVersion = !semver.satisfies(
    // Coerce strings with metadata (i.e. `15.0.0-nightly`).
    semver.coerce(process.version),
    '>=14'
  );

  if (unsupportedNodeVersion) {
    console.log(
      chalk.yellow(
        `You are using Node ${process.version} so the project will be bootstrapped with an old unsupported version of tools.\n\n` +
          `Please update to Node 14 or higher for a better, fully supported experience.\n`
      )
    );
    // Fall back to the latest supported react-scripts on Node 4
    process.exit(1);
  }
  console.log(chalk.green(`Using Node ${process.version}.`));
};

const selectYarnOrNpm = () =>
  new Promise((resolve) => {
    exec('yarn --version', (error, stdout, stderr) => {
      if (error) {
        return resolve('npm');
      }
      return resolve('yarn');
    });
  });

const removeFoldersAndFiles = ({ path, template }) => {
  const pathsToRemove = removeComponents[template](path);
  pathsToRemove.forEach((_path) => {
    fse.removeSync(_path);
  });
};

module.exports = {
  getAppName,
  removeFoldersAndFiles,
  selectYarnOrNpm,
  verifyNodeVersion
};
