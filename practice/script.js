// Object Literal
/* const todo1 = {};
todo1.task1 = "javascript";
//Object Constructor
const todo2 = new Object();
todo2.task2 = "react";
const tasks = { ...todo1, ...todo2 };
console.log(tasks);
console.log(Object.keys(tasks));
console.log(Object.values(tasks));
*/

/* JSON - javascript object notation

data interchnage format
structure is similar to js object literals
list of object literals
keys enclosed with double quotes
convert an object literal into json format using JSON.stringify(tasks)
convert json format to object literal use JSON.parse(str)
 */

// Functions
// Declaration, defining, invoking, parameters, arguments
// creating variable with var is not block scope which is not preferable in working with functions
// adds variable to global scope

// function declaration, we can invoke it before declaration

// function add(num1, num2) {
//   return num1 + num2;
// }

// console.log(add(34, 32));

// // function expression, pops error if invoke before declaration
// const mix = function (num3, num4) {
//   return num3 + num4;
// };
// console.log(mix(34, 32));

// // arrow functions

// const sub = (num5, num6) => {
//   return num5 - num6;
// };
// console.log(sub(34, 32));

/* && returns first falsy or last true value */
// a = 10 && 30; // 30 returns first falsy or last true value
// a = 10 && 30 && 40; // 40 returns first falsy or last true value
// a = 10 && 0 && 40; // 0 returns first falsy or last true value
// console.log(a);

/* || returns first thruthy or last true value */
/* ?? returns the right side operand when left is null or undefined */

// &&= assigns right side value only if left side operand is truthy
// ||= assigns right side value only if left side operand is falsy
// ??= assigns right side value only if left side is null or undefined

/* Ternary Operator*/
// const c = 23;
// c > 20 ? console.log(23) : console.log(2);

const nums = [23, 24, 25];
for (let i of nums) {
  console.log(i);
}
