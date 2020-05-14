import testUtils from '~~/lib/tests/testUtils';
import NavigationLeftSide from './leftSide';

const stubs = ['nuxt-link', 'AboutIcon', 'ContactIcon', 'SkillIcon', 'JobIcon'];

describe('leftSide', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(NavigationLeftSide, { stubs });
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(NavigationLeftSide, { stubs })
      // eslint-disable-next-line jest/prefer-inline-snapshots
    ).toMatchSnapshot();
  });
  it('renders properly with props', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(NavigationLeftSide, {
        propsData: { homepage: '/foo' },
        stubs,
      })
      // eslint-disable-next-line jest/prefer-inline-snapshots
    ).toMatchSnapshot();
  });
});
