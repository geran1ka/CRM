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

const getAveragePriceGoods = (arr) => {
  let itemPrice = 0;
  for (let keys of arr) {
    if(keys.length !== 2) {
      continue;
    }
    itemPrice += keys[1] / keys[0];
  }
  return itemPrice = Math.round(itemPrice * 100 / allCashbox.length) / 100;
};

const result = getAveragePriceGoods(allCashbox);
console.log('result: ', result);

//Вариант 2
const getAveragePriceGoodsAlt = (arr) => {

  let itemPrice = arr.reduce((acc, current) =>  acc + current[1]/current[0], 0);

  return itemPrice = Math.round(itemPrice * 100 / allCashbox.length) / 100;

};

const resultAlt = getAveragePriceGoodsAlt(allCashbox);
console.log('resultZlt: ', resultAlt);

