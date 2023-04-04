'use strict';
const arrayNumber = [];

const randomNumber = () => Math.round(Math.random() * 10);

const getArrayRandomNumber = arr => {
  if (arr.reduce((acc, item) => acc + item, 0) >= 50) return [...arr];

  return getArrayRandomNumber([...arr, randomNumber()]);
};

const result = getArrayRandomNumber(arrayNumber);
console.log('arrayNumber: ', arrayNumber);
console.log('result: ', result);

console.log(result.reduce((acc, item) => acc + item, 0));
