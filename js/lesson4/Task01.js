'use strict';

const getConverEvroToRuble = (money) => {
  return money * 1.2 * 73;
}

const result = getConverEvroToRuble(100);
console.log('result: ', result);

//Алтернативный конвертор с возможностью измененения курса
const getConverEvroToRubleAlt = (money, evroDollar = 1.2, dollarRuble = 73) => {
  return money * evroDollar * dollarRuble;
}

const resultAlt = getConverEvroToRubleAlt(100, 1, 75);
console.log('resultAlt: ', resultAlt);