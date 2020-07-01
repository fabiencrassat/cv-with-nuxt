require('dotenv').config();

const localhostUrl = 'http://localhost:3000';
const baseUrl = process.env.LHCI_BASE_URL || localhostUrl;

const assertions = function assertions() {
  // FIXME: Resolve and remove them
  const result = {
    'offline-start-url': 'warn',
    'service-worker': 'warn',
    'unused-javascript': 'warn',
    'works-offline': 'warn',
  };
  if (baseUrl === localhostUrl) {
    return Object.assign(result, {
      'uses-text-compression': 'warn',
    });
  }
  // FIXME: Resolve and remove them
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
      url: [
        `${baseUrl}/fabien`,
        `${baseUrl}/en/fabien`,
        `${baseUrl}/fr/fabien`,
      ],
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: process.env.LHCI_SERVER_BASE_URL,
      token: process.env.LHCI_TOKEN,
    },
  },
};
