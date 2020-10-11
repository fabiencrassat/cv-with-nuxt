import browser from './browser';
import testUtils from '~~/lib/tests/testUtils';

describe('browser', () => {
  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(browser)).toMatchInlineSnapshot(`
      <svgicon-stub id="browser">
        <path d="M18,2H2C0.9,2,0,2.9,0,4v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M4.5,3.75  c0.414,0,0.75,0.336,0.75,0.75S4.914,5.25,4.5,5.25S3.75,4.914,3.75,4.5S4.086,3.75,4.5,3.75z M1.75,4.5  c0-0.414,0.336-0.75,0.75-0.75S3.25,4.086,3.25,4.5S2.914,5.25,2.5,5.25S1.75,4.914,1.75,4.5z M18,16H2V7h16V16z M18,5H6V4h12.019  L18,5z"></path>
      </svgicon-stub>
    `);
  });
});
