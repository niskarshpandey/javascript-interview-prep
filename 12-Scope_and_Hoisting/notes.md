# 12 - Scope and Hoisting

## What is Scope?

Scope defines where a variable can be accessed.

Types:

- Global Scope
- Block Scope
- Function Scope

---

# Global Scope

Jo variable sab jagah accessible ho.

```js
let a = 300
```

Agar function/block ke bahar hai → global.

---

# Block Scope

Curly braces `{}` ke andar declared variable.

```js
if (true){
   let a = 10
   const b = 20
}
```

`let` and `const` block scoped hote hain.

Outside access:

```js
console.log(a) // error
console.log(b) // error
```

---

# var Problem

```js
if(true){
   var c = 30
}
```

Outside:

```js
console.log(c) // works
```

Problem:
`var` block scope follow nahi karta.

Isliye modern JS me avoid.

---

# Important Note

Browser console aur Node.js / VS Code me scope behavior thoda different ho sakta hai.

---

# Nested Scope

Inner scope outer scope ke variables access kar sakta hai.

Outer scope inner scope ke variables access nahi kar sakta.

Example:

```js
function one(){
   const username = "niskarsh"

   function two(){
      const website = "yt"
      console.log(username)
   }

   two()
}
```

Valid:

```js
two() → username access kar sakta hai
```

Invalid:

```js
one() → website access nahi kar sakta
```

---

# Lexical Scope

Child function parent scope access kar sakta hai.

Example:

```js
function parent(){
   let x = 10

   function child(){
      console.log(x)
   }
}
```

Child → parent access

Parent → child access ❌

---

# Nested if Scope

```js
if(true){
   const username = "nisi"

   if(username === "nisi"){
      const website = "yt"
   }
}
```

Inner block:
- username accessible
- website accessible

Outer block:
- website inaccessible

---

# Hoisting

JavaScript declarations ko execution se pehle memory me le jata hai.

This behavior is called hoisting.

---

# Function Declaration Hoisting

```js
console.log(addone(5))

function addone(num){
   return num + 1
}
```

Works.

Output:

```js
6
```

Reason:
Function declaration fully hoist hota hai.

---

# Function Expression Hoisting

```js
addTwo(5)

const addTwo = function(num){
   return num + 2
}
```

Error.

Why?

Because:

- Variable hoist hota hai
- But initialization nahi

Before initialization:

```js
Temporal Dead Zone
```

---

# Function Declaration vs Expression

## Declaration

```js
function greet(){}
```

Hoisted completely.

---

## Expression

```js
const greet = function(){}
```

Not callable before declaration.

---

# Important Interview Trap

```js
console.log(x)
let x = 10
```

Output?

```js
ReferenceError
```

Why?

Because `let` hoist hota hai but Temporal Dead Zone me rehta hai.


---

## Extra Hoisting Trap

```js
var x = 1

function test(){
   console.log(x)
   var x = 2
}

test()
```

Question:

Output kya hoga?

Answer:

```js
undefined
```

Not:

```js
1
```

Why?

Because function ke andar `var x` hoist ho jata hai.

JavaScript internally aise dekhta hai:

```js
function test(){
   var x
   console.log(x)
   x = 2
}
```

Execution flow:

1. `var x` hoist hua
2. Initial value:

```js
undefined
```

3. `console.log(x)` runs

Output:

```js
undefined
```

4. Then:

```js
x = 2
```

---

### Memory Trick

```text
var → hoisted + initialized as undefined
let/const → hoisted but Temporal Dead Zone
```