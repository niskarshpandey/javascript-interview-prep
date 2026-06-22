const name = "karma";
const repoCount = 49;
//console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("niskarsh-nmp-mmmmmm");
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log (gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf("k"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-12,4);
console.log(anotherString);
console.log(gameName.slice(-8))
console.log(">" + anotherString + "<")

const newStringOne = "  niskarsh  "
console.log(newStringOne)
console.log(newStringOne.trim());

const url = "https://nis.com/nis%20pandey"

console.log(url.replace('%20', '-'))

console.log(url.includes('ni'));
console.log(url.includes('sundarlall' )) ;

console.log(gameName.split('-'));