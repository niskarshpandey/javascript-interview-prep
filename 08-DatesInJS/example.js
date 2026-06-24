const today = new Date();

console.log(today.toDateString());
console.log(today.toLocaleString());

// Custom date
const birthday = new Date("07-24-2002");
console.log(birthday.toDateString());

// Timestamp
console.log(Date.now());

// Month and Day
console.log(today.getMonth() + 1);
console.log(today.getDay());

// Custom format
console.log(
  today.toLocaleString("default", {
    month: "long",
  })
);