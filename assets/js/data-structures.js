class LinkedListNode {
  #next;
  #prev;
  constructor(data) {
    this.data = data;
    this.next = null; // вказівник на наступний вузол у списку
    this.prev = null; // вказівник на попередній вузол у списку
  }

  get next() {
    return this.#next;
  }

  get prev() {
    return this.#prev;
  }

  set next(node) {
    if(node === null || LinkedListNode.isLinkedListNote(node)) {
      this.#next = node;
      return;
    }

    throw new TypeError('Invalid node value');
  }

  set prev(node) {
    if(node === null || LinkedListNode.isLinkedListNote(node)) {
      this.#prev = node;
      return;
    }

    throw new TypeError('Invalid node value');
  }

  static isLinkedListNote(value) {
    return value;
  }
}

class DoubleLinkedList {
  #head;
  #tail;
  constructor() {
    this.head = null; // перший вузол у списку
    this.tail = null; // останній вузол у списку
    this.length = 0; // довжина списку
  }

  get head() {
    return this.#head;
  }

  get tail() {
    return this.#tail;
  }

  set head(node) {
    if(node === null || LinkedListNode.isLinkedListNote(node)) {
      this.#head = node;
      return;
    }

    throw new TypeError('Invalid node value');
  }

  set tail(node) {
    if(node === null || LinkedListNode.isLinkedListNote(node)) {
      this.#tail = node;
      return;
    }

    throw new TypeError('Invalid node value');
  }

  // вставка значення у кінець списку
  push(data) {
    /*
      1. Створити новий вузол списку
      2. Вставити вузол у список
        2.1 якщо список пустий: зробити вузол і головою і хвостом списку
        2.2 якщо список не пустий:
          2.2.1 новий вузол має вказувати на попередній хвіст
          2.2.2 попередній хвіст маж вказувати на новий вузол як на наступний
          2.2.3 маємо змінити хвіст на новий елемент
      3. Збільшити довжину списку
      4. Повернути довжину списка
    */

      // 1. Створити новий вузол списку
      const newNode = new LinkedListNode();

      // 2.1 якщо список пустий: зробити вузол і головою і хвостом списку
      if(this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }

      this.length++;

      return this.length;
  }

  // видалення останнього вузла зі списку
  pop() {
    /*
      1. Якщо список пустий: нічого не робимо взагалі
      2. Якщо він не пустий:
        2.1 зберігаємо останній вузол в окрему змінну
        2.2 змінюємо хвіст на передостанній елемент
        2.3 перевіряємо чи існує передостанній елемент (чи довжина дорівнює 1)
          2.3.1 якщо не існує то head встановлюємо в null
          2.3.2 передостанньому елементу змінємо next на null (опціонально витираємо останньому елементу prev)
      3. Змінюємо довжину
      4. Повертаємо вузол, який видалили зі списку
    */

    // 1. Якщо список пустий: нічого не робимо взагалі
    if(this.length === 0) {
      return undefined;
    }

    // 2.1 зберігаємо останній вузол в окрему змінну
    const deletedNode = this.tail;
    const prevNode = deletedNode.prev;

    // 2.2 змінюємо хвіст на передостанній елемент
    this.tail = deletedNode.prev;

    // 2.3 перевіряємо чи існує передостанній елемент (чи довжина дорівнює 1)
    if(this.length === 1) {
      // 2.3.1 якщо не існує то head встановлюємо в null
      this.head = null;
    } else {
      // 2.3.2 передостанньому елементу змінємо next на null (опціонально витираємо останньому елементу prev)
      prevNode.next = null;
      deletedNode.prev = null;
    }

    // 3. Змінюємо довжину
    this.length--;

    // 4. Повертаємо вузол, який видалили зі списку
    return deletedNode;
  }

  [Symbol.iterator] () {
    return new LinkedListIterator(this);
  }
}

class LinkedListIterator {
  constructor(list) {
    this.list = list;
    this.currentNode = null;
  }

  next() {
    if(currentNode) {
      this.currentNode = this.currentNode.next;
    } else {
      this.currentNode = this.list.head;
    }

    return {
      done: !this.currentNode,
      value: this.currentNode
    };
  }
}

const list1 = new DoubleLinkedList();


list1[Symbol.iterator] = function() {

  let currentNode = null;

  const iterator = {
    next: function() {

      // if(currentNode) {
      //   currentNode = currentNode.next;
      // } else {
      //   currentNode = list1.head;
      // }

      this.currentNode = this.currentNode ? this.currentNode.next : this.list.head;

      const obj = {
        done: !currentNode,
        value: currentNode
      };
        
      return obj;
    }
  }

  return iterator;
}


// const listIterator = list[Symbol.iterator]();

for(const node of list1) {
  console.log(node);
}