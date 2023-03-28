'use strict';
const allCashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (arr) => {
  return Math.round(allCashbox.reduce((acc, item) => acc + item, 0) / allCashbox.length);
}

const result = getAverageValue(allCashbox);
console.log('result: ', result);
