'use strict';

const income = +prompt('Введите сумму Вашего дохода: ');
let ostatok = income
let nalog = 0;

if (ostatok > 50000) {
  nalog += (ostatok - 50000) * 0.3
  ostatok = 50000;
};


if(ostatok > 15000 && ostatok <= 50000) {
  nalog += (ostatok - 15000) * 0.2;
  ostatok = 15000;
}

if (ostatok > 0) {
  nalog += ostatok * 0.13;
}

console.log(`Вам необходимо заплатить налог в размере: ${nalog}`);
