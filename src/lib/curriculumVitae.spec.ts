describe('fabien', () => {
  function preTest({
    lang,
    mockFabien,
  }: { lang?: string; mockFabien?: any } = {}) {
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
    const CurriculumVitae = require('./curriculumVitae').default;
    const curriculumVitae = new CurriculumVitae(lang);
    expect(curriculumVitae).toBeInstanceOf(CurriculumVitae);
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
    const curriculumVitae = preTest({});
    expect(curriculumVitae.getFollowMe()).toStrictEqual([]);
  });
  it('should return follow links', () => {
    expect.assertions(2);
    const curriculumVitae = preTest({
      lang: 'en',
      mockFabien: {
        followMe: [
          {
            label: { en: 'Label en 1', fr: 'Label fr 1' },
            url: 'url1',
            svg: 'component1',
          },
          {
            label: { en: 'Label en 2', fr: 'Label fr 2' },
            url: 'url2',
            svg: 'component2',
          },
        ],
      },
    });
    expect(curriculumVitae.getFollowMe()).toStrictEqual([
      {
        label: 'Label en 1',
        url: 'url1',
        svg: 'component1',
      },
      {
        label: 'Label en 2',
        url: 'url2',
        svg: 'component2',
      },
    ]);
  });
  it('should return no experiences', () => {
    expect.assertions(2);
    const curriculumVitae = preTest({});
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
      myLastJob: {
        id: 'myLastJob',
      },
      myFirstJob: {
        date: 'Il y a longtemps',
        id: 'myFirstJob',
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
    const curriculumVitae = preTest({});
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
});
