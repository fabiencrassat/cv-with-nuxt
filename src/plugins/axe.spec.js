import Vue from 'vue';

jest.mock('vue');

const OLD_ENV = process.env;
beforeEach(() => {
  jest.resetModules(); // this is important - it clears the cache
  process.env = { ...OLD_ENV };
  delete process.env.NODE_ENV;
});
afterEach(() => {
  process.env = OLD_ENV;
});

describe('axe', () => {
  // TODO: Test the 'if'
  // test('is used if not in production', () => {
  //   process.env.NODE_ENV = 'test';
  //   // Vue.mockImplementation('mocked');
  //   const axe = require('./axe');
  //   expect(Vue.use).toHaveBeenCalledTimes(1);
  //   expect(axe).toEqual({});
  // });
  test('is not used if in production', () => {
    process.env.NODE_ENV = 'production';
    const axe = require('./axe');
    expect(Vue.use).toHaveBeenCalledTimes(0);
    expect(axe).toEqual({});
  });
});
