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

// let number = +prompt('Enter number');

// if(number > 0) {
//   console.log('Number is positive');
// } else if(number < 0) {
//   console.log('Number is negative');
// } else if(number === 0) {
//   console.log('This is zero');
// } else {
//   console.log('No-no-no, mr. fish!');
// }


// тернарний оператор
// це спеціальний оператор який може замінити конструкцію if() {} else{}

/*
  if(умова) {
  // action 1
  // } else {
  // action 2
}

  умова ? action 1 : action 2;
*/

// const userName = prompt('Enter your name');

// if(userName) {
//   // action 1
//   alert('Hello, ' + userName);
// } else {
//   // action 2
//   alert('Hello, user');
// }
userName ? alert('Hello, ' + userName) : alert('Hello, user');


const getUserPrompt = function() {
  const userPrompt = prompt('Enter smt');

  // if(userPrompt) {
  //   return userPrompt;
  // } else {
  //   return 'User enter nothing';
  // }

  return userPrompt ? userPrompt : 'user enter nothing';
}
const res1 = getUserPrompt();
console.log(res1);


// const userName = prompt('Enter your name');
// let greetinMessage;

// if(userName) {
//   greetinMessage = 'Hi, ' + userName;
// } else {
//   greetinMessage = 'Hi, user';
// }
// greetinMessage = userName ? 'Hi, ' + userName : 'Hi, user';
// const greetinMessage = userName ? 'Hi, ' + userName : 'Hi, user';

// alert(greetinMessage);

const userName = prompt('Enter your name');

if(userName) {
  alert('Hello, ' + userName);
} else {
  alert('Hello, user');
}
alert( userName ? ('Hello, ' + userName) : ('Hello, user'));

// конструкція switch ... case
/*
  може бути зручною коли ви хочете виконати певні дії, виходячи з конкретних значень певної змінної або виразу

  switch (змінна_або_вираз) {
    case значення_А: {
      // блок коду А
    }
    case значення_B: {
      // блок коду B
    }
    default {
      // виконається, якщо всі кейси зверху не підійдуть
    }
  }

  порівння проводиться у вигляді: 
    змінна_або_вираз === значення_А
    для кожного кейсу до першої правди
*/

// let value = 1;

// switch (value) {
//   case 1: {
//     alert('value confirm meaning 1');

//     // зупиняє виконання світча після себе
//     break;
//   }
//   case 2: {
//     alert('value confirm meaning 2');
//   }
//   case 'test': {
//     alert('value confirm meaning test');
//   }
//   default: {
//     alert('Meanning value not correct');
//   }
// }

const getCardCashbackPercentage = function(cardLevel) {
  let cashbackPercentage;

  switch (cardLevel) {
    case 'basic': 
    case 'basic+':
    case 'basic++': {
      cashbackPercentage = 1;
      break;
    }
    case 'pro': {
      cashbackPercentage = 1.1;
      break;
    }
    case 'gold': {
      cashbackPercentage = 2;
      break;
    }
    case 'platinum': {
      cashbackPercentage = 5;
      break;
    }
    default: {
      cashbackPercentage = 0;
    }
  }

  return cashbackPercentage;
}