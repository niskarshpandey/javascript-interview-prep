const fruits = ["apple", "banana", "mango"];

fruits.push("grapes");
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(fruits.includes("banana"));
console.log(fruits.indexOf("mango"));

const nums = [10, 20, 30, 40, 50];

console.log(nums.slice(1, 4));
console.log(nums);

console.log(nums.splice(1, 2));
console.log(nums);

const arr1 = [1, 2];
const arr2 = [3, 4];

console.log([...arr1, ...arr2]);

console.log(Array.from("hello"));
console.log(Array.of(7, 8, 9));