require('dotenv').config();

const baseUrl = process.env.LHCI_BASE_URL || 'http://localhost:3000';

module.exports = {
  ci: {
    assert: {
      preset: 'lighthouse:recommended',
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
