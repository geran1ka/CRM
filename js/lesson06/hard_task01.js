'use strict';

const allCashbox = [
  [12, 4500], 
  [7, 3210], 
  [4, 650], 
  [3, 1250], 
  [9, 7830], 
  [1, 990], 
  [6, 13900], 
  [1, 370]
];

const getAveragePriceGoodsAlt = (arr) => {
  const newArr = arr.reduce((acc, current) =>  [acc[0] + current[0], acc[1] + current[1]]);

  return newArr.reduce((acc, item) => Math.round(item / acc));
};

const resultAlt = getAveragePriceGoodsAlt(allCashbox);
console.log('resultZlt: ', resultAlt);


