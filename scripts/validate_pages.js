const { URL } = require('url');
const validatePages = require('../lib/scripts/validatePages');

// Get the argument and sanitize it
const url = process.argv.slice(2)[0]; // NOSONAR S4823: Using command line arguments is security-sensitive
let urlSanitize;
if (url !== undefined) {
  urlSanitize = new URL(url);
  const regexList = [
    /http:\/\/localhost:3000/,
    /https:\/\/cv-with-nuxt-.*\.vercel\.app/,
    /https:\/\/cv2\.crassat\.com/,
  ];
  const isMatch = regexList.some((regExp) => regExp.test(urlSanitize.origin));
  if (!isMatch) {
    throw new Error('Url parameter is not in the whitelist');
  }
}

validatePages({
  url: urlSanitize,
  languages: ['fr', 'en'],
  pagesFolder: 'src/pages/',
});
