const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const fse = require('fs-extra');
const emoji = require('node-emoji');
const inquirer = require('inquirer');
const { exec } = require('child_process');

const { questions } = require('./questions');
const { selectYarnOrNpm, removeFoldersAndFiles } = require('./utils');

const launchIcon = emoji.get(':rocket:');

const install = (path, appName, packageManager) => {
  return new Promise((resolve, reject) => {
    try {
      process.chdir(path);
      console.log(`cd ./${appName}`);

      console.log(chalk.green(`installing devs using ${packageManager}`));

      const i = exec(`${packageManager} install`, (error) => {
        if (error) {
          return reject(error);
        }

        return resolve(
          `execute ${chalk.green(
            `${packageManager}${packageManager !== 'yarn' ? 'run' : ''} dev`
          )}`
        );
      });

      i.stdout.on('data', function (data) {
        console.log(data);
      });
    } catch (e) {
      reject(e);
    }
  });
};

const installDevs = (path, appName) => {
  return new Promise((resolve, reject) => {
    selectYarnOrNpm().then((packageManager) => {
      install(path, appName, packageManager)
        .then((message) => {
          console.log(
            launchIcon + ' ' + chalk.green(`Created project successfully`)
          );
          console.log(`Access with cd ${appName}`);
          console.log(chalk.blueBright(message));
          return resolve();
        })
        .catch((e) => {
          console.error(e);
          reject(e);
        });
    });
  });
};

const copyProject = ({
                       pathTemplate,
                       pathComponents,
                       pathClientProject,
                       appName
                     }) => {
  return new Promise((resolve, reject) => {
    fse
      .copy(pathTemplate, pathClientProject)
      .then(() => {
        fse
          .copy(pathComponents, path.join(pathClientProject, 'src'))
          .then(() => {
            installDevs(pathClientProject, appName)
              .then(() => resolve())
              .catch((e) => reject(e));
          });
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};

const createApp = ({ template, appName, language, styledLib }) => {
  const root = __dirname;
  const clientRoot = process.cwd();
  const pathTemplate = path.join(root, 'templates', template, language);
  const pathComponents = path.join(root, 'components', styledLib, language);
  const pathClientProject = path.join(clientRoot, appName);

  if (!fs.existsSync(pathClientProject)) {
    console.log(`Creating folder ${appName}`);
    fs.mkdirSync(pathClientProject, { recursive: true });
    console.log('Folder created successfully.');

    copyProject({
      pathTemplate,
      pathClientProject,
      pathComponents,
      appName
    }).then(() => {
      removeFoldersAndFiles({ path: pathClientProject, template } )
    });
  } else {
    inquirer.prompt([questions.overrideFolder]).then(({ overrideFolder }) => {
      if (overrideFolder) {
        copyProject({
          pathTemplate,
          pathClientProject,
          pathComponents,
          appName
        }).then(() => {
          removeFoldersAndFiles({ path: pathClientProject, template } )
        });
      } else {
        process.exit();
      }
    });
  }
};

module.exports = {
  createApp
};
