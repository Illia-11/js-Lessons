// Об'єкти
"use strict";
// приклад даних користувача
// ПОГАНО
const user1Name = 'testUser';
const user1Email = 'test@test.test';
const user1Age = 15;

// приклад об'єкта
const object1 = {
  // об'єкт - набір властивостей
  // приклад властивостей об'єкта
  // ключами можуть бути тільки рядки або символи
  // значенням можуть бути будь-які типи даних
  key1 : 'value 1',
  key2 : true,
  key3 : 100,
  // метод - властивість об'єкта, значенням якого є функція
  key4: function() {
  }
};

// practice task
const user = {
  name: 'Petro',
  lastName: 'Petrov',
  age: 46,
  isMale: true,
  mail: 'petro34@gmail.com',
  password: 184394,
  eating: function() {
    alert('I am eating');
  },
  whatIsName: function() {
    return this.name + " " + this.lastName;
  }
}

const citramon = {
  type: 'таблетки',
  doze: 2,
  pirce: 150,
  isSoldFree: true,
  maxAmount: 20,
  amount: 14
};

const phone = {
  brand: 'Apple',
  model: '12 Pro',
  // cpu: {
  //   brand: 'Qualcom',
  //   model: 'Snapdragon 860',
  //   frequency: 1234,
  // },
  price: {
    currency: 'UAH',
    amount: 123,
  },
  isOn: false,
  color: 'Pacific Blue',
  callSmb: function() {
    alert('дзвонимо комусь. Тут будуть гудки');
  }
};

console.log(phone.cpu); // undefined
// console.log(phone.price.model); // error

// створення об'єктів (Create)
const obj1 = {}; // найчастіше, літерал
const obj2 = Object(); // рідко
const obj3 = new Object(); // достатньо часто,
// використовується при створення об'єктів зі специфічною структурою

const cat = {
  name: 'Polina',
  furColor: 'white',
  eyesColor: 'blue',
  breed: 'British shynshyla',
  isSleeping: false,
  age: 2
};
console.log(cat);

function funcTest(userObj) {
  return "Hello, " + userObj.name + " " + userObj.lastName;
}
const greeting1 = funcTest(user);
console.log(greeting1);


function test1() {
  // this - контекст виконання функції (хто її запускає)
  console.log(this);  // об'єкт Window (стандартно) || undefined (суворий режим)
}

// test1();

const testObj = {
  key1: 'value1',
  key2: 12345,
  key3: false,
  test: function() {
      // this у методах об'єктів напряму надає доступ до об'єкту
      // (той, хто іде до останньої крапочки)
    console.log(this);
    // console.log(testObj.key1);
    console.log(this.key1);
  }
}
testObj.test();


// зчитування об'єктів (Read)
console.log(user);
// alert(user); // приводить об'єкт до рядка, що зазвичай є проблемою
console.log(user + '');

// отримання даних з об'єкта
// назваОб'єкта.назваВластивості
console.log(user.mail);

// оновлення значень (Update)

// let email = 'test@gmail.com';
// email = 'test1@gmail.com';

// let age = 46;
// age += 2;
// age++;

user.mail = 'pedro@gmail.com';
console.log(user.mail);

user.age += 2;
console.log(user.age); 
user.age++;
console.log(user.age);

// додавати нові властивості до існуючого об'єкту

user.accountBalance = 34635;
console.log(user);

// видалення значень об'єкта (Delete)

// 1 чере delete
delete user.accountBalance;

// 2 присвоєння undefined
user.age = undefined;


const video1 = {
  title: 'Titan submarine is ...',
  views: 123576896456,
  author: 'BBC News',
  addView: function() {
    this.views++;
  }
}

const video2 = {
  title: 'Title 2',
  views: 123,
  author: 'Test User',
  addView: function() {
    this.views++;
  }
}

const video3 = {
  title: 'Title 3',
  views: 123576456,
  author: 'Test User 2',
  addView: function() {
    this.views++;
  }
}

const video4 = {
  title: 'Titan submarine is ...',
  views: 123576896456,
  author: 'BBC News',
  addView: function() {
    this.views++;
  }
}

const video5 = {
  title: 'Title 5',
  views: 12396456,
  author: 'Test User 5',
  addView: function() {
    this.views++;
  }
}

// Функції - конструктори
// створюють об'єкти з певною структурою
// function createVideoObject(title, views, author) {
function Video(title, views, author) {
  // const newVideoObject = {};

  // newVideoObject.title = title;
  // newVideoObject.views = views;
  // newVideoObject.author = author;
  // newVideoObject.addView = function () {
  //   this.views++;
  // };
  
  // return newVideoObject;


  // this - для функції запущених з new - пустий об'єкт завжди
  // також повертається навіть, якщо не писати return

  this.title = title;
  this.views = views;
  this.author = author;
  this.addView = function() {
    this.views++;
  }
}

