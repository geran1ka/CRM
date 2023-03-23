'use strict';

const getModifiedString = (string) => {
  let modifiedString = string.toLowerCase();
  modifiedString = modifiedString.slice(0,1).toUpperCase() + modifiedString.slice(1);
  return modifiedString;
}

const result = getModifiedString('пРИВЕТ МИР');
console.log('result: ', result);

//Вариант 2
const getModifiedStringAlt = (str) => {
  let modifiedString = str.toLowerCase();
  return modifiedString.replace(modifiedString.charAt(0), modifiedString.charAt(0).toUpperCase());
}

const resultAlt = getModifiedStringAlt('пРиВеТ МиР');
console.log('resultAlt: ', resultAlt);




