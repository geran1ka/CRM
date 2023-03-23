'use strict'

const modifyString = (str) => {
  let strNew = ''
  for(let i = str.length-1; i >= 0; --i){
    strNew += str[i];  
  }
  return strNew   
}

const result = modifyString('Привет мир');
console.log('result: ', result);