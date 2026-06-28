// singleton
// Object.create..consturctor method dekhna hai

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Niskarsh", 
    "full-name": "Niskarsh Mani Pandey",
    [mySym]: "mykey1",
    age: 22,
    location: "Kanpur",
    email: "niskarsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Sunday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full-name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

JsUser.email = "niskarsh@gemini.com"
// Object.freeze(JsUser)
JsUser.email =  " niskarsh@microsoft.com"
// console.log(JsUser); 

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

// +++++++++++++++++++++++++++ PART - 2 +++++++++++++++++++++++++++++

// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
 
// console.log(tinderUser);]

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "niskarsh",
            middlename: "mani",
            lastname: "pandey"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(users);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

// +++++++++++++++++++++++++++++ Objects destructuring and JSON API +++++++++++++++++++++++++++++++++++

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
// console.log(course.courseInstructor);

const {courseInstructor: guruji} = course

// console.log(courseInstructor);
console.log(guruji);

// {
//     "name" : "niskarsh",
//     "coursename" : "js in hindi",
//    " price" : "free"
// }...JSON


