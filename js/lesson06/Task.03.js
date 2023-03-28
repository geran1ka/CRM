'use strict';

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix  = (arr, prefix) => {
  return arr.map((item) => `${prefix} ${item}`);
}

const result = addPrefix(names, 'Mr');
console.log('result: ', result);

