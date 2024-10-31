// Set (множина) - коллекція, яка зберігає всередині себе унікальні значення

// створення множин
const set1 = new Set()

// створення заповевної множини
const set2 = new Set([100,2,345,400,5000])

// додавання елементів до існуючого сету
set1.add(10)
set1.add('test')
set1.add(false)
set1.add('10')
set1.add([1,2,3])
set1.add([1,2,3])
set1.add({})
set1.add({})

const user = {name: 'test'}
const sameUser=  user
set1.add(user)
set1.add(user) // не додасть
set1.add(sameUser) // не додасть

console.log(set1)

// виадлення конкретного значення
const deleteResult = set1.delete('10')
const deleteResult2 = set1.delete(12)
/*
  deleteResult
    true - якщо елемент був видалений
    false - якщо елемента у сеті не було
*/
set1.delete({}) // не видалить

console.log(set1)
console.log(deleteResult) // true
console.log(deleteResult2) // false

// повністю очистити сет
set1.clear()

console.log(set1)

// перевірити наявність елементу у сеті
const hasResult1 = set2.has(3)
const hasResult2 = set2.has(30)

console.log(hasResult1) // true
console.log(hasResult2) // false

// обхід по сету
set2.forEach((elem, alsoElem, set) => {
  // console.log(`elem is ${elem}`)
  // console.log(`alsoElem is ${alsoElem}`)
  // console.log(`set is ${set}`)
})

const arrWithDuplicates = [1,2,3,5,7,1,9,8,5,8,2]

const set3 = new Set(arrWithDuplicates)

const arrWithUniqueNumbers = [...set3] // або так

const arrWithUniqueNumbers2 = [...new Set([1,2,3,5,7,1,9,8,5,8,2])] // або так

console.log(arrWithUniqueNumbers2)

// task
/*
  створити 2 масиви з іменами
  за допомогою Set отримати з них один масив з унікальними іменами
  деякі імена мають бути присутні в обох початкових масивах
*/
const nameArray1 = ['Oleg', 'Anton', 'Petro', 'Olga']

const nameArray2 = ['Anton', 'Natalia', 'Timur', 'Petro']

const arrWithUniqueNames = [...new Set([...nameArray1, ...nameArray2])]

console.log(arrWithUniqueNames)

// Map (мапа, карта, словник, асоціативний масив) - колекція, яка зберагіє пари
// ключ - значення

const obj = {
  key: 'value',
  0: 'test',
  [Symbol('private')]: true
}

for(const key in obj) {
  console.log(key)
}

/*
  відмінності мапи від обʼєкта:
    1. мапа запамʼятовує порядок вставки даних
    2. мапа може використовувати будь-який тип даних у якості ключа
    3. мапа знає скільки елементів в ній знаходитсья
    4. є ітератор (тобто буде легше пройтися по всім елементам мапи)
    5. швидше працює при додаванні або видаленні значень
*/

// створення пустої мапи
const map1 = new Map()

// створення заповненої мапи
const map2 = new Map([
  // кортежі (tuples)
  // масиви з конкретною кількістю елементів та певним порядком розміщення цих елементів
  ['key', 'value'],
  ['key 2', 'value 2'],
  [3, true],
  [{name: 'User'}, [1,2,3,4,5]]
])

// додавання або перезаписування елементів до мапи
map1.set('key', 'value')
map1.set(1, true)
map1.set('123', null)
map1.set('123', [1,2,3,4,5])

const sum = (...numbers) => numbers.reduce((acc, num) => acc += num)

map1.set(sum, 'my key is a function')

map1.set({}, 1)
map1.set({}, 2)

const user1 = {}

map1.set(user1, 3) // це не додасть
map1.set(user1, 4)

// отримання значень з мапи

const value1 = map1.get(user1)
const value2 = map1.get('123')
const value3 = map1.get(sum)

const value4 = map1.get(-2135568925) // undefined

// перевірка на наявність елемента по ключу
const has123Key = map1.has(123) // true
const has4Key = map1.has(4) // false

// видалення запису по ключу
const deleteRes = map1.delete(123)
const deleteRes2 = map1.delete(4) // false

// очистка мапи
map1.clear()

// розмір мапи
console.log(map1.size)

