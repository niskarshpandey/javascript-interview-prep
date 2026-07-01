// Arrow function
const square = (num) => num * num;
console.log(square(5));

// Explicit return
const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(3, 4));

// Return object
const getUser = () => ({
  name: "Niskarsh",
  age: 22
});
console.log(getUser());

// IIFE
(function () {
  console.log("Immediate execution");
})();

((city) => {
  console.log(`Welcome from ${city}`);
})("Lucknow");