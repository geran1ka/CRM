'use strict';

//Вариант 1

const randomGenerateArray =  (length, n = 0, m = 100, str) => {
  const arr = [...new Array(length)].map((key) => {
    if (m < n) [n, m] = [m, n];
    let item = (Math.round(Math.random() * (m - n)) + n)
    switch (str) {
      case 'even': 
        return item % 2 === 0 ? item : item + 1;
      case 'odd': 
        return item % 2 === 0 ? item + 1 : item;
      default:
        return item;
    } 
  });

  return arr;
};
const result = randomGenerateArray(5, 5, -10, 'even');
console.log('result: ', result);


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

const resultAlt = randomGenerateArrayAlt(5, -15, -25, 'odd');
console.log('resultAlt: ', resultAlt);