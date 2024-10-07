// Функції - блоки коду які можна повтороно використовувати

/* 
  Параметри функції - речі які передаємо всередину як додаткову інформацію
*/
// let text = 'text';
// console.log(text, 123);

// const userName = prompt('Enter your name');
// const greetingText = 'Hi, ' + userName + '!';
// alert(greetingText);

// const num1 = prompt("Enter first number: ");
// const num2 = prompt("Enter second number: ")
// alert(+num1 + +num2);

// const num1 = +prompt("Enter first number: ");
// const num2 = +prompt("Enter second number: ")
// alert(num1 + num2);

// const input1 = prompt("Enter first number: ");
// const input2 = prompt("Enter second number: ")
// const num1 = +input1;
// const num2 = +input2;
// alert(num1 + num2);

// const result = prompt ();
// console.log(result);


// Створення функції

// functional expression (функціональний вираз)

// const mySecondFunction = function() {
//   console.log('Hello, world!')
//   console.log("I'm here");
// }
// mySecondFunction();

const getSumOfTwoNumbers = function(firstNumber, secondNumber) {
  // тіло функції - блок коду який буде виконано коли функція запуститься

  // завершити функцію якщо параметри не є нормальними числами
  if(typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
    return null;
  }

  // if(firstNumber !== firstNumber) {
  if(isNaN(firstNumber - secondNumber)) {
    return null;
  }

  // console.log('Hello from first function');
  // console.log('You can do anything you want here');
  // console.log('Ви передали функції на вхід наступне значення: ' + firstParam);

  // const firstNumber = +prompt("Enter first number: ");
  // const secondNumber = +prompt("Enter second number: ");

  const sumResult = firstNumber + secondNumber;

  // return каже функції її підсумковий результат роботи
  // після першого виконаного рядка з return функція зупиняє свою роботу
  // return firstNumber + secondNumber;
  return sumResult;

  // це недосяжний блок коду
  console.log(sumResult);
}

// const result = getSumOfTwoNumbers(100, 50);
// console.log('Result is: ' + result);

// const num1 = +prompt("Enter first number: ");
// const num2 = +prompt("Enter first number: ");

const result2 = getSumOfTwoNumbers(NaN, 10);
console.log('Result2 is: ' + result2);

// alert('Result is: ' + result);
// const result1 = myFirstFunction(10);
// myFirstFunction('this is firstParam');
// myFirstFunction();
// console.log(result1);

// const consoleLogRes = console.log();
// const alertRes = alert();

// console.log(consoleLogRes);
// console.log(alertRes);


// func1(); // error

func2(); // result 2

const func1 = function(param1) {
  return 'result 1';
}

// function decoration (об'явлення функції)
function func2(param1) {
  return 'result 2';
}

func1(); // result 1

func2(); // result 2


// Чисті функції
/*
  чиста функція - це функція, яка задовільняє дві вимоги:
    1. При однакових вхідних аргументах функція завжди повертає однаковий результат (детермінованість функції)
    2. У фунції мають бути відсутні побічні впливи/ефекти
*/
function sum (num1, num2) {
  return num1 + num2;
};

// sum - детермінована функція
const res1 = sum(2, 2);

let someNumber = 0;
// badSum - недетермінована функція
function badSum(num1, num2) {
  return num1 + num2 + Math.random();
};

const res2 = badSum(2, 2);

// функції з побічними ефектами

function badSum2 (num1, num2) {
  num1 = +num1; // побічний ефект - зміна аргумента
  console.log(num1 + num2); // побічний ефект потоку виведення
  someNumber++; // побічний ефект - зміна зовнішніх даних
  return num1 + num2;
};

// 
function multiply (num1, num2) {
  console.log('test');
  return num1 * num2;
};

function getSquare (num) {
  return multiply(num, num);
};


// Функції вищого порядку (HOF - hight order function)
/*
  Функції вищого порядку - функція яка: 
    1. Приймає як аргумент іншу функцію
    2. Повертає як результат іншу функцію
*/

const array = [1, 10, 100];

// forEach - функція вищого порядку тому що приймає іншу функція
array.forEach(function(num) {
  console.log(num);
});

// hofExample2 - функція вищого порядку тому що повертає іншу функцію
function hofExample2 () {

  const innerFunction = function() {
    func1();
    console.log('some text');
  };

  return innerFunction;
};

const result = hofExample2();

result();