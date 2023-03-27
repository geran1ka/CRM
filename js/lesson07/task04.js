'use strict';
const getArrayLeapYear = (n = 1984, m = 2022) => {
  const arrLeapYear = [];
  if (m < n) [n, m] = [m, n];
  
  for (let i = n; i <= m; ++i) {
    if(new Date(i, 1, 29).getDate() === 29) {
      arrLeapYear.push(i);
    }
  }
  return arrLeapYear;
};

const result = getArrayLeapYear(99, -99);
console.log('result: ', result);

