import CurriculumVitae from './curriculumVitae';

describe('fabien', () => {
  function preTest({
    lang,
    mockFabien,
  }: { lang?: string; mockFabien?: any } = {}): CurriculumVitae {
    jest.mock('~/resources/fabien.json', () => mockFabien || jest.fn(), {
      virtual: true,
    });
    jest.mock(
      '~/resources/societies.json',
      () => ({
        societyFoo: { name: 'Foo Company' },
      }),
      { virtual: true }
    );
    const CurriculumVitaeClass = require('./curriculumVitae').default;
    const curriculumVitae: CurriculumVitae = new CurriculumVitaeClass(lang);
    expect(curriculumVitae).toBeInstanceOf(CurriculumVitaeClass);
    return curriculumVitae;
  }

  // eslint-disable-next-line jest/no-hooks
  beforeEach(() => {
    jest.resetModules();
  });

  it('should return full name', () => {
    expect.assertions(2);
    const curriculumVitae = preTest({
      mockFabien: { identity: { myself: { fullName: 'fullName' } } },
    });
    expect(curriculumVitae.getFullName()).toBe('fullName');
  });
  it('should return picture', () => {
    expect.assertions(2);
    const curriculumVitae = preTest({
      mockFabien: { identity: { myself: { picture: '/picture.ext' } } },
    });
    expect(curriculumVitae.getPicture()).toBe('/picture.ext');
  });
  it('should return last job', () => {
    expect.assertions(2);
    const curriculumVitae = preTest({
      mockFabien: {
        lookingFor: {
          experience: {
            crossref: 'curriculumVitae.experiences.myLastJob.job',
          },
        },
        experiences: {
          myLastJob: {
            job: {
              fr: 'Un super job',
            },
          },
        },
      },
    });
    expect(curriculumVitae.getLastJob()).toBe('Un super job');
  });
  it('should return English presentation', () => {
    expect.assertions(2);
    const curriculumVitae = preTest({
      lang: 'en',
      mockFabien: {
        lookingFor: {
          presentation: {
            fr: 'Une superbe présentation',
            en: 'A beautiful presentation',
          },
        },
      },
    });
    expect(curriculumVitae.getPresentation()).toBe('A beautiful presentation');
  });
  it('should return no follow link', () => {
    expect.assertions(2);
    const curriculumVitae = preTest();
    expect(curriculumVitae.getFollowMe()).toStrictEqual({});
  });
  it('should return follow links', () => {
    expect.assertions(2);
    const curriculumVitae = preTest({
      lang: 'en',
      mockFabien: {
        followMe: {
          foo: {
            label: { en: 'Label en 1', fr: 'Label fr 1' },
            url: 'url1',
            svg: 'component1',
          },
          bar: {
            label: { en: 'Label en 2', fr: 'Label fr 2' },
            url: 'url2',
            svg: 'component2',
          },
        },
      },
    });
    expect(curriculumVitae.getFollowMe()).toStrictEqual({
      foo: {
        label: 'Label en 1',
        url: 'url1',
        svg: 'component1',
      },
      bar: {
        label: 'Label en 2',
        url: 'url2',
        svg: 'component2',
      },
    });
  });
  it('should return no experiences', () => {
    expect.assertions(2);
    const curriculumVitae = preTest();
    expect(curriculumVitae.getExperiences()).toStrictEqual({});
  });
  it('should return experiences', () => {
    expect.assertions(2);
    const curriculumVitae = preTest({
      mockFabien: {
        experiences: {
          myLastJob: {},
          myFirstJob: {
            date: {
              fr: 'Il y a longtemps',
            },
            job: {
              fr: 'Un super job',
            },
            society: {
              crossref: 'societies.societyFoo',
            },
            missions: {
              fr: ['Apprendre', 'Comprendre'],
            },
          },
        },
      },
    });
    expect(curriculumVitae.getExperiences()).toStrictEqual({
      myLastJob: {},
      myFirstJob: {
        date: 'Il y a longtemps',
        job: 'Un super job',
        society: {
          name: 'Foo Company',
        },
        missions: ['Apprendre', 'Comprendre'],
      },
    });
  });
  it('should return no skills', () => {
    expect.assertions(2);
    const curriculumVitae = preTest();
    expect(curriculumVitae.getSkills()).toStrictEqual({});
  });
  it('should return skills', () => {
    expect.assertions(2);
    const curriculumVitae = preTest({
      mockFabien: {
        skills: {
          foo: {
            label: 'foo',
            svg: 'SvgIcon',
            items: [
              {
                percentage: 90,
                label: 'item at 90%',
              },
              {
                percentage: 60,
                label: 'item at 60%',
              },
            ],
          },
          bar: {
            label: {
              fr: 'bar-fr',
              en: 'bar-en',
            },
            svg: 'SvgIcon',
            items: [
              {
                percentage: 50,
                label: 'item at 50%',
              },
            ],
          },
        },
      },
    });
    expect(curriculumVitae.getSkills()).toStrictEqual({
      foo: {
        label: 'foo',
        svg: 'SvgIcon',
        items: [
          {
            percentage: 90,
            label: 'item at 90%',
          },
          {
            percentage: 60,
            label: 'item at 60%',
          },
        ],
      },
      bar: {
        label: 'bar-fr',
        svg: 'SvgIcon',
        items: [
          {
            percentage: 50,
            label: 'item at 50%',
          },
        ],
      },
    });
  });
  it('should return no education', () => {
    expect.assertions(2);
    const curriculumVitae = preTest();
    expect(curriculumVitae.getEducations()).toStrictEqual({});
  });
  it('should return educations', () => {
    expect.assertions(2);
    const curriculumVitae = preTest({
      mockFabien: {
        educations: {
          highSchool: {},
          school1: {
            dates: [2000, 2020],
            label: {
              fr: 'school1',
            },
            description: {
              fr: 'school1 description',
            },
          },
          school2: {
            date: 'jan 2020',
            label: {
              fr: 'school2',
            },
            description: {
              fr: 'school2 description',
            },
          },
          school3: {
            date: {
              fr: 'dec 2000',
            },
            label: {
              fr: 'school3',
            },
            description: {
              fr: 'school3 description',
            },
          },
        },
      },
    });
    expect(curriculumVitae.getEducations()).toStrictEqual({
      highSchool: {},
      school1: {
        dates: [2000, 2020],
        label: 'school1',
        description: 'school1 description',
      },
      school2: {
        date: 'jan 2020',
        label: 'school2',
        description: 'school2 description',
      },
      school3: {
        date: 'dec 2000',
        label: 'school3',
        description: 'school3 description',
      },
    });
  });
  it('should return no language', () => {
    expect.assertions(2);
    const curriculumVitae = preTest();
    expect(curriculumVitae.getLanguages()).toStrictEqual({});
  });
  it('should return languages', () => {
    expect.assertions(2);
    const curriculumVitae = preTest({
      mockFabien: {
        languages: {
          english: {
            label: {
              fr: 'english',
            },
            description: {
              fr: 'english description',
            },
          },
          french: {
            label: {
              fr: 'french',
            },
            description: {
              fr: 'french description',
            },
          },
        },
      },
    });
    expect(curriculumVitae.getLanguages()).toStrictEqual({
      english: {
        label: 'english',
        description: 'english description',
      },
      french: {
        label: 'french',
        description: 'french description',
      },
    });
  });
  it('should return no certification', () => {
    expect.assertions(2);
    const curriculumVitae = preTest();
    expect(curriculumVitae.getCertifications()).toStrictEqual({});
  });
  it('should return certifications', () => {
    expect.assertions(2);
    const curriculumVitae = preTest({
      mockFabien: {
        certifications: {
          certification1: {
            date: {
              fr: 'date1',
            },
            label: {
              fr: 'label1',
            },
            image: '/img1',
          },
          certification2: {
            date: {
              fr: 'date2',
            },
            label: {
              fr: 'label2',
            },
            image: '/img2',
          },
        },
      },
    });
    expect(curriculumVitae.getCertifications()).toStrictEqual({
      certification1: {
        date: 'date1',
        label: 'label1',
        image: '/img1',
      },
      certification2: {
        date: 'date2',
        label: 'label2',
        image: '/img2',
      },
    });
  });
  it('should return no hooby', () => {
    expect.assertions(2);
    const curriculumVitae = preTest();
    expect(curriculumVitae.getHobbies()).toStrictEqual({});
  });
  it('should return hobbies', () => {
    expect.assertions(2);
    const curriculumVitae = preTest({
      mockFabien: {
        hobbies: {
          foo: {
            label: {
              fr: 'foo',
            },
            image: '/foo.jpg',
          },
          bar: {
            label: {
              fr: 'bar',
            },
            image: '/bar.jpg',
          },
        },
      },
    });
    expect(curriculumVitae.getHobbies()).toStrictEqual({
      foo: {
        label: 'foo',
        image: '/foo.jpg',
      },
      bar: {
        label: 'bar',
        image: '/bar.jpg',
      },
    });
  });
});
