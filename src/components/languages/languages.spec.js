import Languages from './languages';
import testUtils from '~~/lib/tests/testUtils';

describe('languages', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(Languages);
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(Languages)).toMatchInlineSnapshot('""');
  });
  it('renders properly with empty object', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(Languages, {
        propsData: { languages: {} },
      })
    ).toMatchInlineSnapshot('""');
  });
  it('renders properly with props', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(Languages, {
        propsData: {
          languages: {
            french: {
              id: 'french',
              label: 'french',
              description: 'french description',
            },
            english: {
              id: 'english',
              label: 'english',
              description: 'english description',
            },
          },
        },
      })
    ).toMatchInlineSnapshot(`
      <div>
        <dl>
          <div class="bg-white odd:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm leading-5 font-medium text-gray-900">
              french
            </dt>
            <dd class="mt-1 text-sm leading-5 text-gray-700 sm:mt-0 sm:col-span-2">
              french description
            </dd>
          </div>
          <div class="bg-white odd:bg-gray-200 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt class="text-sm leading-5 font-medium text-gray-900">
              english
            </dt>
            <dd class="mt-1 text-sm leading-5 text-gray-700 sm:mt-0 sm:col-span-2">
              english description
            </dd>
          </div>
        </dl>
      </div>
    `);
  });
});
