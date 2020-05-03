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
  it('renders properly with props', () => {
    expect.hasAssertions();
    const wrapper = factory({ propsData: { homepage: '/foo' } });
    // eslint-disable-next-line jest/prefer-inline-snapshots
    expect(wrapper.html()).toMatchSnapshot();
  });
});
