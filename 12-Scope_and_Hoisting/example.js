let city = "Lucknow";

function outer() {
  let name = "Niskarsh";

  function inner() {
    console.log(name);
    console.log(city);
  }

  inner();
}

outer();

if (true) {
  let age = 22;
  console.log(age);
}

// Hoisting
hello();

function hello() {
  console.log("Hello");
}