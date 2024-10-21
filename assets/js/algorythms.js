// Алгоритми - певна послідовність дій, які дають бажаний кінцевий результат

// 1. прийняти рядок тексту та масив голосних
function getVowelsNumber(str, vowelArray = ['a', 'e', 'i', 'o', 'u']) {
  // 2. переконатися що нам дали саме рядок тексту
  // if (typeof str !== 'string' || !str.trim()) {
  //   throw new TypeError('Type of data is incorrect! Enter a valid string!');
  // }

  // 3. створити лічільник голосних у рядку
  let vowelCount = 0;
  let lowerCaseStr = str.toLowerCase();

  // 4. пройтись циклом по рядку і для кожної літери перевірити че є вона у масиві голосних
  for (let i = 0; i < lowerCaseStr.length; i++) {
    // 4.1 якщо літера є у списку то збільшити лічільник
    if (vowelArray.includes(lowerCaseStr[i])) {
      vowelCount++;
    }
  }

  // 5. повернути значення лічільника
  return vowelCount;
}

/*
  оцінка швидкості алгоритму у часі робиться по кількості його операцій
  оцінка алгоритму по займаній памʼяті

  y = x (лінійна)
  y = x^2 (квадратична)
  y = log x (логорифмічна)
  y = 2^x (експоненціальна)
  y = x! (факторіал)

  при оцінці алгоритмів по часу:
    y - кількість операцій
    x - вхідні дані

  y = x^2 + 5x + 15
  y = 2^x + 55

  х = 1
  y = 1^2 + 5*1 + 15 = 21
  y = 2^1 + 55 = 57

  x = 8
  y = 8^2 + 5*8 + 15 = 119 операцій
  y = 2^8 + 55 = 311 операцій

  x = 200
  y = 400000 + 1000 + 15 = 41015
  y = 1.6*1000000000000000000000000000000 + 55

  Розрахунок складності алгоритмів
  x -> n (вхідні дані)
  y = n -> O(n)
  y = 2^n -> O(2^n)
*/

// O(1) - константна складність
const arr1 = [1, 5, 7, 20, 21, 4, -24];
function getElemOfArray (array, elemIndex) {
  return array[elemIndex];
}

// O(n) - лінійна складність
function getElemIndex (array, elemValue) {

  for(let i = 0; i < array.length; i++) {
    if(array[i] === elemValue) {
      return i;
    }
  }

  return -1;
}

getElemIndex(arr1, 21);

// O(n^2) - квадратична складність
/*
  1. проходимось по масиву та порівнюємо два сусідніх елементи
  2. якщо в першого значення більше ніж у другого, то міняємо іх місцями
  3. повторюємо ці дії поки найбільші значення не опиняться в кінці масиву, а найменше на початку
*/
function bubbleSort (array) {
  for(let i = 0; i < array.length; i++) {
    // O (n * n) = O(n ^ 2)
    for(let j = 1; j < array.length; j++) {
      let value1 = array[j - 1];
      let value2 = array[j];

      if(value1 < value2) {
        array[j] = value1;
        array[j - 1] = value2;
      }
    }

    // O (n * n * n) = O(3n)
    for(let k = 0; k < array.length; k++) {}
  }

  // O (n + n) = O (2n) = O(n)
  // for(let k = 0; k < array.length; k++) {}

  return array;
}