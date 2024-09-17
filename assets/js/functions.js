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

const result = getSumOfTwoNumbers(100, 50);
console.log('Result is: ' + result);

const num1 = +prompt("Enter first number: ");
const num2 = +prompt("Enter first number: ");

const result2 = getSumOfTwoNumbers(num1, num2);
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