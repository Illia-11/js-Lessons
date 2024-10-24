// обʼєкт arguments

/**
 * Функція суми необмеженої кількость значень
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */
function sum (num1, num2) {
  console.log(num1);
  console.log(num2);

  // масивоподібний обʼєкт
  // немає методів масиву
  console.log(arguments);

  let resultingSum = num1 + num2;

  for(let i = 0; i < arguments.length; i++) {
    resultingSum += arguments[i];
  }

  return resultingSum
};

// const arr1 = [1, 2, 34];

// приймає необмежену кількість аргументів
// arr1.push();

sum(10, 20, 30, 40, 2135, -214578, 0, false, null);

// console.dir(funcWithArguments);

// const arrow = () => {};

// console.dir(arrow);

// rest - оператор (оператор залишкових параметрів)

/**
 * Функція суми необмеженої кількость значень
 * @param {number} num1 
 * @param {number} num2 
 * @param {...number} restParameters - масив аргументів-чисел починаючи з 3 аргументу
 * @param {number[]} restParameters - масив аргументів-чисел починаючи з 3 аргументу
 * @returns {number}
 */
const sumWithRestOperator = (num1, num2, ...restParameters) => {
  let resultingSum = num1 + num2;

  console.log(restParameters); // створює масив з інших значень параметрів

  restParameters.forEach((restParameters) => {
    resultingSum += restParameters;
  });

  return resultingSum;
};

console.log(sumWithRestOperator(1, 2, 3, 4, 5, 6, 7));


const sumWithRestOperator2 = (...restParameters) => {
  let resultingSum = 0;

  console.log(restParameters); // створює масив з інших значень параметрів

  restParameters.forEach((restParameters) => {
    resultingSum += restParameters;
  });

  return resultingSum;
};


const sum = (...restParameters) => restParameters.reduce((acc, num) => acc + num);

console.log(sumWithRestOperator(1, 2, 3, 4, 5, 6, 7));


// spread - оператор (оператор розширення)

const numbers = [20, 32, -3, 4, 0, 12.3, -123.5];

const minNumber = Math.min(...numbers, 1000);
console.log(minNumber);

const nums1 = [2,4,6,8,10];
const nums2 = [1,3,5,7,9];

const allNums = [...nums2, 567849, ...nums1, -907643];

const sumOfAllNums = sumWithRestOperator2(...allNums);