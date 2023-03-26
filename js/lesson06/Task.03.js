'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];
//Вариант 1
const addPrefix  = (arr, prefix) => {
  const newArr = [];
  for (let key of names) {
    newArr.push(`${prefix} ${key}`);
  }
  return newArr;
}

const result = addPrefix(names, 'Mr')
console.log('result: ', result);

//Вариант 2
const addPrefixAlt  = (arr, prefix) => {
  for (let i = 0; i<arr.length; ++i){
    arr[i] = (`${prefix} ${arr[i]}`);
  }
  return arr;
}
const resultAlt = addPrefixAlt(names, 'Mr')
console.log('resultAlt: ', resultAlt);

names.forEach((item, index, array) => {
  console.log(item, index, array);
})