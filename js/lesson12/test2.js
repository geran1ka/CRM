const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const sliceStr = (str, count) => str.trim().slice(0, count);


const findCharArray = (arr, str) => arr.findIndex(item => (item) === str);

const stroka = 'кам';

const res2 = sliceStr(stroka)
//console.log('res2: ', res2);

const res = findCharArray(FIGURES_RUS, stroka, 3);
console.log('findCharArray(FIGURES_RUS, stroka): ', findCharArray(FIGURES_RUS, stroka));
console.log('res: ', res);


const comp = getRandomIntInclusive(0, 2);
console.log('comp: ', comp);

const user = 2;

switch (true) {
  case (user === comp ):
    console.log('ничья');;
    break;
  case ( comp === (user + 1) % 3 ):
    console.log('Игрок');
    break;
  default:
    console.log('Комп');
}
