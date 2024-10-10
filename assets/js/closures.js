let data = 'letter';

function log1() {
  console.log(`log1: ${data}`);
};

log1(); // letter

function log2() {
  let data = 151;
  console.log(`log2: ${data}`);
};

log2(); // 151

function log3() {
  let data = NaN;

  console.log(`log3 outer: ${data}`); // NaN

  log1(); // letter

  if(true) {
    let data = true;
    console.log(`log3 outer: ${data}`); // true
  };
};

log3();


// Лексичне оточення функції - спеціальний обʼєкт, який містить всі змінні, які функція бачить
// розраховується на момент створення функції

function log4 () {
  let data = 'TOP SECRET'; // змінна знаходиться у замиканні

  function innerlog() {
    console.log(data); // доступ до data буде навіть коли log4 завершить роботу
  };

  // innerlog();

  return innerlog;
};

const innerLog1 = log4();

innerLog1();

function createGreeting(name) {
  function greet() {
    return `Hello, ${name}`;
  };

  return greet;
};

const greetArtem = createGreeting('Artem');
const greetOksana = createGreeting('Oksana');

function createId () {
  let currentId = 0;

  function getNewId () {
    currentId++;
    return currentId;
  };

  function getId () {
    return currentId;
  };

  // return getNewId;

const returningObject = {
  getLastId: getId,
  getNewId: getNewId
};

  return returningObject;
};

const userIdHelper = createId();
const productIdHelper = createId();