// forEach
map1.forEach((value, key, map) => {
  console.log(`value is`)
  console.log(value)
  console.log(`key is`)
  console.log(key)
  console.log(`map is`)
  console.log(map)
})

// cache

// уявна функція, яка довго працює
function expensiveCalculations(user) {
  // якісь складні довгі обчислення
  for(let i = 0; i < 1_000_000; i++) {}

  user.salary = user.salary ? user.salary + 10 : 100

  return user
}

console.log(expensiveCalculations(5))

const cache = new Map()

function effectiveCalculations(user) {
  if(cache.has(user)) {
    return cache.get(user)
  }

  const result = expensiveCalculations(user)
  cache.set(user, result)

  return result
}

const res1 = effectiveCalculations(user1)

console.log(res1)

const user2 = {
  salary: 20
}

const res2 = effectiveCalculations(user2)

console.log(res2)

const res3 = effectiveCalculations(user2)

console.log(res3)


// task 2
/*
  Створити функцію яка буде приймати рядок
  функція має створювати мапу та повертати її як свй результат
  у мапі мають бути наступні дані:
    ключами мапи будуть символи рядка
    значеннями мапи кількість цих символів у рядку
  
    мапа має ігнорувати симовли яки не є буквами або цифрами (пробіли, коми, крапки ...)

  const str = 'test, text.';

  const map = calculateLetters(str);

  map:
    t => 4,
    e => 2,
    s => 1,
    x => 1
*/
// function calculateLetters(str) {
//   const map = new Map()

//   for(let i of str){
//     if(/[a-zA-Z0-9]/.test(i)) {
//       i = i.toLowerCase()
//       map.set(i, (map.get(i) || 0) + 1)
//     }
//   }

//   return map
// }

// const result = calculateLetters('text, test')
// console.log(result)

// або

function createLettersMap(str, ignoredSymbols = [' ', ',', '.', '!', '-']) {
  const letterMap = new Map()

  // const ignoredSymbols = [' ', ',', '.', '!', '-']

  for(const letter of str) {
    // if(letterMap.has(letter)) {
    //   letterMap.set(letter, letterMap.get(letter) + 1)
    // } else {
    //   letterMap.set(letter, 1)
    // }

    if(ignoredSymbols.includes(letter)) {
      letterMap.set(letter, letterMap.has(letter) ? letterMap.get(letter) + 1 : 1)
    }
  }

  return letterMap
}

const str = 'test, text'

const letterMap1 = createLettersMap(str)
console.log(letterMap1)


// keys, values, entries

// keys - прохід по всім ключам мапи

const mapKeysIterator = letterMap1.keys()

for(const key of letterMap1.keys()) {
  console.log(key)
}

// values = прохід по всім значенням в записсах мапи

for(const value of letterMap1.values()) {
  console.log(value)
}

// entries - повертає ітератор з входженням у мапу
console.log('entries below')
for(const entry of letterMap1.entries()) {
  console.log(entry) // кортежі записів мапи

  let key = entry[0]
  let value = entry[1]

  console.log(key)
  console.log(value)
}

// теж саме що і letterMap1.entries
for(const data of letterMap1) {
  console.log(data)
}

// на основі мапи зробити її копію
const mapCopy = new Map([
  ...letterMap1,
  // ...map1,
  // ...map2
])

// для сетів ці методи працюю аналогічно, але так як у сетів немає ключів - то замість ключів дають значення
for(const key of set3.keys()) {
  console.log(key) // насправді value
}

for(const value of set3.values()) {
  console.log(value) // value
}

for(const entry of set3.entries()) {
  console.log(entry) // кортеж форми [value, value]
}

// стандартний ітератор - values
for(const entry of set3) {
  console.log(entry)
}

/*
  Object.keys(obj) - повертає масив ключів обʼєкта
  Object.values(obj) - повертає масив значень обʼєкта
  Object.entries(obj) - повертає масив кортежів форми [key, value]
*/

const obj1 = {
  firstName: 'User',
  lastName: 'Userenko',
  age: 12,
  isMale: true,
  [Symbol('test')]: 'test',
  0: 'data'
}

const arrayOfKeys = Object.keys(obj1)
console.log(arrayOfKeys)

const arrayOfValues = Object.values(obj1)
console.log(arrayOfValues)

const arrayOfEntries = Object.entries(obj1)
console.log(arrayOfEntries)
