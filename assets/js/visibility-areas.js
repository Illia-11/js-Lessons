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