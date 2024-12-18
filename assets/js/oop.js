// Концепції ООП (обʼєктивно-орієнтованого програмування)

// 1. Успадкування
class Animal {
  constructor (nickname, weight = 1, type = 'animal') {
    this.nickname = nickname;
    this.weight = weight;
    this.type = type;
  };

  sleep () {
    console.log(`${this.nickname} is sleeping`);
  };

  eat () {
    console.log(`${this.nickname} is eating`);
  };
};

const mouse = new Animal('Jerry');
const dog = new Animal('Bobik');

// class Bird {
//   constructor (nickname) {
//     this.nickname = nickname;
//   }; 

//   sleep () {
//     console.log(`${this.nickname} is sleeping`);
//   };

//   eat () {
//     console.log(`${this.nickname} is eating`);
//   };

//   fly () {
//     console.log(`${this.nickname} is flying`);
//   };
// };


class Bird extends Animal {
  constructor (nickname, weight = 1, wingspan = 0.7) {
    // запуск батьківського конструктора (зараз Animal)
    // має бути запущений до роботи з this та до повертання підсумкового обʼєкту
    super(nickname, weight, 'bird');
    this.wingspan = wingspan;
  };

  fly () {
    console.log(`${this.nickname} is flying`);
  };
};

const parrot1 = new Bird('Kesha', 2, 1);
const parrot2 = new Bird('NotKesha', 0.5, 0.8);


// task

class User {
  constructor (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isBanned = false;
  };

  createMessage () {
    console.log('Create  message');
  };

  deleteMessage () {
    console.log('Delete message');
  };

  static isUser (value) {
    return value instanceof User;
  };
};

const user1 = new User('Ivan', 'Ivanov', 40);
const user2 = new User('Pavlo', 'Pavlov', 35);

class Moderator extends User{
  constructor (firstName, lastName, age, subforumList = []) {
  super(firstName, lastName, age);
  this.subForumList = [];
  };
  
  createSubForum (forumName) {
    this.subForumList.push(forumName);
  };

  deleteSubForum (forumName) {
    // const newSubForumList = this.subForumList.filter((currentForum) => currentForum !== forumName);
    // this.subForumList = newSubForumList;

    this.subForumList = this.subForumList.filter((currentForum) => currentForum !== forumName);
  };
};

const moderator1 = new Moderator('Moderator', 'Moderatorov', 30, ['blabla', 'some text', 'more text']);

class Admin extends Moderator {
  constructor(firstName, lastName, age, subforumList = [], contactEmail) {
    super(firstName, lastName, age, subforumList = []);
    this.contactEmail = contactEmail;
  };

  ban (user) {
    if(!User.isUser(user)) {
      throw new TypeError('user must be instance of User class');
    };

    if(user.isBanned) {
      return user;
    };

    user.isBanned = true;
  };
    
  unban (user) {
    if(!user.isBanned) {
      return user;
    };

    user.isBanned = false;
  };
};

const admin1 = new Admin('Petro', 'Petrov', 40);

admin1.ban(admin1); // admin1.isBanned = true (може забанити сам себе)

// /**
//  * 
//  * @param {number} a 
//  */
// function getAreOfFigure (a) {
//   return a*a;
// };

// /**
//  * 
//  * @param {number} a 
//  * @param {number} b 
//  */
// function getAreOfFigure (a, b) {
//   return a*b;
// };

// getAreOfFigure(2); // 4
// getAreOfFigure(3,8); // 24


// 2. Поліморфізм - можливість методів успадкованих класів працювати по різному
class Figure {
  constructor(name) {
    this.name = name;
  };

  getArea() {
    console.log(`this function will calculate area of ${this.name}`);
  };
};

class Rectangle extends Figure{
  constructor(a, b) {
    super('rectangle');
    this.a = a;
    this.b = b;
  };

  getArea() {
    return this.a * this.b;
  };

  static isFigure (value) {
    return value instanceof Figure;
  };
};

class Triangle extends Figure {
  constructor(a, h) {
    super('triangle');
    this.a = a;
    this.h = h;
  };

  getArea() {
    return this.a * this.h * 0.5;
  };
};

function getAreaOfFigure (figure) {
  if(Figure.isFigure(figure)) {
    return figure.getArea();
  };

  throw new TypeError('figure must be ibstance of Figure');
};

// task

// class Animal {
//     constructor (nickname, type = 'animal') {
//       this.nickname = nickname;
//       this.type = type;
//     };
  