const video6 = new Video('Funny cats video', 574829365, 'Me');
// перевод функції в режим конструктора
// this в цьому режимі буде постум об'єктом, з яким можна працювати
// завжди повертає об'єкт 
// якщо в тілі функці повертається не об'єкт, то воно повертає об'єкт this
const video7 = new Video('Funny cats video 2.0', 5748, 'Me');

// особливості роботи з ключами
// 

const testObject = {
  key: 'value',
  'key 1': 'test 1',
  3: 'value 3',
  'obj 1': {
    3: 'some text',
    2: null,
    1: true
  }
};
console.log(testObject.key);

// оператор доступу до властивості об'єкта з обчисленням
/*
  obj[key]
*/

console.log(testObject['key 1']); // test 1
console.log(testObject['key']); // value
console.log(testObject[3]); // value 3
console.log(testObject['3']); // value 3

// const userInput = prompt('Enter some phone key ');
const userInput = 'brand';

console.log(phone[userInput]);
console.log(testObject['obj 1'][3]);
console.log(phone.price['currency']);

// const key = prompt('Enter key');
// const value = prompt('Enter value');

// testObject[key] = value;

console.log(testObject);

// console.log(testObject[key], testObject['obj 1'], phone.isOn);


// особливості порівняння об'єктів у JS

const testStr1 = 'test string';
const testStr2 = 'test string';
const testStr3 = 'teststring';

console.log(testStr1 === testStr2); // true
console.log(testStr1 === testStr3); // false

const testObj1 = {
  firstName: 'John'
};

const testObj2 = {
  firstName: 'Jame'
};

const testObj3 = {
  firstName: 'Jame'
};

console.log(testObj1 === testObj2); // false
console.log(testObj3 === testObj2); // false
console.log(testObj1 === testObj1); // true

const testObj4 = testObj2;
console.log(testObj4 === testObj2); // true

testObj4.lastName = 'Test';
console.log(testObj4);
console.log(testObj2);

function changeObject(obj) {

  obj.newProperty = 'we changed object';

  return obj;
};

const testObj5 = changeObject(testObj4);


const message1 = {
  messageText: 'Lorem Ipsum',
  author: 'User',
  id: 0,
  likes: 0,
  dislikes: 0,
  addLike: function() {
    this.likes++;
  },
  addDislike: function() {
    this.dislike++;
  },
  removeLike: function() {
    this.likes--;
  }
};

const message2 = {
  messageText: 'blablabla',
  author: 'User 2',
  id: 1,
  likes: 12,
  dislikes: 1,
  addLike: function() {
    this.likes++;
  },
  addDislike: function() {
    this.dislike++;
  },
  removeLike: function() {
    this.likes--;
  }
};

// console.log(message1.addDislike === message2.addDislike); // false

// const arr1 = [];
// const arr2 = [null];

// console.log(arr1.push === arr2.push); // true


// Прототипи

/*
  це спеціальний обʼєкт, який зберігає певні властивості та методи, які мають бути спільними для моїх обʼєктів
*/

const messagePrototype = {
  removeDislike: function() {
    console.log('dislike removed');
  },
  addLike: function() {
    this.likes++;
  },
  addDislike: function() {
    this.dislike++;
  },
  test: function() {
    console.log('this value is: ');
    console.log(this);
    return 10;
  }
};

// додає прототип обʼєкту
message1.__proto__ = messagePrototype;
message2.__proto__ = messagePrototype;

message1.test();
message2.test();
// messagePrototype.test();

// console.log(message2.removeDislike === message1.removeDislike); // true
// console.log(message1.__proto__ === message2.__proto__); // true
// message1.removeDislike();

// task 1
const hamster = {
  name: 'Bob'
};

const dog = {
  name: 'Bobik'
};

const parrot = {
  name: 'Kesha'
};

const animalPrototype = {
  sleep: function() {
    console.log(this.name + ' is sleeping');
  }
};

const birdPrototype = {
  fly: function() {
    console.log(this.name + ' is flying');
  }
};

hamster.__proto__ = animalPrototype;
dog.__proto__ = animalPrototype;
parrot.__proto__ = birdPrototype;
birdPrototype.__proto__ = animalPrototype;

// dog.sleep();
// hamster.sleep();


let currentId = 0;

function Message (author, messageText) {
  this.id = currentId++;
  this.author = author;
  this.messageText = messageText;
  this.likes = 0;
  this.dislikes = 0;

  // технічно працює, але можна по іншому для конструкторів
  // this.__proto__ = messagePrototype;
};

// задавання прототипу для функції-конструктора
Message.prototype = messagePrototype;

const msg1 = new Message('Anonumous', 'Hell, world');
const msg2 = new Message('User', 'Lorem Ipsum');