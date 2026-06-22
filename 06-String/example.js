// Length
const hero = "spiderman";
console.log(hero.length);

// Uppercase / Lowercase
console.log(hero.toUpperCase());
console.log("IRONMAN".toLowerCase());

// charAt
console.log(hero.charAt(4));

// indexOf
console.log(hero.indexOf("m"));
console.log(hero.indexOf("z"));
// (agar charachter nhi mila then -1 as a output)

// substring
const word = "javascript";
console.log(word.substring(0, 4));

// slice
console.log(word.slice(-6));

// trim
const user = "   pandey   ";
console.log(user.trim());

// replace
const sentence = "I like tea";
console.log(sentence.replace("tea", "coffee"));

// includes
console.log(sentence.includes("tea"));
console.log(sentence.includes("milk"));

// split
const fruits = "apple,mango,banana";
console.log(fruits.split(","));