//     move () {
//       console.log(`${this.nickname} is moving`);
//     }

//     sleep () {
//       console.log(`${this.nickname} is sleeping`);
//     };
  
//     eat () {
//       console.log(`${this.nickname} is eating`);
//     };
//   };

// class Snake extends Animal {
//   constructor (nickname, type) {
//     super(nickname, 'snake');
//   };

//   move () {
//     console.log('Snake is crawl');
//   };

//   eat () {
//     console.log('Sneak is eating mouses');
//   };
// };

// class Panther extends Animal {
//   constructor (nickname, type) {
//     super(nickname, 'panther');
//   };

//   move () {
//     console.log('Panther is runing');
//   };

//   eat () {
//     console.log('Panther is eating birds');
//   };
// };


// 3. Інкапсуляція - приховування внутрішнього стану та методів обʼєкту від зовнішнього світу
class Animal2 {
  // створення приватної властивості
  #secret;
  #hunger;
  #mood;
  #energy;

  constructor (nickname, type = 'animal') {
    this.nickname = nickname;
    this.type = type;

    // 0 (голодна) - 100 (сита)
    this.#hunger = 50;

    // 0 (стомлена) - 100 (повна сил)
    this.#energy = 50;

    // 0 (розлючена) - 100 (задоволена)
    this.#mood = 50;

    this.#secret = 'try find me';
  };

  get hunger () {
    return this.#hunger;
  };

  get energy () {
    return this.#energy;
  };

  get mood () {
    return this.#mood;
  };

  // приватні методи - можна запускати тільки в коді всередені класу
  #setMood (newMood) {
    if(typeof newMood !== 'number' || isNaN(newMood)) {
      throw new TypeError('you must give number');
    };

    if(newMood <= 100 && newMood >= 0) {
      this.#mood = newMood;
    } else if(newMood < 0 ) {
      this.#mood = 0;
    } else if (newMood > 100) {
      this.#mood = 100;
    }
  };

  #setHunger (newHunger) {
    if(typeof newHunger !== 'number' || isNaN(newHunger)) {
      throw new TypeError('you must give number');
    };

    if(newHunger <= 100 && newHunger >= 0) {
      this.#hunger = newHunger;
    } else if(newHunger < 0 ) {
      this.#hunger = 0;
    } else if (newHunger > 100) {
      this.#hunger = 100;
    }
  };

  #setEnergy (newEnergy) {
    if(typeof newEnergy !== 'number' || isNaN(newEnergy)) {
      throw new TypeError('you must give number');
    };

    if(newEnergy <= 100 && newEnergy >= 0) {
      this.#energy = newEnergy;
    } else if(newEnergy < 0 ) {
      this.#energy = 0;
    } else if (newEnergy > 100) {
      this.#energy = 100;
    }
  };

  move () {
    this.#setEnergy(this.energy - 5);

    this.#setHunger(this.hunger - 10);

    console.log(`${this.nickname} is moving`);
  }

  sleep () {
    this.energy += 50;

    console.log(`${this.nickname} is sleeping`);
  };

  eat () {
    const hungerSated = 5;
    
    this.hunger += hungerSated;

    this.mood += 10;

    console.log(`${this.nickname} is eating`);
  };
};

const animal1 = new Animal2('Myrzik', 'cat');

class Dog extends Animal2 {
  constructor(nickname) {
    super(nickname, 'dog')
  };

  sleep () {
    // this.#setEnergy(this.energy - 10); // error
  };
};


// 4. Абстракція - (не всіма вважається окремою концепцією)
/*
  полягає у виділенні найважливіших методів та властивостй обʼєкту для вирішення задач
  інші методи та деталі не реалізуються
  при цьому публічні методи, які залишаються у обʼєкті вважаються достатніми для ефективної роботи з ними
*/
class Computer {
  #isOn;
  constructor() {
    this.#isOn;
  }

  // низкорівневі (складні для розуміння для загальної маси людей) методи
  #applyCurrent() {};

  #enablePeriferuDevices() {};

  #startBIOS() {};

  #startOS() {};

  // високорівневий метод (простий у викорристанні)
  turnOn() {
    this.#applyCurrent();
    this.#enablePeriferuDevices();
    this.#startBIOS();
    this.#startOS();
  };
};


