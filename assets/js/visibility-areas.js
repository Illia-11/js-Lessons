//  області видимості

// позначаються {}, але не у випадку коли ви присвоюєте {} змінній

// це не область видимості
// let text = {};

let number = 10;

console.log(number); // 10

const testFunc = function(){
  let number = 5;
  console.log(number); // 5

  if(true) {
    let number2 = 100;

    console.log(number); // 5
    console.log(number2); // 100
  }

  // console.log(number2); // error
}
console.log(number); // 10

testFunc();

console.log(number); // 10


// Чому var поганий

// робить точку зупинки скрипта для дебагера
// debugger;

// 1000 > 100 && 12 < 111

// var varVariable1 = 'var 1';
// console.log(varVariable1);
// varVariable1 = 'change';
// console.log(varVariable1);
// const carTestingFunction = function() {
//   var varVariable1 = 5;
//   console.log(varVariable1); // 5
//   if(true) {
//     var varVariable2 = 'var';
//     console.log(varVariable1); // 5
//     console.log(varVariable2); // 100
//   }
// }
// carTestingFunction();