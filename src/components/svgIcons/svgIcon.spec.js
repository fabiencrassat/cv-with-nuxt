import testUtils from '~~/lib/tests/testUtils';
import svgIcon from './svgIcon';

describe('svgIcon', () => {
  it('renders properly', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(svgIcon, {
        propsData: { id: 'fooId' },
        slots: { default: '<div>foo</div>' },
      })
    ).toMatchInlineSnapshot(`
      <svg version="1.1" id="svg-fooId" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve" class="h-5 w-5 inline mr-3 fill-current">
        <div>foo</div>
      </svg>
    `);
  });
});