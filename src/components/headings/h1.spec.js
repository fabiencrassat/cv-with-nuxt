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
      '<h1 class="text-4xl sm:text-5xl uppercase mb-4 mt-12"></h1>'
    );
  });
  it('renders properly with prop', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(H1Heading, { propsData: { first: true } })
    ).toMatchInlineSnapshot(
      '<h1 class="text-4xl sm:text-5xl uppercase mb-4 mt-8"></h1>'
    );
  });
  it('renders properly with slot', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(H1Heading, {
        slots: { default: '<div>foo</div>' },
      })
    ).toMatchInlineSnapshot(`
      <h1 class="text-4xl sm:text-5xl uppercase mb-4 mt-12">
        <div>foo</div>
      </h1>
    `);
  });
});
