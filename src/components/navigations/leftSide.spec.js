import testUtils from '~~/lib/tests/testUtils';
import NavigationLeftSide from './leftSide';

const propsData = { name: 'foo', picture: 'bar' };
const stubs = ['nuxt-link', 'component1', 'component2'];

describe('leftSide', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(NavigationLeftSide, { propsData, stubs });
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(NavigationLeftSide, { propsData, stubs })
      // eslint-disable-next-line jest/prefer-inline-snapshots
    ).toMatchSnapshot();
  });
  it('renders properly en lang', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(
        NavigationLeftSide,
        { propsData, stubs },
        { locale: 'en' }
      )
      // eslint-disable-next-line jest/prefer-inline-snapshots
    ).toMatchSnapshot();
  });
  it('renders properly fr lang', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(
        NavigationLeftSide,
        { propsData, stubs },
        { locale: 'fr' }
      )
      // eslint-disable-next-line jest/prefer-inline-snapshots
    ).toMatchSnapshot();
  });
  it('renders properly with props', () => {
    expect.hasAssertions();
    const propsDataWithMenuItems = Object.assign({}, propsData, {
      'menu-items': [
        { name: 'Page 1', url: 'page1', svg: 'component1' },
        { name: 'Page 2', url: 'page2', svg: 'component2' },
      ],
    });
    expect(
      testUtils.htmlFactory(NavigationLeftSide, {
        propsData: propsDataWithMenuItems,
        stubs,
      })
      // eslint-disable-next-line jest/prefer-inline-snapshots
    ).toMatchSnapshot();
  });
});
