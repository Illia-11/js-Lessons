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
    if(typeof name !== 'string' || name.trim().length === 0) {
      throw new TypeError('Name of product must be string');
    };

    if(typeof price !== 'number' || isNaN(price)) {
      throw new TypeError('Price of a product must be numeric');
    }

    if(price < 0) {
      throw new RangeError('Price of a product must be positive');
    }

    if(typeof amount !== 'number' || isNaN(amount)) {
      throw new TypeError('Amount of a product must be numeric');
    }

    if(amount < 0) {
      throw new RangeError('Amount of a product must be positive');
    }

    if(typeof isForAdult !== 'boolean') {
      throw new TypeError('Only true or false');
    }

    this.name = name;
    this.price = price;
    this.amount = amount;
    this.isForAdult = isForAdult;
  };

  getPriceOfAllProduct () {
    // return `Загальна вартість всіх одиниць товару '${this.name}' = ${this.price * this.amount} грн`; 
    // якщо треба повернути лише число або булеве значення - краще вказати тільки його

    return this.price * this.amount;
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

console.log(product4.getPriceOfAllProduct());
