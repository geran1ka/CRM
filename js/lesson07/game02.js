'use strict';
const arrNumberUser = [];
let game = true;

const getUserPrompt = (message, game = 1) => {
  while(game) {
    let userPrompt = prompt(`${message}: `);

    switch (game) {
      case (userPrompt === null) :
      return null;
      
      case (Number.isNaN(Number(userPrompt))) :
        console.log('Введи число!');
        alert('Введи число!');
        break;

      default:
        return userPrompt;
    }
  }
};

const getRandomNumber =  (n, m) => {
  return (Math.round(Math.random() * (m - n)) + n);
};

let start = getUserPrompt('Введи первое число диапазона');

start === null ? game = false : start *= 1;

let end = getUserPrompt('Введи второе число диапазона', game);
;
end === null ? game = false : end *= 1;
end < start ? [start, end] = [end, start] : '';

const randomNumber = getRandomNumber(start, end);
const numberOfAttempts = Math.ceil((end - start) * 0.3);

while (game) {
  let item = getUserPrompt('Введите Ваш вариант загаднного числа');

  switch (game) {
    case (item === null) :
      game = false;
      console.log('Игра завершена пользователем!');
      alert('Игра завершена пользователем!');
      break;

    case (arrNumberUser.includes(+item)) :
      console.log('Это число вы уже вводили');
      alert('Это число вы уже вводили');
      continue;

    case (+item < start || +item > end) :
      console.log('Это число за пределами указанного Вами диапазона');
      alert('Это число за пределами указанного Вами диапазона');
      break;

    case (+item === randomNumber) : 
      arrNumberUser.push(+item);
      game = false;
      console.log("Правильно");
      alert("Правильно");
      console.log(`Вы угадали число с ${arrNumberUser.length} попытки!`);
      alert(`Вы угадали число с ${arrNumberUser.length} попытки!`);
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

  if (arrNumberUser.length === numberOfAttempts && game) {
    game = false;
    console.log('Вы потротатили все свои попытки. Игра окончена!');
    alert(`Вы потротатили все свои попытки. Игра окончена!`)
  }
  console.log('----');
}
console.log("Если хочешь попробовать снова, то нажми F5");
alert("Если хочешь попробовать снова, то нажми F5");

