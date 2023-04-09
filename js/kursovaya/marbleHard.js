'use strict';
(() => {
  const result = {
    _player: 5,
    _bot: 5,
    get scopePlayer() {
      return this._player;
    },
    set scopePlayer(value) {
      this._player += value;
      switch (true) {
        case (this._player < 0):
          this._player = 0;
          break;
          case (this._player >= 10):
            this._player = 10;
            break;
          default:
            this._player;
            break;
      }
    },
    get scopeBot() {
      return this._bot;
    },
    set scopeBot(value) {
      this._bot += value;
      switch (true) {
        case (this._bot < 0):
          this._bot = 0;
          break;
          case (this._bot >= 10):
            this._bot = 10;
            break;
          default:
            this._bot;
            break;
      }
    },
    set resetScope(value) {
      this._bot = 5;
      this._player = 5;
    }
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
  // Определение первого хода в игре камень ножницы бумага
  const game = () => {
    const gameFigures = ['камень', 'ножницы', 'бумага'];
    function getWhoGoesFirst() {
        // функция запроса ввода данных от игрока
        const getUserResponseK = (arr) => {
          let userResponse = prompt(`${arr}: `);
          if (userResponse === null) {
            const stopPlay = confirm(`Вы точно хотите завершить игру?`);
            return !stopPlay ? getUserResponseK(arr) : false;
          }
          // Нестрогая проверка
          userResponse = userResponse.trim().toLocaleLowerCase();
          const [found, isNotUniqe] = arr.filter(item =>
            item.slice(0, userResponse.length) === userResponse);

          return found && !isNotUniqe ? arr.indexOf(found) : getUserResponseK(arr);
        };
        // Выбор компьютера
        const comp = getRandomIntInclusive(0, 2);
        // Выбор игрока
        const user = getUserResponseK(gameFigures);
        // Проверка на завершение игры от пользоват
        if (!user && user !== 0) return false
        // функция вывода результата
        const logWin = (winner) => {
          alert(`
            Бот: ${gameFigures[comp]}
            Игрок: ${gameFigures[user]}
            Победил: ${winner}
            `);
        };
        // Определение победителя. Спасибо Кириллу за подсказки.
        switch (true) {
          case (user === comp):
            logWin('Ничья');
            return getWhoGoesFirst();
          case (comp === (user + 1) % 3):
            logWin('Игрок');
            return 0;
          default:
            logWin('Бот');
            return 1;
        }
      };
      let goesFirst = getWhoGoesFirst();
      let countStart = 0;
      console.log('countStart: ', countStart);

    
      const marbleStart = () => {
        if (!goesFirst && goesFirst !== 0) return false
      // вывод стартовой информации
      if (countStart === 0 ) {
        countStart++;
        alert(`Старт игры
        ==================
        Количествво шариков
        Игрок: ${result.scopePlayer}
        Бот: ${result.scopeBot}`);
      }

      if (goesFirst % 2 === 0) {
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
      goesFirst++;
      switch (true) {
        case (result.scopePlayer <= 0):
          alert('Вы проиграли');
          break;
        case (result.scopeBot <= 0):
          alert('Бот проиграл');
          break;
        default:
          return marbleStart();
      }
      if (confirm(`Хотите сыграть еще`)) {
        result.resetScope = 5;
        countStart = 0;
        return game();
      };
    };
  }
  window.RPS = game;
})();
