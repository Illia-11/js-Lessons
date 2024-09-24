// Об'єкти

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