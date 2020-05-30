import H1Heading from './h1';
import testUtils from '~~/lib/tests/testUtils';

describe('h1', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(H1Heading);
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(H1Heading)).toMatchInlineSnapshot(
      '<h1 class="text-3xl font-black"></h1>'
    );
  });
  it('renders properly with slot', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(H1Heading, {
        slots: { default: '<div>foo</div>' },
      })
    ).toMatchInlineSnapshot(`
      <h1 class="text-3xl font-black">
        <div>foo</div>
      </h1>
    `);
  });
});
