import { shallowMount } from '@vue/test-utils';
import fabien from './fabien';

jest.mock('~/components/navigation.vue', () => jest.fn);

const factory = ({ lang = 'locale' } = {}) => {
  return shallowMount(fabien, {
    mocks: {
      // Always returns the input
      $t: (i) => i,
      localePath: (i) => i,
      $i18n: { locale: lang },
      switchLocalePath: (i) => i,
    },
    stubs: ['nuxt-link'],
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
});
