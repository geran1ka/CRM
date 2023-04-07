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
        this._player += value;
      },
      get computer() {
        return this._computer;
      },
      set computer(value) {
        this._computer += value;
      },
    };

    // функция запроса выбора языка игры
    const getLang = (language) => {
      switch (language?.trim().toUpperCase()) {
        case 'EN':
        case 'ENG':
          return 'ENG';
        case 'DE':
        case 'DEU':
          return 'DEU';
        default:
          return 'RUS';
      }
    };

    // Язык программы
    const lang = getLang(language);

    return function start() {
      // функция запроса ввода данных от игрока
      const getUserResponse = (arr) => {
        let userResponse = prompt(`${arr}: `);
        if (userResponse === null) {
          const stopPlay = confirm(`${gameLaunge[lang].stopPlaying}`);
          return !stopPlay ? getUserResponse(arr) : false;
        }
        /*
        // Строгая проверка
        const index = arr.indexOf(userResponse?.trim().toLocaleLowerCase);
        return index !== -1 ? index : getUserResponse(arr);
        */
        // Нестрогая проверка
        userResponse = userResponse.trim().toLocaleLowerCase();
        const [found, isNotUniqe] = arr.filter(item =>
          item.slice(0, userResponse.length) === userResponse);

        return found && !isNotUniqe ? arr.indexOf(found) : getUserResponse(arr);
      };
      // Выбор компьютера
      const comp = getRandomIntInclusive(0, 2);
      // Выбор игрока
      const user = getUserResponse(gameLaunge[lang].gameFigures);
      // функция вывода результата
      const logWin = (winner) => {
        alert(`
          ${gameLaunge[lang].computer}: ${gameLaunge[lang].gameFigures[comp]}
          ${gameLaunge[lang].player}: ${gameLaunge[lang].gameFigures[user]}
          ${gameLaunge[lang].win}: ${gameLaunge[lang][winner]}
          `);
      };
      // Проверка на выход из игры
      if (!user && user !== 0) {
        return alert(`${gameLaunge[lang].resultGame}: 
          ${gameLaunge[lang].player}: ${result.player}
          ${gameLaunge[lang].computer}: ${result.computer}`);
      }
      console.log(`
        user : ${gameLaunge[lang].gameFigures[user]} |
        comp : ${gameLaunge[lang].gameFigures[comp]}`);
      // Определение победителя. Спасибо Кириллу за подсказки.
      switch (true) {
        case (user === comp):
          logWin('draw');
          return start();
        case (comp === (user + 1) % 3):
          logWin('player');
          result.player = 1;
          break;
        default:
          logWin('computer');
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
