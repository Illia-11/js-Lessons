// task1 
// let num1 = 5;
// let num2 = 10;
// let numSum = num1 + num2;
// console.log(numSum) 

// // task2
// let minus = numSum - 50;
// console.log(minus);

// // task3
// let mult = minus * numSum;
// console.log(mult);

// // task4
// let div = mult / 2.687;
// console.log(div);
// let rem = mult % 2.687;
// console.log(rem);

// // task5
// let toStr = '' + numSum;
// console.log(toStr);

console.log('task 1');

function factorial (n) {
  if (n === 0 ) {
    return 1;
  } else {
    return n * factorial(n - 1);
  };
};
console.log(factorial(3));


console.log('task 2');

function sumTo (n) {
  if (n == 1) {
    return 1;
  };

  return n + sumTo(n - 1);
};
console.log(sumTo(2));


console.log('task 3');

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
function printList(list) {
  console.log(list.value);

  if (list.next) {
    console.log(list.next);
  };
};
console.log(printList(list));

// console.log('========')

// class OrderTracker {
//   constructor() {
//     this.order = new Map()
//   }
//   addOrder(user) {
//     this.order.set(user, (this.order.get(user) || 0) +1)
//   }
//   getOrderCount(user) {
//     return this.order.get(user) || 0
//   }
//   removeUser(user) {
//     this.order.delete(user)
//   }
// }
// const tracker = new OrderTracker()
// tracker.addOrder("Alice");
// tracker.addOrder("Alice");
// tracker.addOrder("Bob");
// console.log(tracker.getOrderCount("Alice")); // 2
// console.log(tracker.getOrderCount("Bob")); // 1
// tracker.removeUser("Bob");
// console.log(tracker.getOrderCount("Bob")); // 0

// console.log('========')