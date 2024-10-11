// рекурсивна функція - функція, яка в процесі свого викоанння може викликати саму себе

// погана рекурсивна sum
// function sum(num1, num2) {

//   // alert();
    
//   console.log(num1 + num2);
//   // sum();
// };

// sum();


// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// };

// function countdown(number) {
//   console.log(number)

//   // рекурсивний випадок
//   if(number > 0) {
//     countdown(number - 1);
//   };

//   // базовий випадок
//   return undefined;
// };

function countdown(number) {
  console.log(number)
  
  // базовий випадок
  if(number > 0) {
    return undefined;
  };

  // рекурсивний випадок
  countdown(number - 1);
};

countdown();

/*
  Етапи роботи рекурсивної функції: 
    1. Функція рекурсивно робить якусь дію та запускає саму себе в колл стеці
    2. Якась з запусків функцій доходить до базового випадку (не запускає іншу функцію до свого завершення)
    3. Всі інші функції завершують свою роботу
*/

const tree = {
  value: 2,
  left: {
    value: 7,
    left: {
      value: 2
    },
    right: {
      value: 6,
      left: {
        value: 5
      },
      right: {
        value: 11
      }
    }
  },
  right: {
    value: 5,
    right: {
      value: 9,
      left: {
        value: 4
      }
    }
  }
};

/**
 * Функція для обходу та отримання суми двійкового дерева
 * @param {object} tree обʼєкт дерева
 * @param {number} tree.value значення вершини дерева
 * @param {object} [tree.left] ліва гілка
 * @param {object} [tree.right] права гілка
 * @returns {number} сума вершин дерева
 */
function reduceTree(tree) {
  let result = tree.value;

  // якщо є ліва гілка, треба розрахувати її суму і додати до result
  if(tree.left) {
    result += reduceTree(tree.left);
  }

  // якщо є права гілка, треба розрахувати її суму і додати до result
  if(tree.right) {
    result += reduceTree(tree.right);
  }

  // базовий випадок
  return result;
};