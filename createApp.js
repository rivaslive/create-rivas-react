const fs = require('fs');
const path = require('path');
const util = require('util');
const chalk = require('chalk');
const fse = require('fs-extra');
const inquirer = require('inquirer');
const { exec } = require('child_process');

const { questions } = require('./questions');
const { selectYarnOrNpm } = require('./utils');

const install = (path, appName) => {
  try {
    process.chdir(path);
    console.log(`cd ./${appName}`);

    return selectYarnOrNpm().then((packageManager) => {
      console.log(chalk.green(`installing devs using ${packageManager}`));

      const installD = new Promise((resolve, reject) => {
        const i = exec(`${packageManager} install`, (error) => {
          if (error) {
            return reject(error);
          }

          return resolve(
            `execute ${packageManager}${
              packageManager !== 'yarn' ? 'run' : ''
            } dev`
          );
        });

        i.stdout.on('data', function (data) {
          console.log(data);
        });
      });

      installD.then(console.log);
      return installD;
    });
  } catch (e) {
    throw e;
  }
};

const installPromisified = util.promisify(install);

const installDevs = (path, appName) => {
  installPromisified(path, appName)
    .then((message) => {
      console.log(chalk.green('🚀 Created project successfully'));
      console.log(`Access with cd ${appName}`);
      return console.log(chalk.blueBright(message));
    })
    .catch((e) => {
      console.error(e);
    });
};

const copyProject = ({ pathTemplate, pathClientProject, appName }) => {
  fse
    .copy(pathTemplate, pathClientProject)
    .then(() => {
      installDevs(pathClientProject, appName);
    })
    .catch((err) => {
      console.error(err);
    });
};

const createApp = ({ template, appName, language }) => {
  const root = __dirname;
  const clientRoot = process.cwd();
  const pathTemplate = path.join(root, 'templates', template, language);
  const pathClientProject = path.join(clientRoot, appName);

  if (!fs.existsSync(pathClientProject)) {
    console.log(`Creating folder ${appName}`);
    fs.mkdirSync(pathClientProject, { recursive: true });
    console.log('Folder created successfully.');

    copyProject({ pathTemplate, pathClientProject, appName });
  } else {
    inquirer.prompt([questions.overrideFolder]).then(({ overrideFolder }) => {
      if (overrideFolder) {
        copyProject({ pathTemplate, pathClientProject, appName });
      } else {
        process.exit();
      }
    });
  }
};

module.exports = {
  createApp
};
