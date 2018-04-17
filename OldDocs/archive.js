const colors = require('colors');
const fs = require('fs-extra');
const replace = require('replace-in-file');

function replaceVersionLink(fromVersion, toVersion, files) {
  const link = `\/?${fromVersion}/`;
  const reg = new RegExp(link, 'g');

  const options = {
    files: files,
    //Replacement to make (string or regex) 
    from: reg,
    to: `/archived/${toVersion}/`,
  };

  let changedFiles = replace.sync(options);
  console.log(`Modified files:\n${changedFiles.join('\n')}`);
}

function updateNavBar(fromVersion, toVersion) {
  const options = {
    files: `./docs/_navbar.md`,
    from: `- [${fromVersion}](latest/index.md)`,
    to: `- [${toVersion}](latest/index.md)\n  - [${fromVersion}](archived/${fromVersion}/index.md)`,
  };
  replace.sync(options);
  console.log('Update Nav bar'.green);
}

function archive(version, files) {
  const folder = `./docs/archived/${version}`
  if (fs.existsSync(folder)) {
    console.log('Target archive version is already existing. Please confirm that you are specifying the correct archive version.'.red);
    throw new Error('Version Already Existed.');
  }

  console.log(`Copying current version to target folder: ${folder}...`);
  fs.copySync('./docs/latest', folder);
  const archivedFiles = fs.readdirSync(folder).map(file => { return `${folder}/${file}`; });
  replaceVersionLink('latest', version, archivedFiles)
}

const currentVersion = process.argv[2];
const nextVersion = process.argv[3];

console.log(`Build documentation from version ${currentVersion} to ${nextVersion}`.green);
archive(currentVersion);
updateNavBar(currentVersion, nextVersion);