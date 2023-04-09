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

  const userOdd = () => (confirm(`Число четное?: `) ? 0 : 1);

  // функция для хода компьютера
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  // переменная определяет чей ход: четное число - загадывает игрок
  // нечетное число - загадывает бот
  let countStart = 0;

  const game = () => {
    // вывод стартовой информации
    if (countStart === 0) {
      alert(`Старт игры
      ==================
      Количествво шариков
      Игрок: ${result.scopePlayer}
      Бот: ${result.scopeBot}`);
    }

    if (countStart % 2 === 0) {
    // Пользователь загадывает количество шариков
      const user = userResponse(result.scopePlayer);
      if (!user) return alertWinner('Игра завершена пользователем!');
      // Бот отгадывает четное или не четное количество шариков
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
    } else {
      // Загадывает число бот
      const computerOne = getRandomIntInclusive(1, result.scopeBot);
      console.log('computer: ', computerOne);

      const userOne = userOdd();

      switch (true) {
        case (computerOne % 2 === userOne):
          result.scopePlayer = +computerOne;
          result.scopeBot = -computerOne;
          alertWinner('Вы угадали');
          break;
        default:
          result.scopePlayer = -computerOne;
          result.scopeBot = +computerOne;
          alertWinner('Вы не угадали');
          break;
      }
    }
    countStart++;
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
