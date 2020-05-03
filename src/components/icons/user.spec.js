import { shallowMount } from '@vue/test-utils';
import Icon from './user';

const factory = ({ propsData } = {}) => {
  return shallowMount(Icon, {
    mocks: {
      // Always returns the input
      $t: (i) => `$t('${i}')`,
    },
    propsData,
  });
};

describe('glasses', () => {
  test('mounts properly', () => {
    const wrapper = factory();
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test('renders properly', () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });
  test('renders properly with props', () => {
    const wrapper = factory({ propsData: { title: 'foo' } });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
