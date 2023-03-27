'use strict';

const randomGenerateArrayAlt =  (length, n = 0, m = 100) => {
  const arr = [];
  if (m < n) [n, m] = [m, n];
  for (let i = 0; i < length; ++i) {
    arr.push(Math.round(Math.random() * (m - n)) + n);
  }
  return arr;
};

const resultAlt = randomGenerateArrayAlt(5, -15, 50);
console.log('resultAlt: ', resultAlt);


