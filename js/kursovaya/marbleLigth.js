'use strict';
(() => {
  const result = {
    _player: 5,
    _bot: 5,
    get scopePlayer() {
      return this._player;
    },
    set scopePlayer(value) {
      return this._player += value;
    },
    get scopeBot() {
      return this._bot;
    },
    set scopeBot(value) {
      return this._bot += value;
    },
  };

  const alertWinner = (str) => alert(`${str}
    Игрок: ${result.scopePlayer}
    Бот: ${result.scopeBot}`);
  // функция запроса данных от игрока
  const userResponse = (max) => {
    const user = prompt(`Введите число от 1 до ${max}: `);
    if (user === null) {
      return confirm(`Вы точно хотите завершить игру?`) ?
      false : userResponse(max);
    }
    if (Number.isNaN(user) || !(user <= max && user >= 1)) {
      return userResponse(max);
    }
    return user;
  };
  // функция для хода компьютера
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let countStart = 0;

  const game = () => {
    if (countStart === 0) {
      countStart++;
      alert(`Старт игры
      ==================
      Количествво шариков
      Игрок: ${result.scopePlayer}
      Бот: ${result.scopeBot}`);
    }
    // Ход пользователя
    const user = userResponse(result.scopePlayer);
    if (!user) return alertWinner('Игра завершена пользователем!');

    // Ход бота
    const computer = getRandomIntInclusive(0, 1);
    console.log('computer: ', computer);

    // Определение победителя
    switch (true) {
      case (user % 2 === computer):
        result.scopePlayer = -user;
        result.scopeBot = +user;
        alertWinner('Бот угадал');
        break;
      default:
        result.scopePlayer = +user;
        result.scopeBot = -user;
        alertWinner('Бот не угадал');
        break;
    }

    switch (true) {
      case (result.scopePlayer <= 0):
        return alertWinner('Вы проиграли');
      case (result.scopeBot <= 0):
        return alertWinner('Бот проиграл');
      default:
        return game();
    }
  };
  window.RPS = game;
})();
