'use strict';

// console.log(1);
// console.log(2);
// console.log(user1);
// console.log(3);

// if () {};

// const test = 1;
// test = 2;

try {
  // початок небезпечного коду
  console.log(1);

  // const err1 = new Error('Приклад опису помилки');

  // err1.status = 500;

  // console.log(err1.message);

  // throw err1;

  throw new TypeError('Приклад опису помилки');

  console.log(2);
  // кінець небезпечного коду
} catch (err) {
  // блок коду, який виконається якщо  у блоці try відбулася помилка
  console.log('error is');

  // console.dir(err);

  if(err.message === 'Приклад опису помилки') {
    console.log('обробив помилку');
  }
} finally {
  // блок коду, який виконується або після catch або після повного виконання try
  console.log('finally');
};

console.log('Код виконано повністю');

// task 1
// console.log('task 1');
// try {
//   console.log('Поки все добре');
//   // throw new SyntaxError('Помилочка');
//   console.log('Цей консоль лог для того, якщо не буде помилки');
// } catch (err) {
//   console.log('Помилка піймана');
//   console.log(err);
// }
// console.log('Код закінчився');

function getSumOfTwoNumbers (num1, num2) {

  if(typeof num1 !== 'number' || isNaN(num1)) {
    throw new TypeError('num1 має бути корректним числом');
  };

  if(typeof num2 !== 'number' || isNaN(num2)) {
    throw new TypeError('num2 має бути корректним числом');
  };

  return num1 + num2;
};

try {
const res = getSumOfTwoNumbers('2',3);

console.log(res);
} catch (err){
  console.log(err.message);
}

console.log('Код закінчився');
