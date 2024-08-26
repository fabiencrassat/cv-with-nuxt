import { expect, it } from 'vitest';
import { config } from '@vue/test-utils';
import { createI18n } from 'vue-i18n';
import { mountSuspended } from '@nuxt/test-utils/runtime';
// eslint-disable-next-line sort-imports
import App from './app.vue';

const setup = function setup(locale: string) {
  const i18n = createI18n({
    locale,
    // eslint-disable-next-line id-length
    missing: (_, key) => key,
  });
  config.global.plugins.push(i18n);
};

it('can mount an app with /en/fabien route', async () => {
  setup('en');
  const component = await mountSuspended(App, { route: '/en/fabien' });
  expect(component.html()).toMatchSnapshot();

  await component.find('button').trigger('click');

  const menuItem = component.find('li');
  expect(menuItem.text()).toBe('identity.name');
  await menuItem.trigger('click');
  expect(component.html()).toMatchSnapshot();
});
it('can mount an app with /fr/fabien route', async () => {
  setup('fr');
  const component = await mountSuspended(App, { route: '/fr/fabien' });
  expect(component.html()).toMatchSnapshot();
});
