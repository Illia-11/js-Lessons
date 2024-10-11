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