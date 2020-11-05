import Certifications from './certifications';
import testUtils from '~~/lib/tests/testUtils';

describe('certifications', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(Certifications);
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(Certifications)).toMatchInlineSnapshot(
      '<div class="flex flex-wrap"></div>'
    );
  });
  it('renders properly with props', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(Certifications, {
        propsData: {
          certifications: {
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
          },
        },
      })
    ).toMatchInlineSnapshot(`
      <div class="flex flex-wrap">
        <div class="relative rounded-lg shadow-lg text-center bg-white m-5 p-5 w-64"><img src="/img1" height="200" class="h-48 m-auto">
          <p class="font-black mt-5 mb-3">
            label1
          </p>
          <p>
            date1
          </p>
        </div>
        <div class="relative rounded-lg shadow-lg text-center bg-white m-5 p-5 w-64"><img src="/img2" height="200" class="h-48 m-auto">
          <p class="font-black mt-5 mb-3">
            label2
          </p>
          <p>
            date2
          </p>
        </div>
      </div>
    `);
  });
});
