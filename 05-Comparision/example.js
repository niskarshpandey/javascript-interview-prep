// Comparison Examples
console.log(2 > 1);
console.log("2" > 1);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined > 0);

// Equality Examples
console.log("5" == 5);
console.log("5" === 5);

// Stack Example
let city1 = "Lucknow";
let city2 = city1;
city2 = "Delhi";

console.log(city1);
console.log(city2);

// Heap Example
let obj1 = {
  name: "Niskarsh"
};

let obj2 = obj1;
obj2.name = "Pandey";

console.log(obj1.name);
console.log(obj2.name);