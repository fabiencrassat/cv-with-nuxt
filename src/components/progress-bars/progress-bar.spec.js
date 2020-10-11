import ProgressBar from './progress-bar';
import testUtils from '~~/lib/tests/testUtils';

describe('progress-bar', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(ProgressBar);
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(ProgressBar)).toMatchInlineSnapshot(`
      <div>
        <div class="flex items-end justify-between"><span></span> <span>100%</span></div>
        <div class="h-4 relative rounded-md overflow-hidden bg-gray-200">
          <div class="h-full rounded-sm bg-blue-500 relative w-0" style="width: 100%;"></div>
        </div>
      </div>
    `);
  });
  it('renders properly with props', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(ProgressBar, {
        propsData: { label: 'foo', percentage: 10 },
      })
    ).toMatchInlineSnapshot(`
      <div>
        <div class="flex items-end justify-between"><span>foo</span> <span>10%</span></div>
        <div class="h-4 relative rounded-md overflow-hidden bg-gray-200">
          <div class="h-full rounded-sm bg-blue-500 relative w-0" style="width: 10%;"></div>
        </div>
      </div>
    `);
  });
});
