import Skills from './skills';
import testUtils from '~~/lib/tests/testUtils';

const stubs = ['SvgIcon'];

describe('skills', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(Skills);
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(Skills)).toMatchInlineSnapshot('<div></div>');
  });
  it('renders properly with props', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(Skills, {
        stubs,
        propsData: {
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
              label: 'bar',
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
      })
      // eslint-disable-next-line jest/prefer-inline-snapshots
    ).toMatchSnapshot();
  });
});
