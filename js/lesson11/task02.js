'use strict';
const arrayNumber = [];
const randomNumber = () => Math.round(Math.random() * 10);
const getArrayRandomNumber = (arr) => {
  const sum = arr.reduce((acc, item) => acc + item, 0);

  if (sum < 50) {
    arr.push(randomNumber());
    getArrayRandomNumber(arr);
  }

  return arr;
};

const result = getArrayRandomNumber(arrayNumber);
console.log('result: ', result);

console.log(result.reduce((acc, item) => acc + item, 0));
