import testUtils from '~~/lib/tests/testUtils';
import fabien from './fabien';

describe('fabien', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(fabien);
  });

  it('renders properly', () => {
    expect.hasAssertions();
    // eslint-disable-next-line jest/prefer-inline-snapshots
    expect(testUtils.htmlFactory(fabien)).toMatchSnapshot();
  });
  it('renders properly en lang', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(fabien, { locale: 'en' })
      // eslint-disable-next-line jest/prefer-inline-snapshots
    ).toMatchSnapshot();
  });
  it('renders properly fr lang', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(fabien, { locale: 'fr' })
      // eslint-disable-next-line jest/prefer-inline-snapshots
    ).toMatchSnapshot();
  });

  it('return head', () => {
    expect.hasAssertions();
    expect(testUtils.metaHeadInfoFactory(fabien)).toStrictEqual({
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
        {
          content: "this.$i18n.t('page.shortTitle')",
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
        },
        {
          content: "this.$i18n.t('page.shortTitle')",
          hid: 'application-name',
          name: 'application-name',
        },
      ],
      title: "this.$i18n.t('page.title')",
    });
  });
});
