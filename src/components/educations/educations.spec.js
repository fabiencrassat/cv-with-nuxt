import Educations from './educations';
import testUtils from '~~/lib/tests/testUtils';

describe('educations', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(Educations);
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(Educations)).toMatchInlineSnapshot('""');
  });
  it('renders properly with empty object', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(Educations, { propsData: { educations: {} } })
    ).toMatchInlineSnapshot('""');
  });
  it('renders properly with props', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(Educations, {
        propsData: {
          educations: {
            school1: {
              dates: [2000, 2020],
              id: 'school1',
              label: 'school1',
              description: 'school1 description',
            },
            school2: {
              date: 'jan 2020',
              id: 'school2',
              label: 'school2',
              description: 'school2 description',
            },
            school3: {
              date: 'dec 2000',
              id: 'school3',
              label: 'school3',
              description: 'school3 description',
            },
          },
        },
      })
      // eslint-disable-next-line jest/prefer-inline-snapshots
    ).toMatchSnapshot();
  });
});
