'use strict';

const getRandomNumber =  () => {
  return Math.ceil(Math.random() * 10);
}
/*
const getUserNumber = () => {
  let userNumber;
  while (!userNumber) {
    userNumber = prompt('Введите Ваш вариант загаднного числа: ');

    if(userNumber === null) {
      return userNumber;
    };

    if(Number.isNaN(Number(userNumber)) || userNumber === '') {
      console.log('Введи число!');
      alert('Введи число!');
    }
  }
  return Number(userNumber);
};
*/
const randomNumber = getRandomNumber();
let game = true;
let count = 1;

while (game) {
  let item = prompt('Введите Ваш вариант загаднного числа: ');
    
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
      
    case (item < randomNumber) :
      console.log('Больше');
      alert('Больше');
      break;
    
    case (item > randomNumber) :
      console.log('Меньше');
      alert('Меньше');
      break;

    case (+item === randomNumber) : 
      console.log("Правильно");
      alert("Правильно");
      console.log(`Вы угадали число с ${count} попытки!`);
      alert(`Вы угадали число с ${count} попытки!`);
      game = false;
      break;
  };
  count += 1;
  console.log('count: ', count);
  console.log('----');
}

console.log("Если хочешь попробовать снова, то нажми F5");
alert("Если хочешь попробовать снова, то нажми F5");




