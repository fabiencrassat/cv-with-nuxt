import redirection from './redirection';

jest.mock('./redirection.json', () => {
  return [{ from: 'foo', to: 'bar' }];
});

const next = jest.fn();
console.log = jest.fn();
const writeHead = jest.fn();
const end = jest.fn();

describe('redirection', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('no redirection', () => {
    redirection({ url: 'bar' }, undefined, next);
    expect(next).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledTimes(0);
    expect(writeHead).toHaveBeenCalledTimes(0);
    expect(end).toHaveBeenCalledTimes(0);
  });
  test('redirection from foo to bar', () => {
    redirection({ url: 'foo' }, { writeHead, end }, next);
    expect(next).toHaveBeenCalledTimes(0);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(
      '\x1b[36mi\x1b[0m %s',
      'redirect from foo to bar'
    );
    expect(writeHead).toHaveBeenCalledTimes(1);
    expect(writeHead).toHaveBeenCalledWith(301, { Location: 'bar' });
    expect(end).toHaveBeenCalledTimes(1);
  });
});
