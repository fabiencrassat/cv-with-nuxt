import { shallowMount } from '@vue/test-utils';
import fabien from './fabien';

jest.mock('~/components/navigations/leftSide.vue', () => jest.fn);

const factory = ({ lang = 'locale' } = {}) => {
  return shallowMount(fabien, {
    mocks: {
      // Always returns the input
      $t: (i) => `$t('${i}')`,
      localePath: (i) => `localePath('${i}')`,
      $i18n: { locale: lang },
      switchLocalePath: (i) => `switchLocalePath('${i}')`,
    },
    stubs: ['nuxt-link', 'LeftSideNavigation'],
  });
};

describe('fabien', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    const wrapper = factory();
    // eslint-disable-next-line jest/no-truthy-falsy
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('renders properly', () => {
    expect.hasAssertions();
    const wrapper = factory();
    // eslint-disable-next-line jest/prefer-inline-snapshots
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('renders properly en lang', () => {
    expect.hasAssertions();
    const wrapper = factory({ lang: 'en' });
    // eslint-disable-next-line jest/prefer-inline-snapshots
    expect(wrapper.html()).toMatchSnapshot();
  });
  it('renders properly fr lang', () => {
    expect.hasAssertions();
    const wrapper = factory({ lang: 'fr' });
    // eslint-disable-next-line jest/prefer-inline-snapshots
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('return head', () => {
    expect.hasAssertions();
    expect(fabien.head).toStrictEqual(expect.any(Function));
    expect(fabien.head()).toStrictEqual({ title: 'Curriculum Vitae | Fabien' });
  });
});
