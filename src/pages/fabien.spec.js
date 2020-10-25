import fabien from './fabien';
import testUtils from '~~/lib/tests/testUtils';

jest.mock('~/lib/curriculumVitae', () => {
  return jest.fn().mockImplementation(() => {
    return {
      getPresentation: jest.fn(() => 'getPresentation'),
      getFollowMe: jest.fn(() => []),
      getFullName: jest.fn(() => 'getFullName'),
      getPicture: jest.fn(() => 'getPicture'),
      getLastJob: jest.fn(() => 'getLastJob'),
      getExperiences: jest.fn(() => {}),
      getSkills: jest.fn(() => {}),
      getEducations: jest.fn(() => {}),
    };
  });
});

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
          content: 'getPresentation',
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
          content: 'getPresentation',
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
