import testUtils from '~~/lib/tests/testUtils';
import user from './user';

describe('user', () => {
  it('renders properly', () => {
    expect.hasAssertions();
    expect(testUtils.htmlFactory(user)).toMatchInlineSnapshot(`
      <svg version="1.1" id="User" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" enable-background="new 0 0 20 20" xml:space="preserve" class="h-5 w-5 inline mr-3 fill-current">
        <path d="M7.725,2.146c-1.016,0.756-1.289,1.953-1.239,2.59C6.55,5.515,6.708,6.529,6.708,6.529 s-0.313,0.17-0.313,0.854C6.504,9.1,7.078,8.359,7.196,9.112c0.284,1.814,0.933,1.491,0.933,2.481c0,1.649-0.68,2.42-2.803,3.334 C3.196,15.845,1,17,1,19v1h18v-1c0-2-2.197-3.155-4.328-4.072c-2.123-0.914-2.801-1.684-2.801-3.334c0-0.99,0.647-0.667,0.932-2.481 c0.119-0.753,0.692-0.012,0.803-1.729c0-0.684-0.314-0.854-0.314-0.854s0.158-1.014,0.221-1.793c0.065-0.817-0.398-2.561-2.3-3.096 c-0.333-0.34-0.558-0.881,0.466-1.424C9.439,0.112,8.918,1.284,7.725,2.146z"></path>
      </svg>
    `);
  });
});
