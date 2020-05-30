/* eslint-env jest */
/* eslint-disable jest/prefer-strict-equal */

import mockFs from 'mock-fs';

import GetPagePaths from './getPagePaths';

const mockFsFile = (content = '') =>
  mockFs.file({ content, mtime: new Date(1) });
const mockFsDirectory = (files = {}) =>
  mockFs.directory({ mode: 0o755, items: files });
const mockFsPagesDirectory = (files = {}) => {
  mockFs({ pages: mockFsDirectory(files) });
};
const expectPagePath = (fileName) => ({
  fileName: fileName || 'index',
  lastModified: new Date(1),
  page: fileName ? `/${fileName}` : '/',
});

describe('getPagePaths', () => {
  // eslint-disable-next-line jest/no-hooks
  afterEach(() => {
    mockFs.restore();
  });
  it('should get no file', () => {
    expect.hasAssertions();
    mockFsPagesDirectory();
    const result = GetPagePaths();
    expect(result).toStrictEqual({});
  });
  it('should not get underscrore and test files', () => {
    expect.hasAssertions();
    mockFsPagesDirectory({
      '_underscore.js': mockFsFile(),
      'file.test.js': mockFsFile(),
    });
    const result = GetPagePaths();
    expect(result).toStrictEqual({});
  });
  it('should get files', () => {
    expect.hasAssertions();
    mockFsPagesDirectory({
      'index.js': mockFsFile(),
      'page1.js': mockFsFile(),
    });
    const result = GetPagePaths();
    expect(result).toEqual({
      '/': expectPagePath(),
      '/page1': expectPagePath('page1'),
    });
  });
  it('should get files inside directories', () => {
    expect.hasAssertions();
    const filesInSubPage = {
      'page1.js': mockFsFile(),
      'page2.js': mockFsFile(),
    };
    mockFs({
      'pages/subpage1': mockFsDirectory(filesInSubPage),
      'pages/subpage2': mockFsDirectory(filesInSubPage),
    });
    const result = GetPagePaths();
    expect(result).toEqual({
      '/subpage1/page1': expectPagePath('subpage1/page1'),
      '/subpage1/page2': expectPagePath('subpage1/page2'),
      '/subpage2/page1': expectPagePath('subpage2/page1'),
      '/subpage2/page2': expectPagePath('subpage2/page2'),
    });
  });
  it('should get files with localeNamespaces', () => {
    expect.hasAssertions();
    mockFsPagesDirectory({
      'index.js': mockFsFile(`
        some stuff
        namespacesRequired: ['common', 'contact'],
        some other stuff
        namespacesRequired: ['common', 'other'],
      `),
    });
    const result = GetPagePaths();
    expect(result).toEqual({
      '/': {
        fileName: 'index',
        lastModified: new Date(1),
        localeNamespaces: ['common', 'other', 'contact'],
        page: '/',
      },
    });
  });
});
