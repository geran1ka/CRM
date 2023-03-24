'use strict';

const isPrime = (number) => {
  for (let i = 2; i <= Math.round(Math.sqrt(number)) ; ++i) {
    if (!(number % i)) {
      return false;
    }
  }
    return number > 2;
}

for (let i = -100, count = 0; i < 542; ++i) {
  isPrime(i) && console.log(`${++count}) -- ${i}`);
}
