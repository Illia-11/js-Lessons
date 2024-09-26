// Масиви (arrays) - структури ланих для збереження великої кількості (зазвичай) однотипних даних

// const vipEmail1 = 'vjkflds@gmail.com';
// const vipEmail2 = 'mhtvfds@hotmail.com';
// const vipEmail3 = 'sbutvrbv@gmail.com';

// const vipEmails = {
//   user1: 'vjkflds@gmail.com',
//   user2: 'mhtvfds@hotmail.com',
//   user3: 'sbutvrbv@gmail.com',
//   user3: 'bvjkdslb@hotmail.com'
// };

// const vipEmails = {
//   0: 'vjkflds@gmail.com',
//   1: 'mhtvfds@hotmail.com',
//   2: 'sbutvrbv@gmail.com',
//   3: 'bvjkdslb@hotmail.com'
// };

// 
const vipEmails = new Array(
  'vjkflds@gmail.com', 
  'mhtvfds@hotmail.com', 
  'sbutvrbv@gmail.com', 
  'bvjkdslb@hotmail.com'
);

console.log(typeof vipEmails); // object
console.log(vipEmails);
console.log(vipEmails.length); // 4 (довжина масива)

console.log(vipEmails[2]); // елемент з індексом 2
