// Symbol (символ) - примітивний тип даних. Є унікальним та незмінним типом даних

// створення символів
const sybmol = Symbol();
const sybmol2 = Symbol();

console.log(sybmol === sybmol2); // false

// ніколи не можна створювати символ через new
// const sybmol3 = new Symbol(); // TypeError (symbol isn't a constructor)

// можна давати опис символа щоб краще показати що він має робити
const sybmol4 = Symbol('Тут може бути опис');

const obj1 = {
  value:  'public data',
  private: 'secret data here',
  important: 'very important data',
  important: 'bad data'
}

const obj2PrivateSymbol = Symbol('private');

const obj2 = {
  value:  'public data',
  // додавання символу при створенні обʼєкту
  [obj2PrivateSymbol]: 'secret data here'
}

// додавання символу до існуючого обʼєкту
const obj2ImportantSymbol = Symbol('important');

obj2[obj2ImportantSymbol] = 'very important data';

// отримання значенн з ключем-символом
console.log(obj2[obj2PrivateSymbol]);

// отримати масив обʼєкт символів які є ключами обʼєктів

const symbolArr = Object.getOwnPropertySymbols(obj2);
console.log(symbolArr[0] === obj2PrivateSymbol); // true

// Symbol.iterator - спеціальний символ якиц дає доступ до функції створення ітератору якогось утерованого обʼєкту

/*
  Ітератори існують у:
    масивів
    рядків
    Map (не метод масиву)
    Set
    arguments
    ...
*/

const array = ['elem 1', 'elem 2', 'elem 3'];

// отримання ітератору масиву:
const arrayIterator = array[Symbol.iterator]();
const arrayIterator2 = array[Symbol.iterator]();
/*
  Використання ітератору JS:
    1. допомагає у роботі спред-оператора
    2. дозволяє використовувати цикл for ... of
    3. використовується при деструктуризації
*/

console.log(...array);

const myArray1 = {
  0: 'elem 1',
  1: 'elem 2',
  2: 'elem 3',
  length: 3
}

// console.log(...myArray1); // error

// for ... in - дозволяє ходити по властивостям обʼєкта (окрім символів)

array[Symbol('test')] = 'test';

for(const key in array) {
  console.log(key); // ключі обʼєкту
  console.log(array[key]);
}

console.log('=======================');
for(const key in myArray1) {
  console.log(key); // ключі обʼєкту
  console.log(array[key]);
}

// for ... of - цикл що використовує ітератори
console.log('=======================');
// декларативний цикл for
for(const elem of array) {
  console.log(elem); // значення обʼєкта
}

// імперативний цикл for
for(let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// error
// console.log('=======================');
// for(const elem of myArray1) {
//   console.log(elem); // значення обʼєкта
// }

console.log('=======================');
