import Name from './name';
import testUtils from '~~/lib/tests/testUtils';

const propsData = { name: 'foo' };

describe('name', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(Name, { propsData });
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(Name, { propsData })).toMatchInlineSnapshot(`
      <h2>
        foo
      </h2>
    `);
  });
});
