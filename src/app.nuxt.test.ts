import { type VueWrapper, config } from '@vue/test-utils';
import { expect, it } from 'vitest';
import { createI18n } from 'vue-i18n';
import { mountSuspended } from '@nuxt/test-utils/runtime';
// eslint-disable-next-line sort-imports
import App from './app.vue';

const setup = function setup(locale: 'en' | 'fr') {
  const i18n = createI18n({
    locale,
    missing: (__, key) => key,
  });
  config.global.plugins.push(i18n);
};
const expandExperiences = async (component: VueWrapper) => {
  await component.find('button').trigger('click');
  expect(component.html()).toMatchSnapshot();
};
const openMenu = async (component: VueWrapper) => {
  await component.find('input').trigger('change');
  expect(component.html()).toMatchSnapshot();
};
const clickOnMenuItemAndCloseMenu = async (component: VueWrapper) => {
  const menuItem = component.find('li');
  expect(menuItem.text()).toBe('identity.name');
  await menuItem.trigger('click');
  expect(component.html()).toMatchSnapshot();
};

it('can mount an app with /en/fabien route', async () => {
  setup('en');
  const component = await mountSuspended(App, { route: '/en/fabien' });
  expect(component.html()).toMatchSnapshot();
  await expandExperiences(component);
  await openMenu(component);
  await clickOnMenuItemAndCloseMenu(component);
});
it('can mount an app with /fr/fabien route', async () => {
  setup('fr');
  const component = await mountSuspended(App, { route: '/fr/fabien' });
  expect(component.html()).toMatchSnapshot();
});
