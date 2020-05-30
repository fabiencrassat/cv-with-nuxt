/* eslint-env jest */

import fs from 'fs';
import fetch from 'node-fetch';
import request from 'request';
import createDirectory from '../utils/createDirectory';
import htmlValidator from '../utils/validators/htmlValidator';
import a11yValidator from '../utils/validators/a11yValidator';
import getPagePaths from './getPagePaths';

import validatePages from './validatePages';

jest.mock('console');
jest.mock('process');
jest.mock('fs');
jest.mock('request');
jest.mock('node-fetch');
jest.mock('../utils/createDirectory');
jest.mock('../utils/validators/htmlValidator');
jest.mock('../utils/validators/a11yValidator');
jest.mock('./getPagePaths');

// eslint-disable-next-line jest/prefer-spy-on
process.exit = jest.fn();
// eslint-disable-next-line jest/prefer-spy-on
console.error = jest.fn();
// eslint-disable-next-line jest/prefer-spy-on
console.info = jest.fn();
// eslint-disable-next-line jest/prefer-spy-on
fs.writeFileSync = jest.fn();

const mockError = 'It is the error';
const defaultUrl = 'http://localhost:3000';
const defaultOutput = 'build/html-pages';
const defaultLang = 'fr';
const defaultLangUrl = `${defaultUrl}/${defaultLang}`;
const defaultLangOutput = `${defaultOutput}/${defaultLang}`;
const bodyRequestCallBack = 'It is the body';

const preTest = function preTest({
  rejectFetch = false,
  onlyFetch = false,
  noRequestCallBack = false,
  requestCallBack = { mockError: null, statusCode: 200, bodyRequestCallBack },
  rejectValidators = false,
} = {}) {
  if (rejectFetch) {
    fetch.mockImplementation(() => Promise.reject(mockError));
  } else {
    fetch.mockImplementation(() => Promise.resolve());
  }
  if (!onlyFetch) {
    getPagePaths.mockImplementation(() => ({
      '/path/to/page': { page: '/page', fileName: 'pageName' },
    }));
    request.mockImplementation((uri, cb) => {
      expect(uri).toBe(`${defaultLangUrl}/page`);
      if (noRequestCallBack) {
        cb();
      } else {
        cb(
          requestCallBack.mockError,
          { statusCode: requestCallBack.statusCode },
          bodyRequestCallBack
        );
      }
    });
    if (rejectValidators) {
      // eslint-disable-next-line prefer-promise-reject-errors
      htmlValidator.mockImplementation(() => Promise.reject(1));
      // eslint-disable-next-line prefer-promise-reject-errors
      a11yValidator.mockImplementation(() => Promise.reject(1));
    } else {
      htmlValidator.mockImplementation(() => Promise.resolve(0));
      a11yValidator.mockImplementation(() => Promise.resolve(0));
    }
  }
};
const expectValidatePages = function expectValidatePages({
  url,
  serverRunning = true,
  noRequestCalled = false,
  consoleError,
  processExitCode = 1,
} = {}) {
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(fetch).toHaveBeenCalledWith(url);
  if (!serverRunning) {
    expect(createDirectory).toHaveBeenCalledTimes(0);
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(`
Your local server or given url ${url} seems not running. Do you start it with "yarn start"?
Error: ${mockError}`);
  } else {
    expect(createDirectory).toHaveBeenCalledTimes(2);
    expect(createDirectory).toHaveBeenNthCalledWith(1, defaultOutput);
    expect(createDirectory).toHaveBeenNthCalledWith(2, defaultLangOutput);
    expect(getPagePaths).toHaveBeenCalledTimes(1);
    expect(getPagePaths).toHaveBeenCalledWith('pages/');
    if (noRequestCalled) {
      expect(console.info).toHaveBeenCalledTimes(0);
      expect(request).toHaveBeenCalledTimes(0);
    } else {
      expect(console.info).toHaveBeenCalledTimes(1);
      expect(console.info).toHaveBeenCalledWith(
        `Requesting: ${defaultLangUrl}/page`
      );
      expect(request).toHaveBeenCalledTimes(1);
      expect(request).toHaveBeenCalledWith(
        `${defaultLangUrl}/page`,
        expect.any(Function)
      );
      if (consoleError) {
        expect(console.error).toHaveBeenCalledTimes(2);
        expect(console.error).toHaveBeenNthCalledWith(
          1,
          `Error in requesting ${defaultLangUrl}/page`
        );
        expect(console.error).toHaveBeenNthCalledWith(
          2,
          'error:',
          consoleError.mockError,
          'statusCode:',
          consoleError.statusCode
        );
      } else {
        expect(fs.writeFileSync).toHaveBeenCalledTimes(1);
        expect(fs.writeFileSync).toHaveBeenCalledWith(
          `${defaultLangOutput}/pageName.html`,
          bodyRequestCallBack
        );
        expect(htmlValidator).toHaveBeenCalledTimes(1);
        expect(htmlValidator).toHaveBeenCalledWith(
          `${defaultLangUrl}/page`,
          bodyRequestCallBack
        );
        expect(a11yValidator).toHaveBeenCalledTimes(1);
        expect(a11yValidator).toHaveBeenCalledWith(
          `${defaultLangUrl}/page`,
          `${defaultLangOutput}/pageName.html`
        );
      }
    }
  }
  expect(process.exit).toHaveBeenCalledTimes(1);
  expect(process.exit).toHaveBeenCalledWith(processExitCode);
};

