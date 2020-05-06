import testUtils from '~~/lib/tests/testUtils';
import fabien from './fabien';

jest.mock('~/components/navigations/leftSide.vue', () => jest.fn);

const stubs = ['nuxt-link', 'LeftSideNavigation'];

describe('fabien', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(fabien, { stubs });
  });

  it('renders properly', () => {
    expect.hasAssertions();
    // eslint-disable-next-line jest/prefer-inline-snapshots
    expect(testUtils.htmlFactory(fabien, { stubs })).toMatchSnapshot();
  });
  it('renders properly en lang', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(fabien, { stubs }, { locale: 'en' })
      // eslint-disable-next-line jest/prefer-inline-snapshots
    ).toMatchSnapshot();
  });
  it('renders properly fr lang', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(fabien, { stubs }, { locale: 'fr' })
      // eslint-disable-next-line jest/prefer-inline-snapshots
    ).toMatchSnapshot();
  });

  it('return head', () => {
    expect.hasAssertions();
    expect(fabien.head).toStrictEqual(expect.any(Function));
    expect(fabien.head()).toStrictEqual({ title: 'Curriculum Vitae | Fabien' });
  });
});
