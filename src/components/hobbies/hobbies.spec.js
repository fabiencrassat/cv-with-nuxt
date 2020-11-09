import Hobbies from './hobbies';
import testUtils from '~~/lib/tests/testUtils';

describe('hobbies', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(Hobbies);
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(Hobbies)).toMatchInlineSnapshot(
      '<div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto px-8"></div>'
    );
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
        <div id="foo" class="w-full bg-white rounded h-full text-grey-darkest no-underline shadow-md">
          <h1 class="text-3xl p-6 whitespace-no-wrap">
            foo
          </h1> <img height="333" width="500" src="/foo.jpg" alt="foo" class="w-full block rounded-b">
        </div>
        <div id="bar" class="w-full bg-white rounded h-full text-grey-darkest no-underline shadow-md">
          <h1 class="text-3xl p-6 whitespace-no-wrap">
            bar
          </h1> <img height="333" width="500" src="/bar.jpg" alt="bar" class="w-full block rounded-b">
        </div>
      </div>
    `);
  });
});
