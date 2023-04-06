/* eslint-disable no-constant-condition */
'use strict';

(() => {
  const gameLaunge = {
    'ENG': {
      gameFigures: ['rock', 'scissors', 'paper'],
      player: 'player',
      computer: 'computer',
      more: 'More',
      stopPlaying: 'Are you sure you want to stop playing',
      you: 'You',
      win: 'Won',
      draw: 'Draw',
      resultGame: 'Game results',
    },
    'DEU': {
      gameFigures: ['stein', 'schere', 'papier'],
      player: 'spieler',
      computer: 'computer',
      more: 'Noch',
      stopPlaying: 'Möchten Sie wirklich aufhören zu spielen?',
      you: 'Du',
      win: 'Gewonnen',
      draw: 'Ziehen',
      resultGame: 'Spielergebnisse',
    },
    'RUS': {
      gameFigures: ['камень', 'ножницы', 'бумага'],
      player: 'игрок',
      computer: 'компьютер',
      more: 'Ещё',
      stopPlaying: 'Вы точно хотите прервать игру',
      you: 'Вы',
      win: 'Победил',
      draw: 'Ничья',
      resultGame: 'Результаты игры',
    },
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = (language) => {
    const result = {
      _player: 0,
      _computer: 0,
      get player() {
        return this._player;
      },
      set player(value) {
        return this._player += value;
      },
      get computer() {
        return this._computer;
      },
      set computer(value) {
        return this._computer += value;
      },
    };

    // функция запроса выбора языка игры
    const getFigure = (language) => {
      if (!language) return 'RUS';

      if (language.trim().toUpperCase() === 'EN' ||
        language.trim().toUpperCase() === 'ENG') return 'ENG';

      if (language.trim().toUpperCase() === 'DE' ||
        language.trim().toUpperCase() === 'DEU') return 'DEU';

      return 'RUS';
    };

    return function start() {
      // Язык программы
      const lang = getFigure(language);
      // Переменная для выбора количества символов в среза в функции sliceStr()
      const countSlice = undefined;
      // Функция среза
      const sliceStr = (str) => str.trim().slice(0, countSlice);
      // функция поиска индекса элемента в массиве
      const findCharArray = (arr, word) =>
        arr.findIndex(item =>
          sliceStr(item, countSlice) === sliceStr(word, countSlice)
              .toLowerCase());
      // функция запроса ввода данных от игрока
      const getUserResponse = (arr) => {
        const userResponse = prompt(`${arr}: `);
        if (userResponse === null) {
          const stopPlay = confirm(`${gameLaunge[lang].stopPlaying}`);
          return !stopPlay ? getUserResponse(arr) : false;
        }
        return !(findCharArray(arr, userResponse) === -1) ?
        findCharArray(arr, userResponse) : getUserResponse(arr);
      };
      // Выбор компьютера
      const comp = getRandomIntInclusive(0, 2);
      // Выбор игрока
      const user = getUserResponse(gameLaunge[lang].gameFigures);
      // функция вывода результата
      const winner = (winner) => {
        alert(`
          ${gameLaunge[lang].computer}: ${gameLaunge[lang].gameFigures[comp]}
          ${gameLaunge[lang].player}: ${gameLaunge[lang].gameFigures[user]}
          ${gameLaunge[lang].win}: ${gameLaunge[lang][winner]}
          `);
      };
      // Проверка на выход из игры
      if (!user && user !== 0) return result;
      console.log(`user : ${user} | comp : ${comp}`);
      // Определение победителя. Спасибо Кириллу за подсказки.
      switch (true) {
        case (user === comp):
          console.log('ничья');
          break;
        case (comp === (user + 1) % 3):
          winner('player');
          result.player = 1;
          break;
        default:
          winner('computer');
          result.computer = 1;
          break;
      }
      // Запрос по окончании игры: еще?. В случае отказа вывод результатов
      return confirm(`${gameLaunge[lang].more}`) ? start() :
      alert(`${gameLaunge[lang].resultGame}: 
      ${gameLaunge[lang].player}: ${result.player}
      ${gameLaunge[lang].computer}: ${result.computer}`);
    };
  };

  window.RPS = game;
})();
