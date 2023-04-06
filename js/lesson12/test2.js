'use strict';
const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
const lang = 'RUS'
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};



// функция оставляет только первый символ
// количесство символов для среза, если undefined - то слово должно вводиться полностью
const countSlice = undefined; 
const sliceStr = (str) => str.trim().slice(0, countSlice);
// функция поиска элемента в массиве по первому символу
const findCharArray = (arr, char) =>
  arr.findIndex(item => sliceStr(item, countSlice) === sliceStr(char, countSlice).toLowerCase());
  // функция запроса данных от игрока
const getUserResponse = (arr) => {
  const userResponse = prompt(`${arr}: `);
  if (userResponse === null) {
    const stopPlay = confirm(`${gameLaunge[lang].stopPlaying}`);
    return !stopPlay ? getUserResponse(arr) : false;
  }
  return !(findCharArray(arr, userResponse) === -1) ?
  findCharArray(arr, userResponse) : getUserResponse(arr);
};
const gameLaunge = {
  'EN': {
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


const user = getUserResponse(gameLaunge[lang].gameFigures);
console.log('user: ', user);
const winner = (winner) => {
  alert(`
    ${gameLaunge[lang].computer}: ${gameLaunge[lang].gameFigures[comp]}
    ${gameLaunge[lang].player}: ${gameLaunge[lang].gameFigures[user]}
    ${gameLaunge[lang].win}: ${gameLaunge[lang][winner]}
    `);
};

// Выбор компьютера
const comp = getRandomIntInclusive(0, 2);
console.log('comp: ', gameLaunge[lang].gameFigures[comp]);
// Определение победителя
switch (true) {
  case (user === comp):
    console.log('ничья');
    break;
  case (comp === (user + 1) % 3):
    console.log('Игрок');
    winner('player');
    break;
  default:
    console.log('Комп');
    winner('computer');
    break;
}

