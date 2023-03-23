'use strict';

const calculate = (orderPrice, countProduct, promocod) => {
  let orderPriceDiscount = orderPrice;

  if (countProduct > 10) {
    orderPriceDiscount -= orderPriceDiscount * 0.03;
  }

  if (orderPriceDiscount > 30000) {
    orderPriceDiscount -= (orderPriceDiscount - 30000) * 0.15;
  }

  if (promocod === 'METHED') {
    orderPriceDiscount -= orderPriceDiscount * 0.1;
  } else if (promocod === 'G3H2Z1' && orderPriceDiscount > 2000) {
    orderPriceDiscount -= 500;
  } else {
    return orderPriceDiscount
  }

  return orderPriceDiscount
}

const result = calculate(45000, 15, "METHED");
console.log('result: ', result);