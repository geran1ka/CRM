'use strict';

const isPrime = (number) => {
  let arr = [];
  if (number < 0) return false
  for (let i = 1; i <= number ; ++i) {
    if (number % i === 0) {
      arr.push(i);
    }
  }
    return arr.length <= 2 ? true : false;
}

const result = isPrime(-1)
console.log('result: ', result);


