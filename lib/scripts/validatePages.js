const fs = require('fs');
const request = require('request');
const fetch = require('node-fetch');
const { URL } = require('url');
const createDirectory = require('../utils/createDirectory');
const htmlValidator = require('../utils/validators/htmlValidator');
const a11yValidator = require('../utils/validators/a11yValidator');
const getPagePaths = require('./getPagePaths');

function createAndValidatePage(outputPath, url, page) {
  const pageUrl = url + page.page;
  console.info(`Requesting: ${pageUrl}`);
  return new Promise((resolve, reject) => {
    request(pageUrl, (error, response, body) => {
      if (!error && response && response.statusCode === 200) {
        const filePath = `${outputPath}/${page.fileName}.html`;
        fs.writeFileSync(filePath, body);
        process.setMaxListeners(15);
        Promise.all([
          htmlValidator(pageUrl, body),
          a11yValidator(pageUrl, filePath),
        ])
          .then((values) => {
            const value = values.reduce((acc, cur) => acc + cur, 0);
            return resolve(value);
          })
          .catch(() => {
            return reject(1);
          });
      } else {
        // Print the response status code if a response was received
        console.error(`Error in requesting ${pageUrl}`);
        console.error(
          'error:',
          error,
          'statusCode:',
          response && response.statusCode
        );
        return resolve(1);
      }
    });
  });
}

module.exports = async function validatePages({
  outputDir = 'build/html-pages',
  languages = ['fr'],
  url = new URL('http://localhost:3000'),
  pagesFolder = 'pages/',
} = {}) {
  return fetch(url.origin)
    .then(async () => {
      createDirectory(outputDir);
      const pagePaths = getPagePaths(pagesFolder) || {};
      let errorNumberTab = languages.map(async (lang) => {
        let outputPath = `${outputDir}/${lang}`;
        createDirectory(outputPath);
        let allPromises = Object.keys(pagePaths).map(
          async (path) =>
            await createAndValidatePage(
              outputPath,
              `${url.origin}/${lang}`,
              pagePaths[path]
            )
        );
        return await Promise.all(allPromises);
      });
      const errorNumberTabs = await Promise.all(errorNumberTab);
      if (![].concat(...errorNumberTabs).every((val) => val === 0)) {
        return process.exit(1);
      }
      return process.exit(0);
    })
    .catch((err) => {
      console.error(`
Your local server or given url ${url.origin} seems not running. Do you start it with "yarn start"?
Error: ${err}`);
      process.exit(1);
    });
};
