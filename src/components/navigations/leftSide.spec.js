import { shallowMount } from '@vue/test-utils';
import NavigationLeftSide from './leftSide';

jest.mock('../icons/user', () => jest.fn);
jest.mock('../icons/phone', () => jest.fn);
jest.mock('../icons/glasses', () => jest.fn);
jest.mock('../icons/suitcase', () => jest.fn);

const factory = ({ propsData } = {}) => {
  return shallowMount(NavigationLeftSide, {
    mocks: {
      // Always returns the input
      $t: (i) => `$t('${i}')`,
      localePath: (i) => `localePath('${i}')`,
    },
    propsData,
    stubs: ['nuxt-link', 'AboutIcon', 'ContactIcon', 'SkillIcon', 'JobIcon'],
  });
};

describe('leftSide', () => {
  test('mounts properly', () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders properly', () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
  test('renders properly with props', () => {
    const wrapper = factory({ propsData: { homepage: '/foo' } });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
