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

// const nums = [23, 24, 25];
// for (let i of nums) {
//   console.log(i);
// }

// nums.forEach(function (item) {
//   console.log(item);
// });

// const arr = [2, 3, 4, 5, 6];
// const arrFilter = arr.filter((item) => item % 2 === 0);
// const arrDouble = arr.map((x) => x * 2);
// console.log(arrFilter);
// console.log(arrDouble);

// const people = [
//   {
//     firstName: "John",
//     lastName: "Doe",
//     email: "john@gmail.com",
//     phone: "111-111-1111",
//     age: 30,
//   },
//   {
//     firstName: "Jane",
//     lastName: "Poe",
//     email: "jane@gmail.com",
//     phone: "222-222-2222",
//     age: 25,
//   },
// ];

// const youngPeople = people.map((items) => {
//   return {
//     name: items.firstName + items.lastName,
//     email: items.email,
//   };
// });
// console.log(youngPeople);

// const numbers = [2, -30, 50, 20, -12, -9, 7];
// const sum = 0;
// const positiveNumbers = numbers
//   .filter((x) => x > 0)
//   .reduce((acc, curr) => acc + curr, 0);
// console.log(positiveNumbers);

/* Document Object Model */
// const text = document.getElementById("main");
// console.log(text);
// console.log(text.textContent);
// // text.innerHTML = "<h3>document object model</h3>";
// document.querySelector("#main h4").innerText = "Hello";
// document.getElementById("main").id = "newid";
// document.getElementById("newid").setAttribute("class", "main");

// const parent = document.querySelector(".parent");
// const out = parent.children;
// console.log(out);
// console.log(parent);
// const child = Array.from(out);
// for (let i of child) {
//   console.log(i.innerText);
//   console.log(i.tagName);
//   console.log(i.className);
// }

// parent.firstElementChild.innerText = "ben";
// parent.firstElementChild.style.color = "yellow";

// parent.lastElementChild.innerText = "eden";
// parent.lastElementChild.style.color = "pink";

// const thirdChild = document.querySelector(".child:nth-child(3)");
// console.log(thirdChild.innerText);
// const secondChild = thirdChild.previousElementSibling;
// console.log(secondChild.innerText);
// const firstChild = secondChild.previousElementSibling;
// console.log(firstChild.innerText);
// console.log(firstChild.parentElement);

// const child = document.querySelector(".child");
// // child.parentElement.style.border = "1px solid black";

/* Insert After  */
// function insertAfter(newEl, existingEl) {
//   existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
// }
// const newEl = document.createElement("h3");
// newEl.innerText = "rushma";

// const existingEl = document.querySelector(".child:nth-child(1)");
// insertAfter(newEl, existingEl);

/* Replace content */

// function replaceItem1() {
//   const firstItem = document.querySelector(".child:nth-child(1)");
//   firstItem.outerHTML = "<h3>replaced Child1</h3>";
// }
// function replaceItem2() {
//   const firstItem = document.querySelector(".child:nth-child(2)");
//   const newEl = document.createElement("h3");
//   newEl.innerText = "replaced Child2";
//   firstItem.replaceWith(newEl);
// }

// replaceItem1();
// replaceItem2();

/* Event Listeners */

// const child1 = document.querySelector(".child:nth-child(4)");
// const child2 = document.querySelector(".child:nth-child(2)");
// function onDrag(e) {
//   child2.innerText = ` ${e.keyCode}`;
// }
// child1.addEventListener("keypress", onDrag);

/*window evenets*/
// window.addEventListener("resize", () => {
//   document.querySelector(
//     "h1"
//   ).innerText = `${window.innerWidth}x${window.innerHeight}`;
// });
// function toggle(e) {
//   e.target.classList.toggle("danger");
// }
// document.querySelector("button").addEventListener("click", toggle);

/* getting response and requesting using XMLHttpRequest*/
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "movies.json");
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(JSON.parse(this.responseText));
//     const data = JSON.parse(this.responseText);
//     data.forEach((content) => {
//       const li = document.createElement("li");
//       li.innerHTML = `<strong>${content.title} - ${content.year}</strong>`;
//       document.getElementById("results").appendChild(li);
//     });
//   }
//   // console.log(this.readyState);
//   // console.log(this.status);
// };
// xhr.send();

/* getting response and requesting using API*/
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://api.github.com/users");
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(JSON.parse(this.responseText));
//     const data = JSON.parse(this.responseText);
//     data.forEach((repo) => {
//       const li = document.createElement("li");
//       li.innerHTML = `<strong>${repo.login} - ${repo.id}</strong>`;
//       document.getElementById("results").appendChild(li);
//     });
//   }
//   // console.log(this.readyState);
//   // console.log(this.status);
// };
// xhr.send();

// function getData(endpoint) {
//   const xhr = new XMLHttpRequest();
//   xhr.open("GET", endpoint);
//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status == 200) {
//       console.log(JSON.parse(this.responseText));
//     }
//   };
//   setTimeout(() => {
//     xhr.send();
//   }, Math.floor(Math.random() * 3000) + 1000);
// }
// /* this may not print in given order*/
// // getData("movies.json");
// // getData("actors.json");

// /* this prints in given order*/
// getData("movies.json", (data) => {
//   console.log(data);
//   getData("actors.json", (data) => {
//     console.log(data);
//   });
// });

/* Callback hells have nested function, not prefer for large executions. promises are intoduced */
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task complete");
//     resolve();
//   }, 1000);
// });
// promise.then(() => {
//   console.log("Promise Consumed..");
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task complete");
//     resolve();
//   }, 1000);
// }).then(() => console.log("promise2 consumed.."));
// console.log("hello from global");
// function getData(endpoint) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", endpoint);
//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4 && this.status == 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject("something went wrong");
//       }
//     }}

