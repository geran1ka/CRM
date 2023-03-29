'use strict';

//Вариант 1

const randomGenerateArray =  (length, n = 0, m = 100, str) => {
  const arr = [...new Array(length)].map((key) => {
    if (m < n) [n, m] = [m, n];
    let item = (Math.round(Math.random() * (m - n)) + n)
    switch (str) {
      case 'even':
        return item % 2 === 0 ? item : item < m ? item + 1 : item - 1;
      case 'odd': 
        return item % 2 !== 0 ? item : item < m ? item + 1 : item - 1;
      default:
        return item;
    } 
  });

  return arr;
};
const result = randomGenerateArray(100, 11, -11, 'even');
console.log('result: ', result);