describe('validatePages', () => {
  // eslint-disable-next-line jest/no-hooks
  afterEach(() => {
    jest.clearAllMocks();
  });
  // eslint-disable-next-line jest/expect-expect
  it('should fail to connect to a bad url', async () => {
    expect.hasAssertions();
    preTest({ rejectFetch: true, onlyFetch: true });
    await validatePages({ url: 'bad.url' });
    expectValidatePages({ url: undefined, serverRunning: false });
  });
  // eslint-disable-next-line jest/expect-expect
  it('should fail to connect to the default url', async () => {
    expect.hasAssertions();
    preTest({ rejectFetch: true, onlyFetch: true });
    await validatePages();
    expectValidatePages({ url: defaultUrl, serverRunning: false });
  });
  // eslint-disable-next-line jest/expect-expect
  it('should work with default values and do not request anything', async () => {
    expect.hasAssertions();
    preTest({ onlyFetch: true });
    await validatePages();
    expectValidatePages({
      url: defaultUrl,
      noRequestCalled: true,
      processExitCode: 0,
    });
  });
  // eslint-disable-next-line jest/expect-expect
  it('should not work with default values and a page because of request', async () => {
    expect.hasAssertions();
    preTest({ noRequestCallBack: true });
    await validatePages();
    expectValidatePages({
      url: defaultUrl,
      consoleError: { mockError: undefined, statusCode: undefined },
    });
  });
  // eslint-disable-next-line jest/expect-expect
  it('should not work with default values and a page because of response', async () => {
    expect.hasAssertions();
    preTest({ requestCallBack: { mockError, statusCode: 500 } });
    await validatePages();
    expectValidatePages({
      url: defaultUrl,
      consoleError: { mockError, statusCode: 500 },
    });
  });
  // eslint-disable-next-line jest/expect-expect
  it('should call the page validators with bad returns', async () => {
    expect.hasAssertions();
    preTest({ rejectValidators: true });
    await validatePages();
    expectValidatePages({ url: defaultUrl });
  });
  // eslint-disable-next-line jest/expect-expect
  it('should call the page validators without error', async () => {
    expect.hasAssertions();
    preTest();
    await validatePages();
    expectValidatePages({ url: defaultUrl, processExitCode: 0 });
  });
});
