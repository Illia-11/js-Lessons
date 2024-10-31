/*
  Деструктуризація = особливий спосіб створення змінних
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
