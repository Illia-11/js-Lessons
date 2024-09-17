// Умовні коонструкції - конструкції коду які дозволяють виконувати певні дії за певних умов

console.log('блок коду 1');

/*
if ( уомва ) {
    // дія
}

  дія буде віконана тільки тоді, коли умова буде правдивою
  if завжди приведе умову дло булевого значення перед прийняттям рішення про запуск / ігнорування дії
*/
// let text = prompt('Write yes to run')

let text = '';

if(text) {
  // відбувається при правдивій умові
  console.log('блок коду 2');
} else {
  // відбувається якщо всі умови були брезливими
  console.log('блок коду 3');
}

let number = +prompt('Enter number');

if(number > 0) {
  console.log('Number is positive');
} else if(number < 0) {
  console.log('Number is negative');
} else if(number === 0) {
  console.log('This is zero');
} else {
  console.log('No-no-no, mr. fish!');
}