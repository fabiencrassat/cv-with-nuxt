describe('get_sonar_quality_gate', () => {
  const preTest = function preTest(url) {
    jest.resetModules();
    const {
      getSonarQualityGate,
    } = require('../lib/scripts/getSonarQualityGate');
    jest.mock('../lib/scripts/getSonarQualityGate');
    process.argv = ['node program', 'file.js', url]; // NOSONAR S4823: Using command line arguments is security-sensitive
    return { getSonarQualityGate };
  };
  const expectedTest = function expectedTest({
    getSonarQualityGate,
    expectedCalledWith,
  }) {
    expect(getSonarQualityGate).toHaveBeenCalledTimes(1);
    expect(getSonarQualityGate).toHaveBeenCalledWith({
      url: expectedCalledWith,
    });
  };
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should run', () => {
    const { getSonarQualityGate } = preTest();
    require('./get_sonar_quality_gate');
    expectedTest({
      getSonarQualityGate,
      expectedCalledWith: 'http://admin:admin@localhost:9000',
    });
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should run with argument', () => {
    const { getSonarQualityGate } = preTest('https://token:@sonarcloud.io');
    require('./get_sonar_quality_gate');
    expectedTest({
      getSonarQualityGate,
      expectedCalledWith: 'https://token:@sonarcloud.io',
    });
  });
  // eslint-disable-next-line jest/prefer-expect-assertions, jest/expect-expect
  it('should throw an error', () => {
    preTest('http://invalid.url');
    expect(() => {
      require('./get_sonar_quality_gate');
    }).toThrow('Url parameter is not in the whitelist');
  });
});
