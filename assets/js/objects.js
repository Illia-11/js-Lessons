// Об'єкти

// приклад даних користувача
// ПОГАНО
const user1Name = 'testUser';
const user1Email = 'test@test.test';
const user1Age = 15;

// приклад об'єкта
const object1 = {
  // об'єкт - набір властивостей
  // приклад властивостей об'єкта
  // ключами можуть бути тільки рядки або символи
  // значенням можуть бути будь-які типи даних
  key1 : 'value 1',
  key2 : true,
  key3 : 100,
  // метод - властивість об'єкта, значенням якого є функція
  key4: function() {
  }
};

const citramon = {
  type: 'таблетки',
  doze: 2,
  pirce: 150,
  isSoldFree: true,
  maxAmount: 20,
  amount: 14
}

const phone = {
  brand: 'Apple',
  model: '12 Pro',
  price: 6579803576804365,
  isOn: false,
  color: 'Pacific Blue',
  callSmb: function() {
    alert('дзвонимо комусь. Тут будуть гудки');
  }
}