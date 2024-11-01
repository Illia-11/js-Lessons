/*
  Деструктуризація - особливий спосіб створення змінних
*/

const monitor = {
  price: 9999.99,
  manufacturer: 'LG',
  model: '321asd123dsa',
  color: 'black',
  isInStock: true,
  sizes: {
    height: {
      value: 32,
      unitOfMeasure: 'cm'
    },
    width: {
      value: 68,
      unitOfMeasure: 'cm'
    }
  }
}

// колір монітору
console.log(monitor.color);

// значення ширини монітора
console.log(monitor.sizes.width.value)

// створити функцію, яка рахує діагональ монітора
function calculateDiagonal(monitor) {
  // const width = monitor.sizes.width.value
  // const height = monitor.sizes.height.value

  const {sizes: {width: {value: width}, height: {value: height}}} = monitor

  return Math.sqrt(width * width + height * height)
}

const car = {
  price: 1235645754,
  model: 'CX-60'
}

const model = car.model

// Деструктуризація обʼєктів

const {
  color, 
  price, 
  model : monitorModel,
  sizes: {
    width: {value}
  }
} = monitor

console.log(color) // === monitor.color
console.log(price) // === monitor.price
console.log(monitorModel) // === monitor.model

// bad
// const {sizes} = monitor
// const {width: monitorWidthObj} = sizes
// const {value: width} = monitorWidthObj

// good
// const {sizes: {width: {value}}} = monitor
console.log(value) // 68

const user = {
  id: 12,
  firstName: 'John',
  lastName: 'Doe',
  email: 'johnDoe@gmail.com',
  password: '12345qwer'
}

// rest у деструктуризації обʼєкта створює новий обʼєкт у якому будуть всі недеструктуровані дані
const {password, ...userWithoutPassword} = user

// Деструктуризація масивів / ітерабельних обʼєктів

const numbers = [50, 156.6, -574, 0, NaN, -2, 5]

// створити змінну у яку покласти 1 елемент масиву
// const firstElem = numbers[0]

const [firstElem, secondElem, third, fourth] = numbers

// якщо елемент треба пропустити - просто поставити кому без назви
const [,, thirdElem, fourthElem] = numbers

// rest оператор завжди створить масив з недеструктуризованими елементами
const [firstNumber, secondNumber,, ...restNumbers] = numbers


const testMap = new Map([
  ['user1', {name: 'Test User'}], 
  ['user2', {name: 'Null Undefined'}]
])

for(const [key, {name}] of testMap) {

  console.log(key)
  console.log(name)
}