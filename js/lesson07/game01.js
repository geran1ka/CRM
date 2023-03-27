'use strict';

const getRandomNumber =  () => {
  return Math.ceil(Math.random() * 10);
}

const getUserNumber = () => {
  let userNumber;
  while (!userNumber) {
    userNumber = prompt('Введите Ваш вариант загаднного числа: ');

    if(userNumber === null) {
      return userNumber;
    };
  
    userNumber *= 1;

    if(Number.isNaN(userNumber)) {
      console.log('Введи число!');
      alert('Введи число!');
    }
  }
  return userNumber;
};

const randomNumber = getRandomNumber();
let game = true;
let count = 0;

while (game) {
  let item = getUserNumber();
    
  switch (game) {
    case (item === null) :
      game = false;
      console.log('Игра завершена пользователем!');
      break;
      

    case (item < randomNumber) :
      console.log('Больше');
      break;
    
    case (item > randomNumber) :
      console.log('Меньше');
      break;

    case (item === randomNumber) : 
      console.log("Правильно");
      game = false;
      break;
  };
  count += 1;


  console.log('----');
}
console.log(`Вы угадали число с ${count} попытки!`);

console.log("Если хочешь попробовать снова, то нажми F5");




