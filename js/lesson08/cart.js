'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,
  getTotalPrice() {
    return this.totalPrice;
  },
  add(productName, priceProduct, countProduct = 1) {
    this.items.push({productName, priceProduct, countProduct});
    this.increaseCount(countProduct);
    this.calculateItemPrice();
  },
  increaseCount(number) {
    return this.count += number;
  },
  calculateItemPrice() {
    this.totalPrice = this.items.reduce((acc, item) => acc + item.priceProduct * item.countProduct, 0);
  },
  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },
  print() {
    console.log(JSON.stringify(this.items));
    console.log('this.totalPrice: ', this.totalPrice);
  },
}
cart.add('Вино', 1000, 5);
cart.add('Ром', 2000, 3);
cart.add('Ликер', 4000, 1);
cart.print();


//cart.clear();
console.log("cart", cart);
