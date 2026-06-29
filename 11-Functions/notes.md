# 11 - Functions

## What is Function?

Function reusable block of code hota hai jo specific task perform karta hai.

Example:

```js
function sayMyName(){
    console.log("N")
}
```

Function call:

```js
sayMyName()
```

---

# Function Syntax

```js
function functionName(){
   // code
}
```

---

# Parameters vs Arguments

## Parameters

Function definition ke andar jo variables hote hain.

```js
function addTwoNumbers(number1, number2)
```

Here:

```text
number1, number2
```

are parameters.

---

## Arguments

Function call ke time jo values pass karte hain.

```js
addTwoNumbers(3, 5)
```

Here:

```text
3, 5
```

are arguments.

---

# Return Keyword

Function execution stop karta hai aur value return karta hai.

```js
function addTwoNumbers(a,b){
   return a + b
}
```

Example:

```js
const result = addTwoNumbers(3,5)
```

Output:

```js
8
```

---

# Default Parameters

Default value set kar sakte hain.

```js
function loginUserMessage(username = "sma")
```

Agar user value pass na kare:

```js
"sma"
```

use hoga.

---

# Checking Empty Input

```js
if(!username)
```

Meaning:

Check if username is falsy.

Falsy values:

- false
- 0
- ""
- null
- undefined
- NaN

---

# Rest Operator (...)

Multiple values ko ek array me collect karta hai.

```js
function calculateCartPrice(...num1){
   return num1
}
```

Example:

```js
calculateCartPrice(100,200,300)
```

Output:

```js
[100,200,300]
```

---

## Important Case

```js
function calculateCartPrice(val1, val2, ...num1)
```

Example:

```js
calculateCartPrice(4,7,100,200)
```

Result:

```text
val1 = 4
val2 = 7
num1 = [100,200]
```

---

# Passing Object in Function

Function object accept kar sakta hai.

```js
function handleObject(anyobject){
   console.log(anyobject.username)
}
```

Example:

```js
handleObject({
   username:"sam",
   price:399
})
```

---

# Passing Array in Function

Function array accept kar sakta hai.

```js
function returnSecondValue(arr){
   return arr[2]
}
```

Example:

```js
returnSecondValue([200,400,500,1000])
```

Output:

```js
500
```

---

# Important Interview Trap

## return vs console.log

```js
function add(a,b){
   console.log(a+b)
}
```

This prints value but returns:

```js
undefined
```

But:

```js
function add(a,b){
   return a+b
}
```

Actually returns value.

---

## Memory Trick

```text
Parameter = Function ke andar variable
Argument = Function call ke time actual value
```
---

## Important Interview Trap

```js
function test(){
   return
   5
}
```

Output?

```js
undefined
```

Why?

Because JavaScript semicolon insert kar deta hai after `return`.