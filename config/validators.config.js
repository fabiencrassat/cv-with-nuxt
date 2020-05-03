require('dotenv').config();

const validatorsConfig = {
  pa11y: {
    chromeLaunchConfig: {
      executablePath: process.env.CHROME_PATH,
    },
  },
};

module.exports = validatorsConfig;
