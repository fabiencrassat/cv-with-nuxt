import Hobbies from './hobbies';
import testUtils from '~~/lib/tests/testUtils';

describe('hobbies', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(Hobbies);
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(Hobbies)).toMatchInlineSnapshot('""');
  });
  it('renders properly with empty object', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(Hobbies, {
        propsData: { hobbies: {} },
      })
    ).toMatchInlineSnapshot('""');
  });
  it('renders properly with props', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(Hobbies, {
        propsData: {
          hobbies: {
            foo: {
              id: 'foo',
              label: 'foo',
              image: '/foo.jpg',
            },
            bar: {
              id: 'bar',
              label: 'bar',
              image: '/bar.jpg',
            },
          },
        },
      })
    ).toMatchInlineSnapshot(`
      <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto px-8">
        <div id="foo" class="flex flex-col justify-between w-full bg-white rounded h-full text-grey-darkest no-underline shadow-md">
          <div class="text-2xl sm:text-3xl p-6">
            foo
          </div> <img height="333" width="500" src="/foo.jpg" alt="foo" class="w-full block rounded-b">
        </div>
        <div id="bar" class="flex flex-col justify-between w-full bg-white rounded h-full text-grey-darkest no-underline shadow-md">
          <div class="text-2xl sm:text-3xl p-6">
            bar
          </div> <img height="333" width="500" src="/bar.jpg" alt="bar" class="w-full block rounded-b">
        </div>
      </div>
    `);
  });
});
