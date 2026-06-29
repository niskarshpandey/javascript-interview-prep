// Basic function
function greet(name) {
  return `Hello ${name}`;
}

console.log(greet("Niskarsh"));

// Multiply
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 5));

// Default parameter
function welcome(user = "Guest") {
  return `${user} joined`;
}

console.log(welcome());

// Rest operator
function sum(...nums) {
  return nums;
}

console.log(sum(1, 2, 3, 4));

// Object
function printUser(user) {
  console.log(user.name);
}

printUser({ name: "Pandey" });

// Array
function getFirst(arr) {
  return arr[0];
}

console.log(getFirst([10, 20, 30]));