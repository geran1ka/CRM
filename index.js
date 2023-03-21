'use strict';

const product = prompt('Введите наименование товара: ');
const count = +prompt('Введите количество товара: ');
const category = prompt('Введите категорию товара: ');
const price = +prompt('Введите цену товара: ');


console.log('count: ', typeof count);
console.log('price: ', typeof price);
console.log(`"На складе ${count} единиц(ы) товара "${product}" на сумму ${count * price} руб."`)


