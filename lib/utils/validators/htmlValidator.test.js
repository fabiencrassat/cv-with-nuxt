import validator from 'html-validator';
import htmlValidator from './htmlValidator';

jest.mock('html-validator');

// eslint-disable-next-line jest/prefer-spy-on
console.error = jest.fn();
// eslint-disable-next-line jest/prefer-spy-on
console.warn = jest.fn();
// eslint-disable-next-line jest/prefer-spy-on
console.info = jest.fn();

const htmlSource = 'htmlSource';
const validatorExpectCall = {
  data: htmlSource,
  format: 'text',
  ignore: [
    'Error: A “charset” attribute on a “meta” element found after the first 1024 bytes.',
  ],
};

describe('htmlValidator', () => {
  // eslint-disable-next-line jest/no-hooks
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should return 1 on error', async () => {
    expect.hasAssertions();
    validator.mockImplementation(() => Promise.reject('It is the error'));
    const result = await htmlValidator('pageUrl', htmlSource);
    expect(validator).toHaveBeenCalledTimes(1);
    expect(validator).toHaveBeenCalledWith(validatorExpectCall);
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(
      'html validator error for pageUrl\n\tIt is the error'
    );
    expect(result).toBe(1);
  });
  it('should return 1 on issues', async () => {
    expect.hasAssertions();
    validator.mockImplementation(() => Promise.resolve('There were errors!'));
    const result = await htmlValidator('pageUrl', htmlSource);
    expect(validator).toHaveBeenCalledTimes(1);
    expect(validator).toHaveBeenCalledWith(validatorExpectCall);
    expect(console.warn).toHaveBeenCalledTimes(1);
    expect(console.warn).toHaveBeenCalledWith(
      'html validator done for pageUrl\n\tThere were errors!'
    );
    expect(result).toBe(1);
  });
  it('should return 0', async () => {
    expect.hasAssertions();
    validator.mockImplementation(() => Promise.resolve('No error'));
    const result = await htmlValidator('pageUrl', htmlSource);
    expect(validator).toHaveBeenCalledTimes(1);
    expect(validator).toHaveBeenCalledWith(validatorExpectCall);
    expect(console.info).toHaveBeenCalledTimes(1);
    expect(console.info).toHaveBeenCalledWith(
      'html validator done for pageUrl'
    );
    expect(result).toBe(0);
  });
});
