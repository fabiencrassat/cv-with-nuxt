const { URL } = require('url');
const validatePages = require('../lib/scripts/validatePages');

// Get the argument and sanitize it
const url = process.argv.slice(2)[0]; // NOSONAR S4823: Using command line arguments is security-sensitive
let urlSanitize;
if (url !== undefined) {
  urlSanitize = new URL(url);
  if (
    !['http://localhost:3000', 'https://staging.reacteev.com'].includes(
      urlSanitize.origin
    )
  ) {
    throw new Error('Url parameter is not in the whitelist');
  }
}

validatePages({ url: urlSanitize });
