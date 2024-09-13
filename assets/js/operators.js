// оператори

// typeof - оператор визначення типу даних
typeof 10;

let data = 'test';
console.log(typeof data);

let bug = null;
console.log(typeof bug); // object

// Математичні оператори
// +, -, *, /,
console.log('2 + 2');
console.log(2 + 2); // нормальна математика
console.log(true + true + true); // = 3
// конкатенація (склеювання) рядків
console.log('___' + 10 + 25 + 40); // ___102540
console.log('' + null); // null

console.log('9 - 2');
console.log(9 - 2);

console.log('10 * 2');
console.log(10 * 2);

console.log('4 / 2');
console.log(4 / 2);

// зведення в ступінь
console.log('3 ** 3');
console.log(3 ** 3);

console.log('(-3) ** 3');
console.log((-3) ** 3);

// залишок від ділення
console.log('10 % 3');
console.log(10 % 3);
console.log(10 % -3);
console.log(-10 % 3);

// інкрементатори / декрементатори
let counter = 0;
console.log(counter);
counter++; // +1
counter++; // +1
counter++; // +1
console.log(counter);

console.log(counter);
counter--; // - 1
console.log(counter);

// counter++ / counter-- - постфіксний
// ++counter / ++counter - префіксні
let counter1 = 10;
console.log(++counter1);
console.log(counter1);
console.log(++counter1);

let counter2 = 10;
console.log(counter2++); // 10
console.log(counter2); // 11
console.log(counter2++); // 11
console.log(counter2); // 12

// ударні оператори
// + , -

console.log(-10);
console.log(+500);
// перетворення типу на числовий
console.log(-'hgilrcewhgowebfjslkvsdfk');
console.log(-true);
console.log(+false);
console.log(+'-1234');
