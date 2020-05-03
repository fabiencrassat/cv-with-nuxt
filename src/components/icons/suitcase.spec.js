import { shallowMount } from '@vue/test-utils';
import Icon from './suitcase';

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
    const wrapper = factory({ propsData: { title: 'foo' } });
    // eslint-disable-next-line jest/prefer-inline-snapshots
    expect(wrapper.html()).toMatchSnapshot();
  });
});
