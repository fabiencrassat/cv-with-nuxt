const fs = require('fs');

const createDir = function createDirectory(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

module.exports = function createDirectory(dir) {
  if (!dir) {
    return;
  }
  const directoryPath = dir.split('/');
  directoryPath.reduce((acc, curr) => {
    acc.push(curr);
    createDir(acc.join('/'));
    return acc;
  }, []);
};
