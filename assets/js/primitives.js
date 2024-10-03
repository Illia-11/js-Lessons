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