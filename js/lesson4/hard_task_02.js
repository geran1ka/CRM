'use strict';

const getMinNumber = (numberOne, numberTwo) => {
  return (numberOne + numberTwo - Math.abs(numberOne - numberTwo)) / 2;
}

const getMaxNumber = (numberOne, numberTwo) => {
  return (numberOne + numberTwo + Math.abs(numberOne - numberTwo)) / 2;
}

const result = getMinNumber(10, -50);
console.log('result: ', result);

const resultTwo = getMaxNumber(10, 91);
console.log('resultTwo: ', resultTwo);