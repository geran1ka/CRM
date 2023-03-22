'use strict';

//Задача №1

const product = prompt('Введите наименование товара: ');
const count = +prompt('Введите количество товара: ');
const category = prompt('Введите категорию товара: ');
const price = +prompt('Введите цену товара: ');

if (Number.isNaN(count) || Number.isNaN(price)) {
  console.log("Вы ввели некоректные данные");
} else {
  console.log(`"На складе ${count} единиц(ы) товара "${product}" на сумму ${count * price} руб."`);
}



