'use strict';

const isPrime = (number) => {
  let arr = [];
  for (let i = 1; i <= Math.abs(number) ; ++i) {
    if (number % i === 0) {
      arr.push(i);
    }
  }
    return arr.length <= 2 ? true : false;
}

const result = isPrime(-18)
console.log('result: ', result);


