/* eslint-disable no-constant-condition */
'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const gameLaunge = {
    player: ['player', 'игрок'],
    computer: ['computer', 'компьютер'],
    more: ['More', 'Ещё'],
    stopPlaying: ['Are you sure you want to stop playing',
      'Вы точно хотите прервать игру'],
    you: ['You', 'Вы'],
    win: ['Won', 'Победил'],
    draw: ['Draw', 'Ничья'],
    resultGame: ['Game results', 'Результаты игры'],
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  // функция запроса выбора языка игры
  const getFigure = (lang) => confirm(`Ok - English, cancel - Russia`);
  window.languageGame = getFigure;

  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };

    const lang = language === true ? FIGURES_ENG : FIGURES_RUS;
    const keyLaunge = language === true ? 0 : 1;
    console.log('lang: ', keyLaunge);

    return function start() {
      // функция оставляет только первый символ
      const sliceStr = str => str.slice(0, 1);
      // функция делает все мимволы строчными
      const strLower = str => str.toLowerCase();
      // функция поиска элемента в массиве по первому символу
      const findCharArray = (arr, char) =>
        arr.find(item => sliceStr(item) === char);
      // функция запроса данных от игрока
      const getUserResponse = (arr) => {
        let userResponse = prompt(`${arr}: `);
        if (userResponse === null) {
          const user = confirm(`${gameLaunge.stopPlaying[keyLaunge]}`);
          return !user ? getUserResponse(arr) : false;
        } else {
          userResponse = strLower(sliceStr(userResponse));
        }
        return findCharArray(arr, userResponse) ?
            userResponse : getUserResponse(arr);
      };
      // Выбор компьютера
      const comp = sliceStr(lang[getRandomIntInclusive(0, 2)]);
      // Выбор игрока
      const user = getUserResponse(lang);
      // функция вывода резкльтата
      const winner = (win) => {
        alert(`
          ${gameLaunge.computer[keyLaunge]}: ${findCharArray(lang, comp)}
          ${gameLaunge.player[keyLaunge]}: ${findCharArray(lang, user)}
          ${gameLaunge.win[keyLaunge]}: ${win}
          `);
      };
      // Поверка на выход игрока
      if (!user) return result;
      console.log(`user : ${user} | comp : ${comp}`);
      // Определение победителя
      switch (true) {
        case (user === `${sliceStr(lang[1])}` &&
          comp === `${sliceStr(lang[2])}`):
          winner(`${gameLaunge.player[keyLaunge]}`);
          result.player++;
          break;
        case (user === `${sliceStr(lang[0])}` &&
          comp === `${sliceStr(lang[1])}`):
          winner(`${gameLaunge.player[keyLaunge]}`);
          result.player++;
          break;
        case (user === `${sliceStr(lang[2])}` &&
          comp === `${sliceStr(lang[0])}`):
          winner(`${gameLaunge.player[keyLaunge]}`);
          result.player++;
          break;
        case (user === `${sliceStr(lang[2])}` &&
          comp === `${sliceStr(lang[1])}`):
          winner(`${gameLaunge.computer[keyLaunge]}`);
          result.computer++;
          break;
        case (user === `${sliceStr(lang[1])}` &&
          comp === `${sliceStr(lang[0])}`):
          winner(`${gameLaunge.computer[keyLaunge]}`);
          result.computer++;
          break;
        case (user === `${sliceStr(lang[0])}` &&
          comp === `${sliceStr(lang[2])}`):
          winner(`${gameLaunge.computer[keyLaunge]}`);
          result.computer++;
          break;
        default:
          winner(`${gameLaunge.draw[keyLaunge]}`);
          break;
      }
      // условие перезапуска
      if (true) {
        const continuePlay = confirm(`${gameLaunge.more[keyLaunge]}`);
        if (continuePlay) return start();
      }
      alert(`${gameLaunge.resultGame[keyLaunge]}: 
      ${gameLaunge.player[keyLaunge]}: ${result.player}
      ${gameLaunge.computer[keyLaunge]}: ${result.computer}`);
    };
  };

  window.RPS = game;
})();
