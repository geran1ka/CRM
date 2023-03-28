'use strict';
//Задача №1Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».То есть дефисы удаляются, а все слова после них получают заглавную букву.
/*
const camelize = (str) => {
  return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}

const result = camelize("background-color");
console.log('result: ', result);
*/
//Задача №2
/*Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

Функция должна возвращать новый массив и не изменять исходный.*/
/*
let arr = [5, 3, 8, 1];

const filterRange = (arr, start, end) => {
  const newArr = [];
  arr.map((item) => {
    if(item >= start && item <= end) {
      newArr.push(item);
    }
  })
  return newArr;
}

let filtered = filterRange(arr, 1, 4);
console.log('filtered: ', filtered);
*/

let arr = [5, 3, 8, 1];

const filterRangeInPlace = (arr, start, end) => {
  for (let i = 0; i < arr.length; ++i) {
    let item = arr[i];
    if(item < start || item > end) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

let filtered = filterRangeInPlace(arr, 2, 5);
console.log('filtered: ', filtered);
