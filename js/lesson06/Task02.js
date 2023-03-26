'use strict';
const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
  let summ = 0;
  for (let key of arr) {
    summ += key;
  }
  return Math.floor(summ/arr.length)
}

const result = getAverageValue(allCashbox);
console.log('result: ', result);
