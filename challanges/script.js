/*OBJECT CHALLANGE*/
// const library = [
//   {
//     title: "Harry Potter1",
//     author: "jk.rowling",
//     status: { own: true, reading: false, read: false },
//   },
//   {
//     title: "Harry Potter2",
//     author: "jk.rowling",
//     status: { own: true, reading: false, read: false },
//   },
//   {
//     title: "Harry Potter3",
//     author: "jk.rowling",
//     status: { own: true, reading: false, read: false },
//   },
// ];
// console.log(library);
// library[0].status.read = true;
// library[1].status.read = true;
// library[2].status.read = true;
// console.log(library);

// const str = JSON.stringify(library);
// console.log(str);

/*Function Challange*/

// const cel = (deg) => ((deg - 32) * 5) / 9;
// console.log(cel(32));

// function minMax(arr) {
//   const x = Math.min(...arr);
//   const y = Math.max(...arr);

//   return {
//     x,
//     y,
//   };
// }
// console.log(minMax([1, 2, 3, 4, 5, 6]));

/* Calculator Challange */
// function calculator(num1, num2, op) {
//   switch (op) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;
//     default:
//       return `not an operator`;
//   }
// }
// console.log(calculator(4, 5, "+"));

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
    if (i % 5 == 0) console.log("FizzBuzzzz");
  } else if (i % 5 == 0) {
    console.log("Buzzzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i);
  }
}
