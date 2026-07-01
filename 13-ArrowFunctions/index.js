const user = {
    username: "niskarsh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
//   console.log(this)

    }

};

// user.welcomeMessage()
// user.username = 'NIWI'  
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "niskarsh"
//     console.log(this.username);
// }
// chai()

// const chai = function (){
//     let username = "niskarsh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "niskarsh"
//     console.log(this);
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)

// const addTwo = (num1, num2) => ({username: "niskarsh"})

// console.log(addTwo(3,4));

// +++++++++++++++++++++++++++++++++ Immediately Invoked Function Expression (IIFE) ++++++++++++++++++++++++++++++++++++++++

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})(`niskarsh`)
