// Цикли
/* 
  використовуються для виконання однакових або дуже хсожих дій певну кількість разів
*/

// цикл while
/* 
  while (умова_продовження) {
    // тіло циклу
  }

  чи треба виконати цикл? 
    Якщо так - то виконує тіло циклу 1 раз
      Після кожного виконання знову дивимося чи треба виконати тіло ще раз
    Якщо ні - то цикл не виконується
*/

// приклад безкінечного циклу
// while (true) {
//   alert('Тіло циклу виконано');
// }

// let counter = 0;
// while (counter < 10) {
//   // виконання тіла циклу називається ітерацією
//   counter++;
//   console.log(counter);
// }

// let counter = 0;
// while (true) {
//   alert('iteration');
//   if(counter++ > 3) {
//     // зупиняє виконання циклу
//     break;
//   }
// }

// let shouldContinue = true;
// while (shouldContinue) {
//   alert('iteration');
//   shouldContinue = confirm('Чи треба продовжувати?');
// }


let oddNumber = 0;
while (oddNumber < 10) {
  if(oddNumber % 2 !== 0) {
    console.log(oddNumber);
  }
  oddNumber++;
}
// Виведе
// 1
// 3
// 5
// 7
// 9


