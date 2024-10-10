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
