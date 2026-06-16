// String
let name = "niskarsh";
console.log(typeof name);

let hero = "ironman";
console.log(typeof hero);

//Number
let age = 22;
console.log(typeof age);

let marks = 84;
console.log(typeof marks);

//Boolean
let isLoggedIn = false;
console.log(typeof isLoggedIn);

let hasSubscription = false;
console.log(hasSubscription);

let userage = 20;
console.log(userage >= 18);
console.log(typeof userage);

//Undefined
let state;
console.log(typeof state);

let winn;
console.log(typeof winn);

// Null
let city = null;
console.log(typeof city);

let temprature = null;
console.log(typeof temprature);

// Symbol
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

//BigInt
const bigNumber = 1234734918729053710787235n;
console.log(typeof bigNumber);

// Object
const user = {
  name: "Niskarsh",
  age: 22,
};
console.log(typeof user);

const car = {
  brand: "BMW",
  color: "Black",
  year: 2025,
};
console.log(car.brand);
console.log(typeof car);

const student = {
  name: "Rahul",
  course: "B.Tech",
};
console.log(student.name);
console.log(student.course);
console.log(typeof student);

//Functions

function greet() {
  console.log("hello Niskarsh");
}
greet();
console.log(typeof greet);

function add(a, b) {
  return a + b;
}

console.log(add(10, 20));
console.log(typeof add);

function square(num) {
  return num * num;
}

console.log(square(5));
console.log(typeof square);

//Array
const heroes = ["Virat", "Rohit", "Gill"];
console.log(typeof heroes);

//--------------NOTES--------------//

// ## typeof Operator Quick Revision

// | Value | Data Type | typeof Result |
// |---------|---------|---------|
// | "Niskarsh" | String | string |
// | 22 | Number | number |
// | true / false | Boolean | boolean |
// | undefined | Undefined | undefined |
// | null | Null | object ⚠️ |
// | Symbol("123") | Symbol | symbol |
// | 123456789n | BigInt | bigint |
// | { name: "Niskarsh" } | Object | object |
// | ["Virat", "Rohit"] | Array | object ⚠️ |
// | function(){} | Function | function |

// ---

// ### Important Interview Points

// 1. `typeof null` returns `object`
//    - This is a historical bug in JavaScript.

// 2. `typeof []` returns `object`
//    - Arrays are special types of objects in JavaScript.

// 3. `typeof function(){}` returns `function`
//    - Functions are first-class objects in JavaScript.

// 4. Symbols are always unique.

// ```js
// const id1 = Symbol("123")
// const id2 = Symbol("123")

// console.log(id1 === id2) // false