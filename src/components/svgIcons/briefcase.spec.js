import testUtils from '~~/lib/tests/testUtils';
import briefcase from './briefcase';

describe('briefcase', () => {
  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(briefcase)).toMatchInlineSnapshot(`
      <svg version="1.1" id="Briefcase" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve" class="h-5 w-5 inline mr-3 fill-current">
        <path d="M9,10h2v2h9c0,0-0.149-4.459-0.2-5.854C19.75,4.82,19.275,4,17.8,4h-3.208 c-0.497-0.938-1.032-1.945-1.197-2.256C13.064,1.121,12.951,1,12.216,1H7.783C7.048,1,6.936,1.121,6.604,1.744 C6.439,2.055,5.904,3.062,5.408,4H2.199c-1.476,0-1.945,0.82-2,2.146C0.145,7.473,0,12,0,12h9V10z M7.649,2.916 C7.879,2.484,7.957,2.4,8.466,2.4h3.067c0.509,0,0.588,0.084,0.816,0.516c0.086,0.16,0.318,0.6,0.575,1.084h-5.85 C7.331,3.516,7.563,3.076,7.649,2.916z M11,15H9v-2H0.5c0,0,0.124,1.797,0.199,3.322C0.73,16.955,0.917,18,2.499,18H17.5 c1.582,0,1.765-1.047,1.8-1.678C19.387,14.754,19.5,13,19.5,13H11V15z"></path>
      </svg>
    `);
  });
});
