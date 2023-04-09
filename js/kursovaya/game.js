/* eslint-disable no-constant-condition */
'use strict';

(() => {
  const gameLaunge = {
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

    // Язык программы
    const lang = 'RUS';

  function start() {
      // функция запроса ввода данных от игрока
      const getUserResponse = (arr) => {
        let userResponse = prompt(`${arr}: `);
        if (userResponse === null) {
          const stopPlay = confirm(`${gameLaunge[lang].stopPlaying}`);
          return !stopPlay ? getUserResponse(arr) : false;
        }
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
      // Определение победителя. Спасибо Кириллу за подсказки.
      switch (true) {
        case (user === comp):
          logWin('draw');
          return start();
        case (comp === (user + 1) % 3):
          logWin('player');
          return 1;
        default:
          logWin('computer');
          return 2;
      }
      console.log('1');
    };
let res = start()
console.log('res: ', res);
  })();
