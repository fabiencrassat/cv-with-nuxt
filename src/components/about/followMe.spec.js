import FollowMe from './followMe';
import testUtils from '~~/lib/tests/testUtils';

const stubs = ['nuxt-link', 'component1', 'component2'];

describe('leftSide', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(FollowMe);
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(FollowMe)).toMatchInlineSnapshot(
      '<div class="flex justify-around flex-wrap"></div>'
    );
  });
  it('renders properly with props', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(FollowMe, {
        propsData: {
          links: {
            foo: {
              id: 'foo',
              label: 'Label 1',
              url: 'url1',
              svg: 'component1',
            },
            bar: {
              id: 'bar',
              label: 'Label 2',
              url: 'url2',
              svg: 'component2',
            },
          },
        },
        stubs,
      })
    ).toMatchInlineSnapshot(`
      <div class="flex justify-around flex-wrap"><a target="_blank" aria-label="Label 1" href="url1" rel="noopener noreferrer" title="Label 1" class="hover:text-blue-700 p-2 m-2">
          <component1-stub></component1-stub>
        </a><a target="_blank" aria-label="Label 2" href="url2" rel="noopener noreferrer" title="Label 2" class="hover:text-blue-700 p-2 m-2">
          <component2-stub></component2-stub>
        </a></div>
    `);
  });
});
