// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 !=1 );

// console.log("2" > 1);
// console.log("02" > 1);


// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// === it checks both value and datatype

// console.log("2" === 2);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap(Non-Primitive)

let myYoutubename = "niskarsh0@gmail.com"
 let anothername = myYoutubename
 anothername = "youtuberrr"

 console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@byl"
}
let userTwo = userOne
userTwo.email = "hero@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);