'use strict';

const allCashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370],
];

const getAveragePriceGoodsAlt = (arr) => {
  const newArr = arr.reduce(([totalCount, totalCost], [count, cost]) =>
    [totalCount + count, totalCost + cost]);

  return newArr.reduce((totalCount, totalCost) =>
    Math.round(totalCost / totalCount));
};

const resultAlt = getAveragePriceGoodsAlt(allCashbox);
console.log('resultZlt: ', resultAlt);


