const { URL } = require('url');

const getProcessArgs = (url) => {
  if (url) {
    return ['node program', 'file.js', url];
  }
  return ['node program', 'file.js'];
};

describe('validate_pages', () => {
  const preTest = function preTest() {
    jest.resetModules();
    const validatePages = require('../lib/scripts/validatePages');
    jest.mock('../lib/scripts/validatePages');
    return { validatePages };
  };
  const expectedTest = function expectedTest({
    validatePages,
    expectedCalledWith,
  }) {
    expect(validatePages).toHaveBeenCalledTimes(1);
    expect(validatePages).toHaveBeenCalledWith({
      url: expectedCalledWith,
      languages: ['fr', 'en'],
    });
  };
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should run', () => {
    const { validatePages } = preTest();
    process.argv = getProcessArgs(); // NOSONAR S4823: Using command line arguments is security-sensitive
    require('./validate_pages');
    expectedTest({ validatePages, expectedCalledWith: undefined });
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should run with argument', () => {
    const { validatePages } = preTest();
    const expectedUrl = new URL('http://localhost:3000');
    process.argv = getProcessArgs(expectedUrl.origin); // NOSONAR S4823: Using command line arguments is security-sensitive
    require('./validate_pages');
    expectedTest({ validatePages, expectedCalledWith: expectedUrl });
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should throw an error', () => {
    preTest();
    process.argv = getProcessArgs('http://invalid.url'); // NOSONAR S4823: Using command line arguments is security-sensitive
    expect(() => {
      require('./validate_pages');
    }).toThrow('Url parameter is not in the whitelist');
  });
});
