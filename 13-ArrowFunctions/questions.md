# 13 - Arrow Functions and IIFE Important Questions

## 1. What is an arrow function?

### Answer

Short syntax for writing functions.

Example:

```js
const add = (a,b) => a+b
```

---

## 2. Difference between normal function and arrow function?

### Answer

Normal function:
- Has its own `this`

Arrow function:
- Does not create its own `this`

---

## 3. What is explicit return?

### Answer

Using `return` keyword.

```js
const add = (a,b)=>{
   return a+b
}
```

---

## 4. What is implicit return?

### Answer

Return without writing `return`.

```js
const add = (a,b)=> a+b
```

---

## 5. Why object return needs parentheses in arrow function?

### Answer

Without parentheses JS braces ko function body samajhta hai.

Correct:

```js
() => ({name:"niskarsh"})
```

---

## 6. What is IIFE?

### Answer

Immediately Invoked Function Expression.

Function jo define hote hi execute ho jaye.

---

## 7. Why use IIFE?

### Answer

- Immediate execution
- Avoid global pollution
- Create private scope