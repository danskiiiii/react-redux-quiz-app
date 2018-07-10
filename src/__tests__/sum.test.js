import sum from '../helpers/sum';

describe ('sum', () => {
  it ('should output sum', () => {
    expect (sum([3,5,8])).toBe(16);
 });
});