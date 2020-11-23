import NavigationLeftSide from './leftSide';
import testUtils from '~~/lib/tests/testUtils';

const propsData = { name: 'foo', picture: 'bar' };
const stubs = [
  'nuxt-link',
  'component',
  'component1',
  'component2',
  'component3',
];

describe('leftSide', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(NavigationLeftSide, { propsData, stubs });
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(NavigationLeftSide, { propsData, stubs })
      // eslint-disable-next-line jest/prefer-inline-snapshots
    ).toMatchSnapshot();
  });
  it('renders properly with empty object', () => {
    expect.hasAssertions();
    const propsDataWithMenuItems = Object.assign({}, propsData, {
      'menu-items': [],
    });
    expect(
      testUtils.htmlFactory(NavigationLeftSide, {
        propsData: propsDataWithMenuItems,
        stubs,
      })
      // eslint-disable-next-line jest/prefer-inline-snapshots
    ).toMatchSnapshot();
  });
  it('renders properly with props', () => {
    expect.hasAssertions();
    const propsDataWithMenuItems = Object.assign({}, propsData, {
      'menu-items': [
        { name: 'Page 1', url: 'page1', svg: 'component1' },
        { name: 'Page 2', url: 'page2', svg: 'component2' },
        { name: 'à propos', url: 'about', svg: 'component3' },
      ],
    });
    expect(
      testUtils.htmlFactory(NavigationLeftSide, {
        propsData: propsDataWithMenuItems,
        stubs,
      })
      // eslint-disable-next-line jest/prefer-inline-snapshots
    ).toMatchSnapshot();
  });
  it('click on an anchor in the menu to close the burger menu', async () => {
    expect.hasAssertions();
    const propsDataWithMenuItems = Object.assign({}, propsData, {
      'menu-items': [{ name: 'Page', url: 'page', svg: 'component' }],
    });
    const wrapper = testUtils.factory(NavigationLeftSide, {
      propsData: propsDataWithMenuItems,
      stubs,
    });
    const checkbox = wrapper.find('input');
    expect(checkbox.element.checked).toBe(false);
    expect(wrapper.vm.checkbox).toBe(false);
    await wrapper.find('li').trigger('click');
    expect(checkbox.element.checked).toBe(true);
    expect(wrapper.vm.checkbox).toBe(true);
  });
});
