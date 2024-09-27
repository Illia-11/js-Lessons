// Масиви (arrays) - структури ланих для збереження великої кількості (зазвичай) однотипних даних

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