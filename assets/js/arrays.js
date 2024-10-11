// Масиви (arrays) - структури даних для збереження великої кількості (зазвичай) однотипних даних

// const vipEmail1 = 'vjkflds@gmail.com';
// const vipEmail2 = 'mhtvfds@hotmail.com';
// const vipEmail3 = 'sbutvrbv@gmail.com';

// const vipEmails = {
//   user1: 'vjkflds@gmail.com',
//   user2: 'mhtvfds@hotmail.com',
//   user3: 'sbutvrbv@gmail.com',
//   user3: 'bvjkdslb@hotmail.com'
// };

// const vipEmails = {
//   0: 'vjkflds@gmail.com',
//   1: 'mhtvfds@hotmail.com',
//   2: 'sbutvrbv@gmail.com',
//   3: 'bvjkdslb@hotmail.com'
// };

// 
const vipEmails = new Array(
  'vjkflds@gmail.com', 
  'mhtvfds@hotmail.com', 
  'sbutvrbv@gmail.com', 
  'bvjkdslb@hotmail.com'
);

// перевірка чи є об'єкт масивом
const isVipEmailsArray = Array.isArray(vipEmails); // true
console.log(isVipEmailsArray);

console.log(typeof vipEmails); // object
console.log(vipEmails);
console.log(vipEmails.length); // 4 (довжина масива)

console.log(vipEmails[2]); // елемент з індексом 2

// створення масивів

// 1. Через конструктор
const arr1 = new Array(); // пустий масив

const arr2 = new Array(50, 515, 342, 632, 9876); // масив з якимись елементами

const arr3 = new Array(5); // пустий масив з певною довжиною (довжина вказується у дужках)

// task 1
const arrName = new Array('Illia', 'Petro', "Aleks");
console.log(arrName);

// 2. Через літерал
const arr4 = []; // пустий масив

const arr5 = [50, 515, 342, 632, 9876]; // масив з якимись елементами

// task 2
// const arrFood = ['Melon', 'Water', 'Cake'];
// console.log(arrFood);

console.log(arr5[2]);

arr5[4] = Infinity;

// arr5[7] = NaN;

// додавання елементів у кінець масиву
arr5.push('first');

arr5.push('one', 2, false, NaN, {});

const newArr5Lenght = arr5.push(12); // повертає довжину масиву після вставки

// видалення останнього елемента масиву
const deleteValue = arr5.pop();

const emptyArr = [];
emptyArr.pop();
const popRes = emptyArr.pop(); 
console.log(popRes); // undefined

// task 3
// arrName.push('Anna');
// arrName.push('Denis', 'Ludmila', 'Nikolay', 'Papapa');
// console.log(arrName);
// console.log(arrName.pop());
// console.log(arrName);

// додавання елементів у початок списку
arr5.unshift({
  test: true
});

console.log(arr5);

// task 4
// arrName.unshift('John', 'Joshua');

// видалення першого елемента масиву
arr5.shift();

// task 5
// console.log(arrName.shift());

// видалення та вставка елементів у будь-яку точку масиву
/* 
  приймає необмежену кількість вхідних параметрів
  перший параметр - індекс з якого розпочинаємо зміну масиву
  другий параметр - число, яке каже скільки елементів, починаючи з індексу, треба видалити
  всі параметри після цього будуть вставлені на вказаний індекс після видалення елементів
*/
console.log(arr5);
arr5.splice(3, 1, 'splice sent me');
console.log(arr5);

// копіювання частини масиву у новий масив
/*
  перший параметр - вказує початковий індекс
  другий параметр - вказує перед яким індексом треба зупинитися
*/
const copy1 = arr5.slice(3, 7);

const copy2 = arr5.slice(); // повна копія масиву

const copy3 = arr5.slice(3); // копіює від 3 індексу до кінця

const copy4 = arr5.slice(-4, -2); // негативні індекси теж працюють

const copy6 = arr5.slice(1, 5);

copy6[1].newProp = 'wifi';
console.log(copy6[1] === arr5[2]);

// метод join
/*
  перетворює масив на рядок
  елементи розмежуються або комами або рядком який передали як параметр
*/

const joinTest = ['Name 1', 'Name 2', true, 987];

const stringFromArr = joinTest.join();
const stringFromArr2 = joinTest.join(' ');

// обертання елементів у масиві
const reverseArr = [100, 5000, -1.2, 156];

console.log(reverseArr.reverse());

// includes - перевіряє наявність яогось елементу в масиві
const name1 = ['BLA', 'BVJFSK', 'BVHFKANHIR'];

const isBLAInArray = name1.includes('BLA'); // true
const isDghfdInArray = name1.includes('Dghfd'); // false

// flat 
// створює масив, всередині якого, розрівнює вкладені масиви на вказану кількість рівнів
const onionArr = [
  'first', 
  'second', 
  [1, 2, 3, 4, 5], 
  'fourth', 
  [true, false, ['blaalbblaalb'], true]
];
console.log(onionArr[4][3][0]);

const flated1 = onionArr.flat(1);

