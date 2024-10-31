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

  const width = monitor.sizes.width.value
  const height = monitor.sizes.height.value

  return Math.sqrt(width * width + height * height)
}