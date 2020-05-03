const pa11y = require('pa11y');
const validatorsConfig = require('../../../config/validators.config');

module.exports = async function a11yValidator(pageUrl, filePath) {
  return pa11y(`./${filePath}`, {
    chromeLaunchConfig: {
      executablePath: validatorsConfig.pa11y.chromeLaunchConfig.executablePath,
      args: ['--no-sandbox'], // https://github.com/GoogleChrome/puppeteer/blob/master/docs/troubleshooting.md#setting-up-chrome-linux-sandbox
    },
  })
    .then((data) => {
      if (data.issues.length > 0) {
        console.warn(`a11y validator done for ${pageUrl}`);
        console.warn(data);
        return 1;
      }
      console.info(`a11y validator done for ${pageUrl}`);
      return 0;
    })
    .catch((error) => {
      console.error(`a11y validator error for ${pageUrl}\n\t${error}`);
      return 1;
    });
};
