import testUtils from '~~/lib/tests/testUtils';
import Icon from './user';

describe('user', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(Icon);
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(Icon)).toMatchInlineSnapshot(`
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 fill-current">
        <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"></path>
        <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"></path>
        <title>$t('title')</title>
      </svg>
    `);
  });
  it('renders properly with props', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(Icon, { propsData: { title: 'foo' } }))
      .toMatchInlineSnapshot(`
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 fill-current">
        <path d="M16,16A7,7,0,1,0,9,9,7,7,0,0,0,16,16ZM16,4a5,5,0,1,1-5,5A5,5,0,0,1,16,4Z"></path>
        <path d="M17,18H15A11,11,0,0,0,4,29a1,1,0,0,0,1,1H27a1,1,0,0,0,1-1A11,11,0,0,0,17,18ZM6.06,28A9,9,0,0,1,15,20h2a9,9,0,0,1,8.94,8Z"></path>
        <title>foo</title>
      </svg>
    `);
  });
});
