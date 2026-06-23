const marks = 95.678;

// Number methods
console.log(marks.toFixed(2));
console.log(marks.toPrecision(4));

// Locale String
const salary = 2500000;
console.log(salary.toLocaleString("en-IN"));

// Math methods
console.log(Math.abs(-99));
console.log(Math.round(7.4));
console.log(Math.ceil(7.1));
console.log(Math.floor(7.9));

// Min Max
console.log(Math.min(12, 4, 99, 1));
console.log(Math.max(12, 4, 99, 1));

// Random 1-6 (dice)
console.log(Math.floor(Math.random() * 6) + 1);