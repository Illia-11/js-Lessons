/**
 * 
 */
function O1dHouse(floors = 1, apartmentPerFloor = 5, address = 'default_address', priceOfApartment = 100000) {
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

House.prototype = housePrototype;

const house1 = new O1dHouse(3, 4, 'test address', 5000);
const house2 = new O1dHouse();
