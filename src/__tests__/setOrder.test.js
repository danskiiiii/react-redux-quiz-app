import setOrder from '../helpers/setOrder';
import sum from '../helpers/sum';

describe('setOrder length', () => {
  it('should output length of array', () => {
    expect(setOrder(321).length).toEqual(321);
    expect(setOrder(3).length).toEqual(3);
    expect(setOrder(0).length).toEqual(0);
  });
});

describe('setOrder sum', () => {
  it('should output total sum of numbers in an array', () => {
    expect(sum(setOrder(7))).toEqual(21);
    expect(sum(setOrder(0))).toEqual(0);
    expect(sum(setOrder(2))).toEqual(1);
  });
});

const compareNumbers = (a, b) => a - b;

describe('setOrder sorted', () => {
  it('should output sorted array', () => {
    expect(setOrder(7).sort(compareNumbers)).toEqual([0, 1, 2, 3, 4, 5, 6]);
    expect(setOrder(2).sort(compareNumbers)).toEqual([0, 1]);
    expect(setOrder(0).sort(compareNumbers)).toEqual([]);
  });
});

test('setOrder contains', () => {
  expect(setOrder(15)).toContain(4);
  expect(setOrder(15)).toContain(0);
  expect(setOrder(15)).toContain(14);
});
