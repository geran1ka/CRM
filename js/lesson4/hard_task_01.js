'use strict';

const getNOD = (a, b) => {
  while (a && b) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a += b;
}

const result = getNOD(15, 5);
console.log('result: ', result);

//Вариант 2 рекурсия
const getNODAlt = (a, b) => !b ? a : getNOD(b, a % b);

const resultAlt = getNODAlt(10, 5);
console.log('resultAlt: ', resultAlt);
