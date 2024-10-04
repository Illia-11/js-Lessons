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

console.log(true);
console.log(true.toString());

const boolValue = true;

console.log(true.toString());
console.log(boolValue.toString());