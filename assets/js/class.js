/**
 * 
 */
function OldHouse(floors = 1, apartmentPerFloor = 5, address = 'default_address', priceOfApartment = 100000) {
  this.floors = floors;
  this.apartmentPerFloor = apartmentPerFloor;
  this.address = address,
  this.priceOfApartment = priceOfApartment;

  // this.getFullHouseData = function() {
  //   return `This house address: ${this.address}, has ${this.floors} floors with ${this.apartmentPerFloor} on each floor. Each apartment costs ${this.priceOfApartment}`;
  // }
};

// const HousePrototype = {
//   getFullHouseData : function() {
//     return `This house address: ${this.address}, has ${this.floors} floors with ${this.apartmentPerFloor} on each floor. Each apartment costs ${this.priceOfApartment }`;
//   }

function HousePrototype () {
  this.getFullHouseData = function() {
    return `This house address: ${this.address}, has ${this.floors} floors with ${this.apartmentPerFloor} on each floor. Each apartment costs ${this.priceOfApartment}`;
  }
  this.id = NaN;
}

const housePrototype = new HousePrototype();

OldHouse.prototype = housePrototype;

const house1 = new OldHouse(3, 4, 'test address', 5000);
const house2 = new OldHouse();

// клас - новий синтаксис написання функції-конструкторів

// вираз класу
const Test = class {};


function someWeirdFunction (classFunc) {};
someWeirdFunction(Test);

function classGenerator (...args) {
  return class {};
};

// декларація класу
class House {
  constructor (
    floors = 1, 
    apartmentPerFloor = 5, 
    address = 'default_address', 
    priceOfApartment = 100000
  ) {
    this.floors = floors;
    this.apartmentPerFloor = apartmentPerFloor;
    this.address = address,
    this.priceOfApartment = priceOfApartment;
  };

  getFullHouseData () {
    return `This house address: ${this.address}, has ${this.floors} floors with ${this.apartmentPerFloor} on each floor. Each apartment costs ${this.priceOfApartment}`;
  };
};

// const house3 = new House ();
// const house4 = new House (1, 2, 'addres1', 4000);


class newHouse {
  // тіло класу
  // весь код автоматично виконується у суворому режимі

  // функція-конструктор, запускається при створення через new
  // в класі може бути не більше одного constructor
  constructor (floors = 1, apartmentPerFloor = 2, address = 'address2', priceOfApartment = 9000) {
    this.floors = floors;
    this.apartmentPerFloor = apartmentPerFloor;
    this.address = address;
    this.priceOfApartment = priceOfApartment;
  };

  // методи прототипу
  getFullHouseInformation () {
    return `This house address: ${this.address}, has ${this.floors} floors with ${this.apartmentPerFloor} on each floor. Each apartment costs ${this.priceOfApartment}`;
  };

  // властивість прототипу (спільна однакова властивість всіх будинків)
  id = NaN;

    /**
   * Повертає правду якщо аргумент був створений за допомогою конструктора Product
   * @param {*} obj
   * @returns {boolean}
   */
  static isHouse (obj) {
    // const isObjAHouse = obj instanceof House;
    // return isObjAHouse;

    return obj instanceof House;
  }
};

const house3 = new newHouse ();
const house4 = new newHouse (1, 2, 'addres1', 4000);

// створення екземпляра без new завжди викликає помилку
// const house5 = newHouse (1, 2, 'addres1', 4000); // Error

// class task

class Product {
  /**
   * @constructor
   * @param {string} name 
   * @param {number} price 
   * @param {number} amount 
   * @param {boolean} isForAdult 
   */
  constructor (name, price, amount, isForAdult) {
    // this.name = name;
    // this.price = price;
    // this.amount = amount;
    // this.isForAdult = isForAdult;

    // _ означає, що розробник не рекомендує лізти до цих властивостей
    this._name = name; // цу вже використовується сеттер name
    this._price = price;
    this._amount = amount;
    this._isForAdult = isForAdult;

    this.setterTarget = null;
  };
    
  // геттер - псевдовластивість, яка повертає яке значення
  get test() {
    return `some test value`;
  };

  // просто повертаємо значення службової властивості
  get name () {
    return this._name;
  };

  get price () {
    return this._price;
  };

  get amount () {
    return this._amount;
  };

  get isForAdult () {
    return this._isForAdult;
  };


  // сеттер (встановлювач) - створює якусь псевдовластивість при спробі записати яку змінюється якась інша властивість
  set setterName (x) {
    if(typeof x !== ' string') {
      throw new TypeError('bad type');
    }

    this.setterTarget = x;
  };

  // встановлюємо нове значення для службової властивості
  // product.name = 123456;
  set name (newName) {
    if(typeof newName !== 'string' || newName.trim().length === 0) {
      throw new TypeError('Name of product must be string');
    };

    this._name = newName; // тут зʼвляється _name у обʼєкті продукта
  };

  set price (newPrice) {
    if(typeof newPrice !== 'number' || isNaN(newPrice)) {
      throw new TypeError('Price of a product must be numeric');
    };

    if(newPrice < 0) {
      throw new RangeError('Price of a product must be positive');
    }

    this._price = newPrice;
  };

  set amount (newAmount) {
    if(typeof newAmount !== 'number' || isNaN(newAmount)) {
      throw new TypeError('Amount of a product must be numeric');
    }

    if(newAmount < 0) {
      throw new RangeError('Amount of a product must be positive');
    }

    this._amount = newAmount;
  };

  set isForAdult (newIsForAdult) {
    if(typeof newIsForAdult !== 'boolean') {
      throw new TypeError('Only true or false');
    }

    this._isForAdult = newIsForAdult;
  };

  getPriceOfAllProduct () {
    // return `Загальна вартість всіх одиниць товару '${this.name}' = ${this.price * this.amount} грн`; 
    // якщо треба повернути лише число або булеве значення - краще вказати тільки його

    return this._price * this._amount;
  };

  // статичний метод - метод, який буде у самого класу, а не у його екземплярів (конкретних обʼєктів)
  static someStaticMethod2 () {
    console.log('someStaticMethod2');
  };

  // статична властивість - властивість, яка буде у самого класу, а не у його екземплярів (конкретних обʼєктів)
  static staticProperty = 'This is static property of Product class';

  /**
    Повертає правду якщо аргумент був створений за допомогою конструктора Product
   * @param {*} obj 
   * @returns {boolean}
   */
  static isProduct (obj) {
    return obj instanceof Product;
  };
};


const product1 = new Product('ice cream', 40, 10, false);
const product2 = new Product('water', 20, 30, false);
const product3 = new Product('beer', 100, 5, true);

const owner1 = {
  name: 'Owner 1',
  email: 'owner1@gmail.com',
  balance: 5000
};

// alert(`Загальна вартість всіх одиниць товару '${product1.name}' = ${product1.getPriceOfAllProduct()} грн`);

// if(owner1.balance >= (product1.price * product1.amount)) {
if(owner1.balance >= product1.getPriceOfAllProduct()) {
  console.log('Owner 1 can buy all ice cream');
} else {
  console.log('Owner 1 can not buy all ice cream');
};

const product4 = new Product('name', 2, 2000, false);

console.log(product4.getPriceOfAllProduct()); // 4000

// Array.isArray(product4);

// const data1 = 'bvcxf';

// const testArray = [];

// testArray.isArray(data1);

// testArray.push('some data');

// Array.push(testArray, 'some data');


Product.someStaticMethod1 = function () {
  console.log('its static method of Product class');
};