const validator = require('html-validator');

const validatorOptions = {
  format: 'text',
  ignore: [
    // Ignore this error due to https://github.com/zeit/next.js/issues/6919#issuecomment-500471583
    'Error: A “charset” attribute on a “meta” element found after the first 1024 bytes.',
  ],
};

module.exports = async function htmlValidator(pageUrl, htmlSource) {
  validatorOptions.data = htmlSource;
  return validator(validatorOptions)
    .then((data) => {
      if (/There were errors/.test(data)) {
        console.warn(`html validator done for ${pageUrl}\n\t${data}`);
        return 1;
      }
      console.info(`html validator done for ${pageUrl}`);
      return 0;
    })
    .catch((error) => {
      console.error(`html validator error for ${pageUrl}\n\t${error}`);
      return 1;
    });
};
