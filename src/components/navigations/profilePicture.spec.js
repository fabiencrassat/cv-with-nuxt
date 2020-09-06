import ProfilePicture from './profilePicture';
import testUtils from '~~/lib/tests/testUtils';

const propsData = { name: 'foo', picture: 'bar' };

describe('profilePicture', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(ProfilePicture, { propsData });
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(
      testUtils.htmlFactory(ProfilePicture, { propsData })
    ).toMatchInlineSnapshot(
      '<img height="100" width="100" src="bar" alt="foo" class="rounded-full border-4 border-solid border-blue-300 shadow-outline lazyLoad isLoaded">'
    );
  });
});
