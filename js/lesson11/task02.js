'use strict';
const arrayNumber = [];
const randomNumber = () => Math.round(Math.random() * 10);
const getArrayRandomNumber = (arr) => {
  const array = [...arr];
  const sum = array.reduce((acc, item) => acc + item, 0);
  if (sum < 50) {
    array.push(randomNumber());
    return getArrayRandomNumber(array);
  }
  return array;
};

const result = getArrayRandomNumber(arrayNumber);
console.log('arrayNumber: ', arrayNumber);
console.log('result: ', result);

console.log(result.reduce((acc, item) => acc + item, 0));
