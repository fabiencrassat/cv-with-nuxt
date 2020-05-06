const process = require('process');
const {
  getSonarQualityGate,
  defaultUrl,
} = require('../lib/scripts/getSonarQualityGate');

// Get the argument and sanitize it
const url = process.argv.slice(2)[0] || defaultUrl; // NOSONAR S4823: Using command line arguments is security-sensitive
if (url !== defaultUrl && !/^https:\/\/[a-z0-9]+:@sonarcloud.io$/.test(url)) {
  throw new Error('Url parameter is not in the whitelist');
}

getSonarQualityGate({ url });
