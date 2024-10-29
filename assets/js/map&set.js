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