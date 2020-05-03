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
  test('mounts properly', () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders properly', () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
  test('renders properly en lang', () => {
    const wrapper = factory({ lang: 'en' });
    expect(wrapper.html()).toMatchSnapshot();
  });
  test('renders properly fr lang', () => {
    const wrapper = factory({ lang: 'fr' });
    expect(wrapper.html()).toMatchSnapshot();
  });

  test('return head', () => {
    expect(fabien.head).toEqual(expect.any(Function));
    expect(fabien.head()).toStrictEqual({ title: 'Curriculum Vitae | Fabien' });
  });
});
