import Experiences from './experiences';
import testUtils from '~~/lib/tests/testUtils';

describe('experiences', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(Experiences);
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(Experiences)).toMatchInlineSnapshot(
      '<div></div>'
    );
  });
  it('renders properly with props', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(Experiences, {
        propsData: {
          experiences: {
            myLastExperience: {
              id: 'myLastExperience',
              jobImage: '/url/to/jobImage1',
              job: 'job1',
              date: 'date1',
              society: {
                siteurl: 'url/to/site',
              },
            },
            myMiddleExperience: {
              id: 'myMiddleExperience',
              jobImage: '/url/to/jobImage2',
              job: 'job2',
              date: 'date2',
              missions: [],
              society: {},
            },
            myFirstExperience: {
              id: 'myFirstExperience',
              jobImage: '/url/to/jobImage3',
              job: 'job3',
              date: 'date3',
              missions: ['mission31', 'mission32'],
            },
          },
        },
      })
      // eslint-disable-next-line jest/prefer-inline-snapshots
    ).toMatchSnapshot();
  });
});
