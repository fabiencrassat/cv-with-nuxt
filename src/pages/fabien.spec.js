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
    expect(testUtils.metaHeadInfoFactory(fabien, { stubs })).toStrictEqual({
      meta: [
        {
          content: "this.$i18n.t('page.description')",
          hid: 'description',
          name: 'description',
        },
        { content: 'this.$nuxt.$route.path', hid: 'og:url', name: 'og:url' },
        {
          content: "this.$i18n.t('page.title')",
          hid: 'og:site_name',
          name: 'og:site_name',
        },
        {
          content: "this.$i18n.t('page.title')",
          hid: 'og:title',
          name: 'og:title',
        },
        {
          content: "this.$i18n.t('page.description')",
          hid: 'og:description',
          name: 'og:description',
        },
      ],
      title: "this.$i18n.t('page.title')",
    });
  });
});
