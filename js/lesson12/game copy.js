'use strict';
/*
(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getFigure = (lang) => undefined;
  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    const lang = language === 'EN' || language === 'ENG' ?
      FIGURES_ENG : FIGURES_RUS;

    return function start() {};
  };

  // window.RPS = game;
})();
*/
/*
const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
const lang = ['камень', 'ножницы', 'бумага'];
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const game = true;
const result = {
  player: 0,
  computer: 0,
};

const start = (game, obj, lang) => {
  // функция оставляет только первый символ
  const sliceStr = str => str.slice(0, 1);
  const strLower = str => str.toLowerCase();
  const findCharArray = (arr, char) =>
    arr.find(item => sliceStr(item) === char);
  /*
  if (userResponse === null) return false;
  if (sliceStr(findCharArray(FIGURES_RUS, userResponse)) === userResponse) {
    return userResponse;
  } else {
    return getUserResponse();
*/
/*
  const getUserResponse = (arr) => {
    let userResponse = prompt(`${arr}: `);
    if (userResponse === null) {
      const user = confirm(`Вы точно хотите прервать игру`);
      console.log('user: ', user);
      return !user ? getUserResponse(arr) : false;
    } else {
      userResponse = strLower(sliceStr(userResponse));
    }
    return findCharArray(arr, userResponse) ?
      userResponse : getUserResponse(arr);
  };

  const winner = (player, comp, win) => {
    alert(`
    Компьютер: ${comp}
    Вы: ${player}
    Победил ${win}
    `);
  };

  // Выбор компьютера
  const comp = sliceStr(lang[getRandomIntInclusive(0, 2)]);
  console.log('comp: ', comp);
  // Выбо игрока
  const user = getUserResponse(lang);
  console.log('user: ', user);
  if (!user) return obj;
  console.log(`user : ${user} | comp : ${comp}`);
  switch (game) {
    case (user === 'н' && comp === 'б'):
      winner(user, comp, 'игрок');
      obj.player++;
      game = false;
      break;
    case (user === 'к' && comp === 'н'):
      winner(user, comp, 'игрок');
      obj.player++;
      game = false;
      break;
    case (user === 'б' && comp === 'к'):
      winner(user, comp, 'игрок');
      obj.player++;
      game = false;
      break;
    case (user === 'б' && comp === 'н'):
      winner(user, comp, 'компьютер');
      obj.computer++;
      game = false;
      break;
    case (user === 'н' && comp === 'к'):
      winner(user, comp, 'компьютер');
      obj.computer++;
      game = false;
      break;
    case (user === 'к' && comp === 'б'):
      winner(user, comp, 'компьютер');
      obj.computer++;
      game = false;
      break;
    default:
      console.log('Ничья');
      game = false;
      break;
  }
  if (!game) {
    const game = confirm('Еще');
    if (game) return start(game, obj, lang);
  }
  return obj;
};


const res = start(game, result, lang);
console.log('res: ', res);
console.log(`игрок ${result.player} \\ компьютен ${result.computer}`);
*/