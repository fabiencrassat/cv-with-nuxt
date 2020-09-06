import SwitchLang from './switchLang';
import testUtils from '~~/lib/tests/testUtils';

const stubs = ['nuxt-link', 'component1', 'component2'];

describe('leftSide', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(SwitchLang, { stubs });
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(SwitchLang, { stubs })).toMatchInlineSnapshot(`
      <p class="text-xs">
        <nuxt-link-stub to="switchLocalePath('en')" class="block transition-all duration-150 ease-linear">
          Switch language
        </nuxt-link-stub>
        <nuxt-link-stub to="switchLocalePath('fr')" class="block transition-all duration-150 ease-linear">
          Changer de langue
        </nuxt-link-stub>
      </p>
    `);
  });

  it('renders properly en lang', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(SwitchLang, { stubs }, { locale: 'en' }))
      .toMatchInlineSnapshot(`
      <p class="text-xs">
        <!---->
        <nuxt-link-stub to="switchLocalePath('fr')" class="block transition-all duration-150 ease-linear">
          Changer de langue
        </nuxt-link-stub>
      </p>
    `);
  });
  it('renders properly fr lang', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(SwitchLang, { stubs }, { locale: 'fr' }))
      .toMatchInlineSnapshot(`
      <p class="text-xs">
        <nuxt-link-stub to="switchLocalePath('en')" class="block transition-all duration-150 ease-linear">
          Switch language
        </nuxt-link-stub>
        <!---->
      </p>
    `);
  });
});
