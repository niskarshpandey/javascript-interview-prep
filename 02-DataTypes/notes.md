# JavaScript Data Types

JavaScript me data types 2 categories me divide hote hain:

## Primitive Data Types

Primitive data types simple values store karte hain aur ye immutable hote hain (original value directly change nahi hoti).

Examples:
- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- BigInt

---

## Non-Primitive (Reference) Data Types

Non-primitive data types multiple values ya complex data store karte hain. Inka comparison reference (memory address) ke basis par hota hai.

Examples:
- Object
- Array
- Function

---

## Primitive Data Types

### String
```js
let name = "Niskarsh"
```

### Number
```js
let age = 22
```

### Boolean
```js
let isLoggedIn = true
```

### Null
```js
let temp = null
```

### Undefined
```js
let state
```

### Symbol
```js
const id = Symbol('123')
```

### BigInt
```js
const bigNumber = 1234567890123456789n
```

---

## Non Primitive Data Types

### Object

```js
let user = {
    name: "Niskarsh",
    age: 22
}
```

### Array

```js
let heroes = ["Virat", "Rohit", "Gill"]
```

### Function

```js
function greet(){
    console.log("Hello")
}
```

---

## Important Interview Point

Primitive => Copy by Value

```js
let a = 10
let b = a

b = 20

console.log(a) // 10
console.log(b) // 20
```

Non-Primitive => Copy by Reference

```js
let user1 = {
    name: "Niskarsh"
}

let user2 = user1

user2.name = "Pandey"

console.log(user1.name) // Pandey
console.log(user2.name) // Pandey
```

---

## Important Interview Questions

```js
typeof "Hello"      // string
typeof 123          // number
typeof true         // boolean
typeof undefined    // undefined
typeof null         // object
```

Note:
`typeof null` object return karta hai. Ye JavaScript ka historical bug hai.

### Symbol

- Symbol ek primitive data type hai.
- Ye unique identifiers (unique pehchan) create karta hai.
- Object properties me name conflicts (same property name ki wajah se hone wale clashes) ko avoid karta hai.
- Do Symbols same description ke hone par bhi equal nahi hote.

Example:

const id1 = Symbol("123")
const id2 = Symbol("123")

console.log(id1 === id2) // false


Boolean
- Represents true or false values.

Object
- Collection of key-value pairs used to store related data.

Function
- A reusable block of code that performs a specific task.




