'use strict';
/*
const unique = (arr) => {
  return Array.from(new Set(arr);
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
      "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    const result = unique(strings)
    console.log('result: ', result);
*/

const arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];

const aclean = (arr) => {
  const map = new Map();
  for (const world of arr) {
    const sorted = world.toLowerCase().split('').sort().join('');
    map.set(sorted, world);
  }
  return Array.from(map.values());
};
const res = aclean(arr);
console.log('res: ', res);

const map = new Map();

map.set('name', 'John');

const keys = map.keys();
console.log('keys: ', keys);


