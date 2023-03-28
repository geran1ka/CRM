'use strict';

//Вариант 1
const randomGenerateArray =  length => {
  return [...new Array(length)].map(() => Math.round(Math.random() * 100))
};
const result = randomGenerateArray(5);
console.log('result: ', result);

//Вариант 2
const randomGenerateArrayAlt =  (length) => {
  const arr = [];
  for (let i = 0; i < length; ++i) {
    arr.push(Math.round(Math.random() * 100))
  }
  return arr;
};

const resultAlt = randomGenerateArrayAlt(5);
console.log('resultAlt: ', resultAlt);







