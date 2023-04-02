'use strict';

const rectangle = {
  _width: 5,
  _heigth: 5,
  set width(value) {
    if (typeof value === 'number') {
      this._width = value;
    }
  },
  set height(value) {
    if (typeof value === 'number') {
      this._heigth = value;
    }
  },
  get perimetr() {
    return `${2 * this._width + 2 * this._heigth}см`;
  },
  get square() {
    return `${this._width * this._heigth}см2`;
  },
};


console.log('rectangle.perimetr: ', rectangle.perimetr);
console.log('rectangle.square: ', rectangle.square);

rectangle.width = 20;
rectangle.height = 10;

console.log('rectangle.perimetr: ', rectangle.perimetr);
console.log('rectangle.square: ', rectangle.square);
