import ContactMe from './contact-me';
import testUtils from '~~/lib/tests/testUtils';

describe('contactMe', () => {
  it('mounts properly', () => {
    expect.hasAssertions();
    testUtils.mountProperly(ContactMe);
  });

  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(ContactMe)).toMatchInlineSnapshot(`
      <p><svg id="Location_pin" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve" class="h-5 w-5 inline fill-current text-blue-700">
          <path d="M10,2.009c-2.762,0-5,2.229-5,4.99c0,4.774,5,11,5,11s5-6.227,5-11C15,4.239,12.762,2.009,10,2.009z M10,9.76c-1.492,0-2.7-1.209-2.7-2.7s1.208-2.7,2.7-2.7c1.49,0,2.699,1.209,2.699,2.7S11.49,9.76,10,9.76z"></path>
        </svg> <a href="http://goo.gl/maps/UJrFf" target="_blank" rel="noopener noreferrer">
          Paris, France
        </a></p>
    `);
  });
});
