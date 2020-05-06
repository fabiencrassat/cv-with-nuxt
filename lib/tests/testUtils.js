import { shallowMount } from '@vue/test-utils';

const factory = function factory(
  component,
  { propsData, stubs },
  { locale = 'locale' } = {}
) {
  return shallowMount(component, {
    mocks: {
      $t: (i) => `$t('${i}')`,
      localePath: (i) => `localePath('${i}')`,
      $i18n: { locale },
      switchLocalePath: (i) => `switchLocalePath('${i}')`,
    },
    propsData,
    stubs,
  });
};

const htmlFactory = function htmlFactory(
  component,
  { propsData, stubs } = {},
  { locale } = {}
) {
  const wrapper = factory(component, { propsData, stubs }, { locale });
  return wrapper.html();
};
module.exports.htmlFactory = htmlFactory;

const mountProperly = function mountProperly(component, { stubs } = {}) {
  const wrapper = factory(component, { stubs });
  // eslint-disable-next-line jest/no-standalone-expect
  expect(wrapper.isVueInstance()).toBe(true);
};
module.exports.mountProperly = mountProperly;
