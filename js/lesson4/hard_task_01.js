'use strict';

const getNOD = (numberOne, numberTwo) => {
  while (numberOne && numberTwo) {
    if (numberOne > numberTwo) {
      numberOne %= numberTwo;
    } else {
      numberTwo %= numberOne;
    }
  }
  return numberOne += numberTwo;
}

const result = getNOD(15, 5);
console.log('result: ', result);