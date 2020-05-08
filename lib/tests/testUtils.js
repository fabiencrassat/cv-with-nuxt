import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueMeta from 'vue-meta';

const factory = function factory(
  component,
  { localVue, propsData, stubs },
  { locale = 'locale' } = {}
) {
  return shallowMount(component, {
    mocks: {
      $i18n: { locale, t: (i) => `this.$i18n.t('${i}')` },
      $nuxt: { $route: { path: 'this.$nuxt.$route.path' } },
      $t: (i) => `$t('${i}')`,
      localePath: (i) => `localePath('${i}')`,
      switchLocalePath: (i) => `switchLocalePath('${i}')`,
    },
    localVue,
    propsData,
    stubs,
  });
};

const metaHeadInfoFactory = function metaHeadInfoFactory(component, { stubs }) {
  const localVue = createLocalVue();
  localVue.use(VueMeta, { keyName: 'head' });
  const wrapper = factory(component, { localVue, stubs });
  return wrapper.vm.$metaInfo;
};
module.exports.metaHeadInfoFactory = metaHeadInfoFactory;

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
