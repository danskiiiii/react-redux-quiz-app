import setOrder from '../helpers/setOrder';
import sum from '../helpers/sum';

describe ('setOrder length', () => {
  it ('should output length of array', () => {
    expect (setOrder(321).length).toEqual(321);
 });
});

describe ('setOrder sum', () => {
    it ('should output total sum of numbers in an array', () => {
      expect (sum(setOrder(7))).toEqual(21);
   });
  });

const compareNumbers= (a, b) => a - b; 

describe ('setOrder sorted', () => {
    it ('should output sorted array', () => {
      expect (setOrder(7).sort(compareNumbers)).toEqual([0,1,2,3,4,5,6]);
   });
  });
