import timer from './timer';

describe('timer', () => {
  it('sould delay', async () => {
    expect.hasAssertions();
    jest.spyOn(global, 'setTimeout');
    await timer.delay(10);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 10);
  });
});
