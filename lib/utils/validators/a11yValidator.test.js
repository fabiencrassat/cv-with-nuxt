import pa11y from 'pa11y';
import a11yValidator from './a11yValidator';

jest.mock('pa11y');

// eslint-disable-next-line jest/prefer-spy-on
console.error = jest.fn();
// eslint-disable-next-line jest/prefer-spy-on
console.warn = jest.fn();
// eslint-disable-next-line jest/prefer-spy-on
console.info = jest.fn();

const filePath = 'filePath';
const relativeFilePath = `./${filePath}`;
const pa11yOptions = {
  chromeLaunchConfig: { args: ['--no-sandbox'], executablePath: undefined },
};

describe('a11yValidator', () => {
  // eslint-disable-next-line jest/no-hooks
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should return 1 on error', async () => {
    expect.hasAssertions();
    pa11y.mockImplementation(() => Promise.reject('It is the error'));
    const result = await a11yValidator('pageUrl', filePath);
    expect(pa11y).toHaveBeenCalledTimes(1);
    expect(pa11y).toHaveBeenCalledWith(relativeFilePath, pa11yOptions);
    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith(
      'a11y validator error for pageUrl\n\tIt is the error'
    );
    expect(result).toBe(1);
  });
  it('should return 1 on issues', async () => {
    expect.hasAssertions();
    pa11y.mockImplementation(() =>
      Promise.resolve({ issues: ['It is an issue'] })
    );
    const result = await a11yValidator('pageUrl', filePath);
    expect(pa11y).toHaveBeenCalledTimes(1);
    expect(pa11y).toHaveBeenCalledWith(relativeFilePath, pa11yOptions);
    expect(console.warn).toHaveBeenCalledTimes(2);
    expect(console.warn).toHaveBeenNthCalledWith(
      1,
      'a11y validator done for pageUrl'
    );
    expect(console.warn).toHaveBeenNthCalledWith(2, {
      issues: ['It is an issue'],
    });
    expect(result).toBe(1);
  });
  it('should return 0', async () => {
    expect.hasAssertions();
    pa11y.mockImplementation(() => Promise.resolve({ issues: [] }));
    const result = await a11yValidator('pageUrl', filePath);
    expect(pa11y).toHaveBeenCalledTimes(1);
    expect(pa11y).toHaveBeenCalledWith(relativeFilePath, pa11yOptions);
    expect(console.info).toHaveBeenCalledTimes(1);
    expect(console.info).toHaveBeenCalledWith(
      'a11y validator done for pageUrl'
    );
    expect(result).toBe(0);
  });
});
