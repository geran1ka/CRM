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
const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
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

const start = (game, obj) => {
  const sliceStr = str => str.slice(0, 1);

  const comp = sliceStr(FIGURES_RUS[getRandomIntInclusive(0, 2)]);
  const getUserResponse = () => {
    const userResponse = prompt(`${FIGURES_RUS}: `);
    if (userResponse === null) return false;
    const userResponseAlt = sliceStr(userResponse).toLowerCase();
    if (FIGURES_RUS.find(item => item.slice(0, 1) === userResponseAlt)) {
      return userResponseAlt;
    } else {
      return getUserResponse();
    }
  };

  const user = getUserResponse();
  if (!user) return obj;
  console.log(`user : ${user} | comp : ${comp}`);
  if (user === 'н' && comp === 'б') {
    alert(`
            Компьютер: ${comp}
            Вы: ${user}
            'Победил игрок'
    `);
    obj.player++;
    game = false;
  } else if (user === 'к' && comp === 'н') {
    alert(`
            Компьютер: ${comp}
            Вы: ${user}
            'Победил игрок'
    `);
    obj.player++;
    game = false;
  } else if (user === 'б' && comp === 'к') {
    alert(`
            Компьютер: ${comp}
            Вы: ${user}
            'Победил игрок'
    `);
    obj.player++;
    game = false;
  } else if (user === 'б' && comp === 'н') {
    alert(`
            Компьютер: ${comp}
            Вы: ${user}
            'Победил комп'
    `);
    obj.computer++;
    game = false;
  } else if (user === 'н' && comp === 'к') {
    alert(`
            Компьютер: ${comp}
            Вы: ${user}
            'Победил комп'
    `);
    game = false;
    obj.computer++;
  } else if (user === 'к' && comp === 'б') {
    alert(`
            Компьютер: ${comp}
            Вы: ${user}
            'Победил комп'
    `);
    game = false;
    obj.computer++;
  } else {
    console.log('Ничья');
    game = false;
  }
  if (!game) {
    const game = confirm('Еще');
    if (game) return start(game, obj);
  }
  return obj;
};


const res = start(game, result);
console.log('res: ', res);
console.log(`игрок ${result.player} \\ компьютен ${result.computer}`);
