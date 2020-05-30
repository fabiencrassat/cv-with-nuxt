import fabien from './fabien';
import testUtils from '~~/lib/tests/testUtils';

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

  it('return head', () => {
    expect.hasAssertions();
    expect(testUtils.metaHeadInfoFactory(fabien)).toStrictEqual({
      meta: [
        {
          content: "this.$i18n.t('job.presentation')",
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
          content: "this.$i18n.t('job.presentation')",
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
