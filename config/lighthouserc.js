require('dotenv').config();

const localhostUrl = 'http://localhost:3000';
const baseUrl = process.env.LHCI_BASE_URL || localhostUrl;

const assertions = function assertions() {
  const result = {
    'unused-javascript': 'warn',
  };
  if (baseUrl === localhostUrl) {
    return Object.assign(result, {
      'uses-text-compression': 'warn',
    });
  }
  return Object.assign(result, {
    canonical: 'warn',
    'is-crawlable': 'warn',
  });
};

module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:recommended',
      assertions: assertions(),
    },
    collect: {
      chromePath: process.env.CHROME_PATH,
      url: [`${baseUrl}/en/fabien`, `${baseUrl}/fr/fabien`],
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: process.env.LHCI_SERVER_BASE_URL,
      token: process.env.LHCI_TOKEN,
    },
  },
};
