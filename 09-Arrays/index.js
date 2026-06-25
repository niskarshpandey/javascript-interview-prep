const myArr = [0, 1, 2, 3, 4, 5, 6]
const myHeroes = ["Ironman", "Batman"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr[2]);


// Array Methods

// myArr.push(8)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(4))
// console.log(myArr.indexOf(9))

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

//slice, splice

// console.log("A", myArr);

// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B" , myArr);

// const myn2 = myArr.splice(1, 3)
// console.log("C", myArr);
// console.log(myn2);

const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes[3][1])

// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes);

const all_new_Heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_Heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

console.log(Array.isArray("niskarsh"))
console.log(Array.from("hisss"))
console.log(Array.from({name: "hisss"}))//intesting for interview 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

