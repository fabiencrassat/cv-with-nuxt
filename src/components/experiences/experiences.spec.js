import Experiences from './experiences';
import testUtils from '~~/lib/tests/testUtils';

describe('experiences', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(Experiences);
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(Experiences)).toMatchInlineSnapshot('""');
  });
  it('renders properly with empty object', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(Experiences, {
        propsData: { experiences: {} },
      })
    ).toMatchInlineSnapshot('""');
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
  it('renders a lot of experiences with show more button', async () => {
    expect.hasAssertions();
    const wrapper = testUtils.factory(Experiences, {
      propsData: {
        experiences: {
          experience1: {
            id: 'experience1',
            jobImage: '/url/to/jobImage',
            job: 'job',
            date: 'date',
          },
          experience2: {
            id: 'experience2',
            jobImage: '/url/to/jobImage',
            job: 'job',
            date: 'date',
          },
          experience3: {
            id: 'experience3',
            jobImage: '/url/to/jobImage',
            job: 'job',
            date: 'date',
          },
          experience4: {
            id: 'experience4',
            jobImage: '/url/to/jobImage',
            job: 'job',
            date: 'date',
          },
          experience5: {
            id: 'experience5',
            jobImage: '/url/to/jobImage',
            job: 'job',
            date: 'date',
          },
          experience6: {
            id: 'experience6',
            jobImage: '/url/to/jobImageAfterClick',
            job: 'jobAfterClick',
            date: 'dateAfterClick',
          },
        },
      },
    });
    // eslint-disable-next-line jest/prefer-inline-snapshots
    expect(wrapper.html()).toMatchSnapshot();
    await wrapper.find('button').trigger('click');
    expect(wrapper.html()).toMatchSnapshot();
  });
});
