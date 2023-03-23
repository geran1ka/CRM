'use strict';
//Вторая задача
/*
const rain = Math.round(Math.random());

if (rain === 1) {
  console.log("Пошёл дождь. Возьмите зонт!");
} else {
  console.log("Дождя нет!");
}
*/
//Третья задача
/*
const pointsMath = +prompt("Введите кол-во баллов по математике: ");
const pointsRussian = +prompt("Введите кол-во баллов по русскому языку: ");
const pointsComputerScience = +prompt("Введите кол-во баллов по информатике: ");

const sumPoints = pointsMath + pointsRussian + pointsComputerScience;

if (Number.isNaN(sumPoints)) {
  console.log(`Вы ввели некорректные данные!`);
} else if (sumPoints >= 265) {
  console.log(`Поздравляю, вы поступили на бюджет! Количество набранных Вами балов составляет: ${sumPoints}`);
} else {
  console.log(`Увы, Вам не хватило ${265 - sumPoints} баллов для поступления в институт!`);
}
*/
//Четвертая задача
/*
const money = +prompt('Добрый день! Минимальная купюра которую может выдавать банкомат 100р. Введите сумму которую Вы хотите снять: ');

if (Number.isNaN(money)) {
  console.log(`Вы ввели некорректные данные!`);
} else if (money % 100 === 0) {
  console.log(`Заберите Ваши деньги: ${money}руб`);
} else {
  console.log(`Введенная Вами сумма не может быть выдана`);
}
*/