/*
  SOLID

    S - SRP (Single responsibility principle) - Принцип єдиної відповідальності
    O - OCP (Open/closed principle) - Принцип відкритості/закритості
    L - LSP (Liskov substitution principle) - Принцип підстановки Лісков
    I - ISP (Interface segregation principle) - Принцип розділення інтерфейсу
    D - DIP (Dependency inversion principle) - Принцип інверсії залежностей
*/

// Принциа єдиної відповідальності - кожен обʼєкт / метод / клас має мати лише одну річ якої він використовується
function calculateSalary(worker) {
  const salary = worker.hoursWorked * worker.hourlyRate;

  // const performaneReport = worker.hoursWorked ** 2;

  return salary;
};

function generateReport(worker, salary) {
  const performaneReport = worker.hoursWorked ** 2;
  return performaneReport;
};

// Принцип відкритості/закритості - код має бути відкритим для розширення але закритим для прямих змін
class Worker {
  constructor(fullName, hoursWorked, hourlyRate, education, workplace) {
    this.fullName = fullName;
    this.hoursWorked = hoursWorked;
    this.hourlyRate = hourlyRate;
    this.education = education;
    this.workplace = workplace;
  };
};

const workers = [];

class WorkerFilter {
  static filterByName(workers, fullName) {
    return workers.filter(worker => worker.fullname === fullName);
  };

  static filterByEducation(workers, education) {
    return workers.filter(worker => worker.education === education);
  };

  static filterByRate(workers, hourlyRate) {
    return workers.filter(worker => worker.hourlyRate === hourlyRate);
  };
};

const filterByProp = (array, propName, propValue) => {
  return array.filter(element => element[propName] === propValue);
};

// Принцип підстановки Лісков - екземпляри базового класу мають бути заміненими екземплярами успадкуючих класів без змін коду
// class Figure {
//   constructor(name) {
//     this.name = name;
//   };

//   getArea() {
//     console.log(`this function will calculate area of ${this.name}');
//   };
// };

// class Rectangle extends Figure{
//   constructor(a, b) {
//     super('rectangle');
//     this.a = a;
//     this.b = b;
//   };

//   getArea() {
//     return this.a * this.b;
//   };

//   static isFigure (value) {
//     return value instanceof Figure;
//   };
// };

// class Triangle extends Figure {
//   constructor(a, h) {
//     super('triangle');
//     this.a = a;
//     this.h = h;
//   };

//   getArea() {
//     return this.a * this.h * 0.5; // повертає число
//   };
// };

// Принцип розділення інтерфейсу - інтерфейс може бути поділений на спеціалізовані ще на стадії проєктування
class Product {
  constructor() {
    // ...
  };

  getDetails() {
    // ...
  };

  displayinFrontEnd() {
    // ...
  };

  // saveToDataBase() {
  //   // ...
  // };
};

class DigitalProduct extends Product{
  constructor() {
    super();
    // ...
  };

  // по умовам завдання saveToDataBase не має бути
};

class PhysicalProduct extends Product {
  constructor() {
    super();
    // ...
  };

  saveToDataBase() {
    // ...
  };
};

// Принцип інверсії залежностей - модулі вищих рівнів не мають залежати від модулів нижчих рівнів
class DeliveryService {};

class UkrPoshtaDelivery extends DeliveryService{};

class NovaPoshtaDelivery extends DeliveryService{};

// class Order {
//   constructor() {
//     // ...
//     this.deliveryService = new UkrPoshtaDelivery();
//   };
// };

class Order {
/**
 * @param {DeliveryService} deliveryService 
 */
  constructor(deliveryService) {
    // ...
    this.deliveryService = deliveryService;
  };
};


// DRY (Dont Repeat Yourself) - не повторюйся

// /**
//  * @param {object} data
//  * @returns {string}
//  */
// function generateAccessToken (data) {
//   // якийсь код генераціх токена
//   const token = data.toString();

//   return token;
// };

// /**
//  * @param {object} data
//  * @returns {string}
//  */
// function generateRefreshToken (data) {
//   // якийсь код генераціх токена
//   const token = data.toString();

//   return token;
// };

function generateToken (data, options) {
    // якийсь код генераціх токена
    const token = data.toString();

    return token;
};


// KISS (Keep It Simple Stupid) - між рішенням яке є складнішим для розуміння і більш простип кодом варто обирати саме простіший запис

const getVowelsNumberCompact = (str, vowelArray = ['a', 'e', 'i', 'o', 'u']) =>
  str
    .toLowerCase()
    .split('')
    .filter((l) => vowelArray.includes(l)).lenght;


