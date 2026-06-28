const car = {
  brand: "BMW",
  color: "Black",
  year: 2025
};

console.log(car.brand);
console.log(car["color"]);

car.price = "80L";
console.log(car);

const student = {
  name: "Niskarsh",
  greet() {
    console.log(`Hello ${this.name}`);
  }
};

student.greet();

const obj1 = { a: 1 };
const obj2 = { b: 2 };

const merged = { ...obj1, ...obj2 };
console.log(merged);

console.log(Object.keys(car));
console.log(Object.values(car));