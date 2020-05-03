const fs = require('fs');

module.exports = () => {
  const pagePaths = {};
  const pagesFolder = 'src/pages/'; // Change also in the mockFsPagesDirectory in the test

  const composeLines = function composeLines(filePath, word, cb) {
    const content = fs.readFileSync(filePath);

    const re = new RegExp(`^.*${word}.*$`, 'mg');
    let myArray;
    while ((myArray = re.exec(content)) !== null) {
      cb(myArray[0]);
    }
  };

  const extractValues = function extractValues(line) {
    return /\[(.+)\]/ // RegEx to get string inside the array form
      .exec(line)[1]
      .replace(/\s/g, '') // Remove all spaces
      .replace(/'/g, '') // Remove all apostrophes
      .split(','); // Split with comma
  };

  function fillPagePaths(filePath, fileStat) {
    // Construct this file's pathname excluding the "pages" folder & its extension
    const fileName = filePath
      .substr(0, filePath.lastIndexOf('.'))
      .replace(pagesFolder, '');
    let cleanFileName = fileName;
    if (cleanFileName === 'index') {
      cleanFileName = '';
    }
    pagePaths[`/${cleanFileName}`] = {};

    // Extract the locale namespaces from file
    composeLines(filePath, 'namespacesRequired', (line) => {
      const localeNamespaces = extractValues(line);
      const localeNamespacesAlreadyDefined =
        pagePaths[`/${cleanFileName}`].localeNamespaces;
      if (localeNamespacesAlreadyDefined) {
        localeNamespacesAlreadyDefined.forEach((value) => {
          if (localeNamespaces.includes(value)) {
            return;
          }
          localeNamespaces.push(value);
        });
      }
      pagePaths[`/${cleanFileName}`].localeNamespaces = localeNamespaces;
    });

    // Add this file to `pagePaths`
    pagePaths[`/${cleanFileName}`].fileName = `${fileName}`;
    pagePaths[`/${cleanFileName}`].page = `/${cleanFileName}`;
    pagePaths[`/${cleanFileName}`].lastModified = fileStat.mtime;
  }

  const walkSync = (dir) => {
    // Get all files of the current directory & iterate over them
    const files = fs.readdirSync(dir);
    files
      .filter((file) => !file.startsWith('_'))
      .filter((file) => !file.endsWith('.test.js'))
      .filter((file) => !file.endsWith('.spec.js'))
      .forEach((file) => {
        // Construct whole file-path & retrieve file's stats
        const filePath = `${dir}${file}`;
        const fileStat = fs.statSync(filePath);

        if (fileStat.isDirectory()) {
          // Recurse one folder deeper
          walkSync(`${filePath}/`);
        } else {
          fillPagePaths(filePath, fileStat);
        }
      });
  };

  // Start recursion to fill `pagePaths`
  walkSync(pagesFolder);

  return pagePaths;
};
