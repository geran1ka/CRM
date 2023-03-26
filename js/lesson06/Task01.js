'use strict';

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];
//Вариант 1
const filter = (arrayOne, arrayTwo) => {
  const passedStudents = [...arrayOne];
  for (let key of arrayTwo) {
    passedStudents.splice(passedStudents.indexOf(key), 1);
    console.log(passedStudents);
    
  }
  return passedStudents;
}

const result = filter(allStudents, failedStudents);
console.log('result: ', result);

//Вариант с защитой в случае ошибки с фамилией студента;
const filterAlt = (arrayOne, arrayTwo) => {
  const passedStudents = [...arrayOne];
  for (let key of arrayTwo) {
    if(passedStudents.indexOf(key) === -1) {
      continue;
    };
    passedStudents.splice(passedStudents.indexOf(key), 1);
  }
  return passedStudents;
}

const resultAlt = filterAlt(allStudents, failedStudents);
console.log('resultAlt: ', resultAlt);