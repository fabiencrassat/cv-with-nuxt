import briefcase from './facebook';
import testUtils from '~~/lib/tests/testUtils';

describe('briefcase', () => {
  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(briefcase)).toMatchInlineSnapshot(`
      <svgicon-stub id="Facebook">
        <path d="M10,0.4c-5.302,0-9.6,4.298-9.6,9.6s4.298,9.6,9.6,9.6s9.6-4.298,9.6-9.6S15.302,0.4,10,0.4z M12.274,7.034  h-1.443c-0.171,0-0.361,0.225-0.361,0.524V8.6h1.805l-0.273,1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545V7.726  c0-1.254,0.87-2.273,2.064-2.273h1.443V7.034z"></path>
      </svgicon-stub>
    `);
  });
});
