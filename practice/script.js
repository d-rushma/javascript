// Object Literal
const todo1 = {};
todo1.task1 = "javascript";
//Object Constructor
const todo2 = new Object();
todo2.task2 = "react";
const tasks = { ...todo1, ...todo2 };
console.log(tasks);
console.log(Object.keys(tasks));
console.log(Object.values(tasks));

/* JSON - javascript object notation

data interchnage format
structure is similar to js object literals
list of object literals
keys enclosed with double quotes
convert an object literal into json format using JSON.stringify(tasks)
convert json format to object literal use JSON.parse(str)
 */
