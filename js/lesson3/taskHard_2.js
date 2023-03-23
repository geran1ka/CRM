'use strict';

const income = +prompt('Введите сумму Вашего дохода: ');
let nalog = NaN;

if (Number.isNaN(income)) {
  console.log(`Вы ввели некорректные данные!`);
} else if (income > 50000) {
  nalog = 15000 * 0.13 + 35000 * 0.2 + (income - 50000) * 0.3;
} else if (income > 15000 && income <= 50000) {
  nalog = 15000 * 0.13 + (income - 15000) * 0.2;
} else if (income > 0 && income <= 15000) {
  nalog = income * 0.13;
} else {
  nalog = 0;
}

console.log(`Вам необходимо заплатить налог в размере: ${nalog}`);
