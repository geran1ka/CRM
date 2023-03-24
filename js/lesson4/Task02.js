'use strict';

const getModifiedString = string => {
  const modifiedString = string.trim().toLowerCase();
  return modifiedString[0].toUpperCase() + modifiedString.slice(1);
}

const result = getModifiedString('  пРИВЕТ МИР');
console.log('result: ', result);

//Вариант 2
const getModifiedStringAlt = string => {
  let modifiedString = string.trim().toLowerCase();
  return modifiedString.replace(modifiedString[0], modifiedString[0].toUpperCase());
}

const resultAlt = getModifiedStringAlt('  пРиВеТ МиР');
console.log('resultAlt: ', resultAlt);




