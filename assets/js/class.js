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

const house3 = new House ();
const house4 = new House (1, 2, 'addres1', 4000);;
