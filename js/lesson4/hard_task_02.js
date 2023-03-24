'use strict';

const getMinNumber = (a, b) => {
  a > b || a;
  a < b || (a = b);
  return a;
}

const getMaxNumber = (a, b) => {
  a < b || a;
  a > b || (a = b);
  return a;
}

const minimun = getMinNumber(150, 25);
console.log('minimun: ', minimun);

const maximum = getMaxNumber(150, 25);
console.log('maximum: ', maximum);