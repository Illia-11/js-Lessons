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


// цикл do ... while
/*
  цикл do ... while завжди відпрацює мінімум 1 раз

  do {
  // тіло циклу 
} while (умова)
*/

// let counter2 = 0;
// do {
//   alert('iteration');
//   counter2++;
// } while (counter2 < 5);


// let oddNumber = 1;
// while (oddNumber < 10) {
//   if(oddNumber % 2 !== 0) {
//     console.log(oddNumber);
//   }
//   oddNumber += 2;
// }
// Виведе
// 1
// 3
// 5
// 7
// 9

let count = 0;

while(true) {
  count++;
  if(count % 2 === 0) {
    // достроково переходить на нове коло (ітерацію)
    continue;
  }

  console.log(count);

  if(count >= 10) {
    break
  }
}