//     setTimeout(() => {
//       xhr.send();
//     }, Math.floor(Math.random() * 3000) + 1000);
//   });
// }
// const moviesPromise = getData("movies.json");
// const actorsPromise = getData("actors.json");
// Promise.all([moviesPromise, actorsPromise]).then((data) => console.log(data));

/* Fetch for json */
// fetch("movies.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

/* if no request is mentioned by default it is get request*/
// fetch("movies.json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   });

// /* Fetch for text file */
// fetch("text.txt")
//   .then((response) => response.text())
//   .then((data) => console.log(data));

// /* Fetching from piblic API */
// fetch("https://api.github.com/users/d-rushma")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch("http://httpstat.us/200")
//   .then((res) => {
//     console.log(res);
//     return res;
//   })
//   .then(() => console.log("success"));

// fetch("http://httpstat.us/404")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error("Not Found");
//     }
//     return res;
//   })
//   .then(() => {
//     console.log("success");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/* alternative for promises and .thens*/
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ name: "rushma", id: 2 });
//   }, 1000);
// });

// // promise.then((data) => console.log(data));

// async function getPromise() {
//   const res = await promise;
//   console.log(res);
// }

// getPromise();

/* GEO LOCATION API*/

// function cS(pos) {
//   console.log(pos);
// }
// function cE(err) {
//   console.log(`Error: ${err.code} - ${err.message}`);
// }
// const options = {};
// navigator.geolocation.getCurrentPosition(cS, cE, options);

// const map = L.map("map").setView([0, 0], 2);

// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   attribution:
//     '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// }).addTo(map);

// const marker = L.marker([0, 0]).addTo(map);
// navigator.geolocation.getCurrentPosition(function (pos) {
//   const lat = pos.coords.latitude;
//   const long = pos.coords.longitude;
//   marker.setLatLng([lat, long]).update();
//   map.setView([lat, long], 13);
//   marker.bindPopup("<strong>My Location</strong>");
// });

/* CANVAS API */
// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// ctx.fillStyle = "yellow";
// ctx.fillRect(10, 10, 150, 100); //rectangle

// ctx.fillStyle = "black";
// ctx.arc(300, 300, 100, 0, Math.PI * 2); //circle
// ctx.fill();

// ctx.beginPath();
// ctx.strokeStyle = "pink";
// ctx.lineWidth = 6;
// ctx.moveTo(10, 10);
// ctx.lineTo(300, 300); // staright line
// ctx.stroke();

// ctx.font = "50px Calibri";
// ctx.fillStyle = "red";
// ctx.lineWidth = 4;
// ctx.fillText("Geometry", 200, 100);
// ctx.strokeText("Geometry", 200, 500); // takes linewidth of previous

/* Audio API */
// const audio = document.getElementById("mp3");
// const play = document.getElementById("play");
// const pause = document.getElementById("pause");
// const stop = document.getElementById("stop");
// const time = document.getElementById("current-time");
// const volume = document.getElementById("volume");

// play.addEventListener("click", () => audio.play());
// pause.addEventListener("click", () => audio.pause());
// stop.addEventListener("click", () => {
//   audio.pause();
//   audio.currentTime = 0;
// });

// audio.addEventListener("timeupdate", () => {
//   time.innerText = audio.currentTime;
// });

// volume.addEventListener("change", () => (audio.volume = volume.value));

/* OOPS */
// function Rectangle(name, width, height) {
//   this.name = name;
//   this.width = width;
//   this.height = height;
//   this.area = function () {
//     return width * height;
//   };
// }

//creating objects using prototype

// function Rectangle(name, width, height) {
//   this.name = name;
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype.area = function () {
//   return this.width * this.height;
// };

// const rect = new Rectangle("rect1", 20, 30);
// console.log(rect);
// console.log(rect.area());
// console.log(Object.prototype);
// console.log(Object.getPrototypeOf(rect));

// Inheritance using prototypical inheritance
// function Shape(name) {
//   //Shape constructor
//   this.name = name;
// }

// Shape.prototype.logName = function () {
//   //Shape method
//   console.log(`${this.name}`);
// };
// function Rectangle(name, width, height) {
//   //Rectangle constructor
//   Shape.call(this, name);
//   this.width = width;
//   this.height = height;
// }

// Rectangle.prototype = Object.create(Shape.prototype); // Inherting shape method

// function Circle(name, radius) {
//   //Circle method
//   Shape.call(this, name);
//   this.radius = radius;
// }

// const rect = new Rectangle("rect1", 20, 30);
// const circ = new Circle("rect1", 20, 30);
// console.log(rect);
// console.log(circ);
// rect.logName(); // invoking method

// function Player(name) {
//   this.name = name;
//   this.lvl = 0;
//   this.points = 0;
// }
// Player.prototype.gainXp = function (num) {
//   this.points += num;
//   if (this.points >= 10) {
//     this.lvl++;
//     this.points -= 10;
//   }
// };
// Player.prototype.describe = function () {
//   console.log(
//     `${this.name} is level ${this.lvl} with ${this.points} experience points`
//   );
// };
// let player1 = new Player("Bob");
// let player2 = new Player("Alice");
// player1.gainXp(5);
// player2.gainXp(7);
// player1.gainXp(3);
// player2.gainXp(2);
// player1.gainXp(8);
// player2.gainXp(4);
// player1.describe();

/* CLASSES */
