const redirections = require('./redirection.json');

export default function redirection(request, response, next) {
  const redirect = redirections.find(
    (redirection) => redirection.from === request.url
  );
  if (redirect) {
    console.log(
      '\x1b[36mi\x1b[0m %s',
      `Redirect from ${redirect.from} to ${redirect.to}`
    );
    response.writeHead(301, { Location: redirect.to });
    response.end();
  } else {
    next();
  }
}
