require('dotenv').config();

const validatorsConfig = {
  html: {
    ignore: [
      'Error: Element “img” is missing required attribute “src”.', // TODO: Remove when https://gitlab.com/broj42/nuxt-lazy-load/-/issues/5 is closed
      'Error: Attribute “lazy-background” not allowed on element “div” at this point.',
    ],
  },
  pa11y: {
    chromeLaunchConfig: {
      executablePath: process.env.CHROME_PATH,
    },
  },
};

module.exports = validatorsConfig;
