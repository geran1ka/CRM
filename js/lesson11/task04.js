'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,
  get totalPrice() {
    return this.calculateItemPrice();
  },
  add(productName, priceProduct, countProduct = 1) {
    this.items.push({productName, priceProduct, countProduct});
    this.increaseCount(countProduct);
  },
  increaseCount(number) {
    return this.count += number;
  },
  calculateItemPrice() {
    const sum = this.items.reduce((acc, item) =>
      acc + item.priceProduct * item.countProduct, 0);
    return sum - sum * this.discount / 100;
  },
  set setDiscount(promo) {
    switch (promo) {
      case 'METHED':
        this.discount = 15;
        break;
      case 'NEWYEAR':
        this.discount = 21;
        break;
      default:
        this.discount = 0;
    }
  },
  clear() {
    this.items = [];
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log('this.totalPrice: ', this.totalPrice);
  },
};
console.log(cart);
cart.setDiscount = 'NEWYEAR';
cart.add('Вино', 1000, 5);
cart.print();
cart.add('Ром', 2000, 3);
cart.print();
cart.add('Ликер', 4000, 1);
cart.print();