// concat
/*
  повертає масив, який формується зі старого масиву + всі параметри методу concat
*/
const nums1 = [1, 2, 3, 4, 5];

const nums2 = nums1.concat(100, 200, 300);

const nums3 = nums1.concat(100, 200, 300, [56478, 1623894, [102210]]);

/*
  мутуючі методи: 
    push
    pop
    unshift
    shift
    splice
    reverse
  немутуючі методи:
    slice
    concat
    flat
    includes
    join
    map
    filter
*/ 

/*
  методи обходу масиву

    завжди обходять масив з початку до кінця
    кожен з методів обходу буде приймати спеціальну функцію, яку називають 
      callback (функція зворотнього виклику)
*/

// function printSomeData (printFunction, dataToPrint) {
//   printFunction(dataToPrint);
// }

// printSomeData(alert, 'test');
// printSomeData(console.log, 'test');

// forEach - виконує функцію-колбек для кожного елемента у масиві
/*
  function callback (currentValue, index, array) {
    currentValue - поточний елемент масиву
    index - індекс поточного елементу масива
    array - посиланн на масив, по якому робимо обхід
  }
*/

const forEachTestArray = [100, 200, 300, 400];

// function forEachCallbackExample (currentValue, index, array) {
//   console.log('current value is: ');
//   console.log(currentValue);
//   console.log('index value is: ');
//   console.log(index);
//   console.log('array value is: ');
//   console.log(array);
//   // console.log(array === forEachTestArray); // true
// };

// forEachTestArray.forEach(forEachCallbackExample);

forEachTestArray.forEach(function (number, i, array) {
  console.log(number);
  console.log(i);
  console.log(array);
});


// task for forEach
// const forEachTask = ['true', 'bla', true, 134];
// forEachTask.forEach(function (name, index, array) {
//   console.log(name);
//   console.log(index);
//   console.log(array);
// });


// map - на основі результатів роботи коллбек функції та старого масиву, створює новий масив

const numbers = [2, 3, 4, 5, 6, 7, 8, 9];

// const newArray = [];
// numbers.forEach(function (number) {
//   newArray.push(number * number);
// });
// console.log(newArray); // числа в квадраті

const squareNumbers = numbers.map(function (number, i) {
  // конкретний результат роботи коллбеку, буде кластися у новий масив на поточний індекс, на якому зараз знаходиться обхід
  console.log(number ** 2);
  console.log(i);
  return 'test';
});

console.log(squareNumbers);

// filter - створює новий масив та заповнює його елементами, які пройшли перевірку (повернули правдиве значення) при виклику для них коллбек

const oddNumbers = numbers.filter(function (number) {
  // if (number % 2 !== 0) {
  //   // елемент опиниться у новому масиві
  //   return true;
  // } else {
  //   // елемента не буде у новому масиві
  //   return false;
  // };

  return number % 2 !== 0;
});
console.log(oddNumbers);

// some - повертає правду, якщо хоч один з елементів масиву пройшов перевірку у коллбеці (коллбек повернува правду), інакше повертає прехню

const numbers2 = [1, 3, 2.5, 7, 9.99, 10, 5];

const isThereEvenNumbers = numbers2.some(function (number) {
  // if(number % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // };

  return number % 2 === 0;
});

console.log(isThereEvenNumbers);

// every - повертає правду, якщо всі елементи масиву пройшли перевірку у коллбеці (коллбек повернува правду), інакше повертає прехню

const isThereOddNumber = numbers2.every(function (number) {
    // if(number % 2 !== 0) {
  //   return true;
  // } else {
  //   return false;
  // };
  return number % 2 !== 0;
});

console.log(isThereOddNumber);

// find - повертає перший елемент, який пройшов перевірку з коллбеку
// якщо кожен елемент не пройде перевірку - повертає undefined

const numbers3 = [6, 7, 8, -9, 10, 12, -5, 12.5, -23454.234];

const getNumberLessThanZero = numbers3.find(function (number) {
  // if(number < 0) {
  //   return true;
  // } else {
  //   return false;
  // };
  return number < 0;
});

console.log(getNumberLessThanZero);

// findindex - повертає перший індекс елементу, який пройшов перевірку з коллбеку
// якщо кожен елемент не пройде перевірку - повертає -1

const names = ['Oksana', 'Artem', 'Petro', 'Lionel'];

const oksanaIndex = names.findIndex(function (name) {
  return name === 'Oksana';
});

const joneIndex = names.findIndex(function (name) {
  return name === 'Jone';
});

console.log(oksanaIndex);

console.log(joneIndex);

// reduce - метод обходу масиву, якій на основі елементів масиву може отримати якесь одне значення 
// на основі коллбек функції, яку називають редюсером

const numbers4 = [100, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = numbers4.reduce((accumulator, number, index, array) => {
//   console.log(accumulator);
//   console.log(number);
//   return `new accumulator ${accumulator}`;
// });

const numbers4TotalSum = numbers4.reduce((acc, num) => acc + num);

const sum = (...restParameters) => restParameters.reduce((acc, num) => acc + num);
