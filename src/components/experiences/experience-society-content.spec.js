import Content from './experience-society-content';
import testUtils from '~~/lib/tests/testUtils';

describe('content', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(Content, {
      propsData: {
        society: {},
      },
    });
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(Content, {
        propsData: {
          society: {},
        },
      })
    ).toMatchInlineSnapshot(`
      <div class="flex items-center"><img src="/img/societies/office-building.svg" class="w-10 h-10 rounded-full mr-4">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">

          </p>
          <p class="text-gray-600">

          </p>
        </div>
      </div>
    `);
  });
  it('renders properly with props', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(Content, {
        propsData: {
          society: {
            icon: 'path/to/icon',
            name: 'society name',
            address: 'society address',
          },
        },
      })
    ).toMatchInlineSnapshot(`
      <div class="flex items-center"><img src="path/to/icon" alt="society name" class="w-10 h-10 rounded-full mr-4">
        <div class="text-sm">
          <p class="text-gray-900 leading-none">
            society name
          </p>
          <p class="text-gray-600">
            society address
          </p>
        </div>
      </div>
    `);
  });
});
