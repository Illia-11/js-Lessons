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