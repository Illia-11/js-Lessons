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
class Animal {
  // створення приватної властивості
  #secret;
  #hunger;
  #mood;
  #energy

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

const animal1 = new Animal('Myrzik', 'cat');

class Dog extends Animal {
  constructor(nickname) {
    super(nickname, 'dog')
  };

  sleep () {
    // this.#setEnergy(this.energy - 10); // error
  };
};