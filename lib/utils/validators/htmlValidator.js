const validator = require('html-validator');
const validatorsConfig = require('../../../config/validators.config');

const validatorOptions = {
  format: 'text',
  ignore: validatorsConfig.html.ignore,
};

module.exports = function htmlValidator(pageUrl, htmlSource) {
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
