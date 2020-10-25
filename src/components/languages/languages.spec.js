import Languages from './languages';
import testUtils from '~~/lib/tests/testUtils';

describe('languages', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(Languages);
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(Languages)).toMatchInlineSnapshot(`
      <div>
        <dl></dl>
      </div>
    `);
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
      // eslint-disable-next-line jest/prefer-inline-snapshots
    ).toMatchSnapshot();
  });
});
