'use strict';
let start = +prompt(`Введи первое число диапазона: `);
let end = +prompt(`Введи второе число диапазона: `)
let game = true;
let count = 0;

[start, end].includes(NaN) ? [start, end] = [0, 100] : end < start ? [start, end] = [end, start] : '';
console.log('[start, end]: ', [start, end]);

const getRandomNumber =  (n, m) => {
  return (Math.round(Math.random() * (m - n)) + n);
}
const randomNumber = getRandomNumber(start, end);
const numberOfAttempts = Math.ceil((end - start) * 0.3);
const arrNumberUser = [];

while (game) {

  let item = prompt('Введите Ваш вариант загаднного числа: ');
  count++;

  switch (game) {
    case (item === null) :
      game = false;
      console.log('Игра завершена пользователем!');
      alert('Игра завершена пользователем!');
      break;

    case (Number.isNaN(Number(item)) || item === '') :
      console.log('Введи число!');
      alert('Введи число!');
      count -= 1;
      break;

    case (arrNumberUser.includes(+item)) :
      console.log('Это число вы уже вводили');
      alert('Это число вы уже вводили');
      count -= 1;
      continue;

    case (+item === randomNumber) : 
      console.log("Правильно");
      alert("Правильно");
      console.log(`Вы угадали число с ${count} попытки!`);
      alert(`Вы угадали число с ${count} попытки!`);
      game = false;
      break;
      
    case (count === numberOfAttempts) :
      game = false;
      console.log('Вы потротатили все свои попытки. Игра окончена!');
      alert(`Вы потротатили все свои попытки. Игра окончена!`)
      break;

    case (item < randomNumber) :
      arrNumberUser.push(+item);
      console.log('Больше');
      alert('Больше');
      break;
    
    case (item > randomNumber) :
      arrNumberUser.push(+item);
      console.log('Меньше');
      alert('Меньше');
      break;
  };
  console.log('----');
}
console.log("Если хочешь попробовать снова, то нажми F5");
alert("Если хочешь попробовать снова, то нажми F5");




