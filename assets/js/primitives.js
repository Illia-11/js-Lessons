'use strict';

console.log('test text');
console.log('test text'.length);

const textFromServer = 'test text';

console.log(textFromServer);
console.log(textFromServer.length);

const str1 = 'test';
console.log(str1);

const str2 = new String('test');
console.log(str2);

const arr1 = ['t', 'e', 's', 't'];
console.log(arr1);

// const bool1 = false;

// if(bool1) {
//   console.log(1);
// } else {
//   console.log(2);
// };

// const bool2 = new Boolean(false);

// if(bool2) {
//   console.log(1);
// } else {
//   console.log(2);
// };

// Використання функцій Boolean, String, Number
const test1 = Number(10);
console.log(test1);

const test2 = Number('10');
console.log(test2);

// +data
const test3 = Number('bvhjkbvjdkc');
console.log(test3);

// console.log(+'bvhjkbvjdkc');

// !!data
const bool1 = Boolean({
});
console.log(bool1);

// '' + data
const str3 = String(null);
console.log(str3);


// Обʼєкт Math

console.log(Math);

console.log(Math.PI);

// const SOME_CONSTANT_VALUE = 'test';

// повертає абсолютне значення числа
console.log(Math.abs(10)); // 10
console.log(Math.abs(0)); // 0
console.log(Math.abs(-10)); // 10

// округлення до більшого цілого числа
console.log(Math.ceil(0.2)); // 1
console.log(Math.ceil(1.6)); // 2

// округлення до меншого цілого числа
console.log(Math.floor(0.2)); // 0
console.log(Math.floor(1.999)); // 1

// округлення до ближчого цілого числа
console.log(Math.round(4.5)); // 5
console.log(Math.round(3.4)); // 3

// знаходження мінімального або максимального числа
console.log(Math.max(1, 2, 3, 6, 99)); // 99
console.log(Math.min(-99, 12, 56, 0)); // -99

// зведення в ступінь
console.log(Math.pow(4, 2)); // 16
console.log(Math.pow(-4, -2)); // 0.0625

// повертає випадкове значення у діапазоні
// від 0 до 1 (але одиниця не входить у діапазон)
console.log(Math.random()); // 0 - 0.999999999999

// повертає випадкове значення у діапазоні
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}


// Методи примітивів

// Boolean
console.log(true);
console.log(true.toString());

const boolValue = true;

console.log(true.toString());
console.log(boolValue.toString());

// Number
const num1 = 15.5;
console.log(num1.toExponential()); // '1.55e+1'
console.log(num1.toExponential(1)); // '1.6e+1'

console.log(num1.toFixed()); // '16'
console.log(num1.toFixed(1)); // '15.5'

console.log(num1.toPrecision()); // '1.55'
console.log(num1.toPrecision(1)); // '2e+1'

// String
const objStr = new String('This is test string');

const str = 'This is test string';

console.log(str.length);

console.log(str[2]);

// str[2] = 'I'; // error

// charAt - повертає символ на вказаному індексу в рядку
const symbol1 = str.charAt(2); // 'i'

// charCodeAt - повертає Юнікодівське значення символу на вказаному індексу в рядку
const unicodeNum1 = str.charCodeAt(2); // 105

// concat - повертає новий рядок, в якому до старого приєднуються (конкатинуються) аргументи конкату (зазвичай рядки)
// str + ' CONCAT ' + 10 + ' !!!';
const concatStr = str.concat(' CONCAT ', 1235, ' !!!');

// includes - відповідає чи входить рядок-аргумент у склад рядка у якого викликаємо метод
const includesStr = str.includes('t'); // true

// indexOf - повертає індекс першого входження рядка-аргумента у рядку, у якого метод викликали
const indexOfStr = str.indexOf('t'); // 8
const indexOfStr2 = str.indexOf('bdsbdf'); // -1
const indexOfStr3 = str.indexOf('t', 9); // 11

// slice - робить копію частини рядка
const sliceStr = str.slice(2, 13); // "is is test "
const sliceStr1 = str.slice(2, -4); // "is is test st"

// trim - створює новий рядок, в якому пробіли з початку та кінця видаляються
const untrimmedStr = '      ';
const trimmedStr = untrimmedStr.trim();

// toLowerCase / toUpperCase - створює новий рядок, який буде повністю в нижньому / верхньому регістрі
const str4 = 'Test StRIng';
const lowerCase = str4.toLowerCase(); // "test string"

const upperCase = str4.toUpperCase(); // "TEST STRING"