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