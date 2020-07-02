import svgIcon from './svgIcon';
import testUtils from '~~/lib/tests/testUtils';

describe('svgIcon', () => {
  it('renders properly', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(svgIcon, {
        propsData: { id: 'fooId' },
        slots: { default: '<div>foo</div>' },
      })
    ).toMatchInlineSnapshot(`
      <svg id="svg-fooId" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve" class="h-5 w-5 inline fill-current">
        <div>foo</div>
      </svg>
    `);
  });
});
