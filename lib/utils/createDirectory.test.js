import fs from 'fs';

import createDirectory from './createDirectory';

jest.mock('fs');

describe('createDirectory', () => {
  // eslint-disable-next-line jest/no-hooks
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should do nothing', () => {
    expect.hasAssertions();
    createDirectory();
    expect(fs.existsSync).toHaveBeenCalledTimes(0);
  });
  it('should do nothing with empty string', () => {
    expect.hasAssertions();
    createDirectory('');
    expect(fs.existsSync).toHaveBeenCalledTimes(0);
  });
  it('should create a new directory if one does not already exist', () => {
    expect.hasAssertions();
    fs.existsSync.mockReturnValue(false);
    createDirectory('test-path');
    expect(fs.mkdirSync).toHaveBeenCalledTimes(1);
    expect(fs.mkdirSync).toHaveBeenCalledWith('test-path');
  });
  it('should not create a new directory if one already exists', () => {
    expect.hasAssertions();
    fs.existsSync.mockReturnValue(true);
    createDirectory('test-path');
    expect(fs.mkdirSync).toHaveBeenCalledTimes(0);
  });
  it('should create new directory path if no one already exists', () => {
    expect.hasAssertions();
    fs.existsSync.mockReturnValue(false);
    createDirectory('folder/subFolder');
    expect(fs.mkdirSync).toHaveBeenCalledTimes(2);
    expect(fs.mkdirSync.mock.calls[0][0]).toBe('folder');
    expect(fs.mkdirSync.mock.calls[1][0]).toBe('folder/subFolder');
  });
});
