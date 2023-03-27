'use strict';

const randomGenerateArrayAlt =  (length, n = 0, m = 100, str) => {
  const arr = [];
  if (m < n) [n, m] = [m, n];
  for (let i = 0; i < length; ++i) {
      let item = (Math.round(Math.random() * (m - n)) + n);

      switch (str) {
        case 'even': 
          arr.push(item % 2 === 0 ? item : item + 1);
          break;
        case 'odd': 
          arr.push(item % 2 === 0 ? item + 1 : item);
          break;
        default:
          arr.push(item);
          break;
      }
    }
  return arr;
};

const resultAlt = randomGenerateArrayAlt(5, -15, -25);
console.log('resultAlt: ', resultAlt);