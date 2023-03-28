'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов' ];
/*
//Вариант от Кирилла
const filter = (allList, failedList) => {
  const passedList = [];
  for (let key of allList) {
    if(!failedList.includes(key)) {
      passedList.push(key)
    }
  }
  return passedList;
}

const result = filter(allStudents, failedStudents);
console.log('result: ', result);
*/
//Вариант с методом forEach

const filterAlt = (allList, failedList) => {
  const passedList = [];
  allList.forEach(item => !failedList.includes(item) ? passedList.push(item) : false);
  return passedList;
}

const res = filterAlt(allStudents, failedStudents);
console.log('res: ', res);

