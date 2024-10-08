// оператори

// typeof - оператор визначення типу даних
typeof 10;

let data = 'test';
console.log(typeof data);

let bug = null;
console.log(typeof bug); // object


// Математичні оператори

console.log('========= Математичні оператори =========')

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


// Логічні оператори
console.log('========= Логічні оператори =========')

// Порівняння
/* 
  > - більше
  < - менше
  <= - більше або дорівнює
  >= - менше або дорівнює
*/
console.log(10 > 5); // true
console.log(5 > 10); // false

console.log(10 > 10); // false
console.log(10 > 10); // false

console.log(10 >= 10); // true
console.log(10 <= 10); // true

console.log('cat' > 'elefant'); // false

// Рівність значень
/* 
  == - оператор рівності
  === - оператор жорсткої рівності

  != - оператор нерівності
  !== -  оператор жорсткої нерівності
*/
console.log('========= Рівність значень =========');
console.log(10 === 15); // false
console.log(10 == 10); // true
console.log("cat" === "cat"); // true

console.log(1000 === '1000'); // false
console.log(1000 == '1000'); // true

console.log(50 != 100); // true

// Логічне заперечення
console.log(!true); //false
console.log(!false); // true

console.log(!10); // false
console.log(!''); // true
console.log(!' '); // false
console.log(!0); // true
console.log(!null); // true
console.log(!undefined); // true
console.log(!NaN); // true

// Перетворення значення на булевий еквівалент
console.log(!!10); // true

// Логічне "І" та логічне "АБО"
/* 
  && - Логічне "І"
    повертає правдиве значення якщо і ліва і права частина правдива
    (повертає або перше брехливе значення або останнє правдиве значення)

  || - Логічне "АБО"
    повертає правдиве значення якщо або лів або права частина є правдивою
    (повертає або перше правдиве значення або останнє брехливе значення)
*/
const textNumber = 17.5;
// console.log(100 > textNumber  >= 0);
console.log(textNumber > 0); // true
console.log(textNumber < 100); // true

console.log(textNumber > 0 && textNumber < 100); // true

console.log(textNumber > 0 || textNumber < 100); // true

console.log('text' && 15);
console.log(null && NaN); // null
console.log(100 && undefined); // undefined
console.log('text' && -57); // -57

// Присвоєння
/* 
  +=
  -=
  *=
  /=
  **=
*/
let age = 50;

// age = age + 5;
age += 5;
age -= 5;

age += 1;

console.log(age);