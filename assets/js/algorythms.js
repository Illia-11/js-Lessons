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