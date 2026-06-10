# 01_Variables - Important Questions

---

## 1. Difference between var, let and const?

### Answer

| Keyword | Scope    | Redeclare | Reassign |
| ------- | -------- | --------- | -------- |
| var     | Function | ✅        | ✅       |
| let     | Block    | ❌        | ✅       |
| const   | Block    | ❌        | ❌       |

---

## 2. What is Hoisting?

### Answer

JavaScript declarations ko execution se pehle memory me le jata hai.

```js
console.log(a);

var a = 10;
```

**Output:**

```js
undefined;
```

---

## 3. What is Temporal Dead Zone (TDZ)?

### Answer

Declaration aur initialization ke beech ka area TDZ kehlata hai.

```js
console.log(a);

let a = 10;
```

**Output:**

```js
ReferenceError;
```

---

## 4. Can const objects be modified?

### Answer

Object modify ho sakta hai, reference nahi.

```js
const user = {
  name: "Niskarsh",
};

user.name = "Pandey";

console.log(user.name);
```

**Output:**

```js
Pandey;
```

---

## 5. Difference between Declaration and Initialization?

### Answer

**Declaration:**

```js
let a;
```

**Initialization:**

```js
a = 10;
```

**Declaration + Initialization:**

```js
let a = 10;
```

---

## 6. Why is var avoided in modern JavaScript?

### Answer

- Function scoped hota hai
- Redeclaration allow karta hai
- Bugs create kar sakta hai
- Isliye `let` aur `const` use karte hain

**Example:**

```js
var a = 10;
var a = 20;

console.log(a);
```

**Output:**

```js
20;
```

---

## 7. Can let be redeclared?

### Answer

No.

```js
let a = 10;
let a = 20;
```

**Output:**

```js
SyntaxError;
```

---

## 8. What happens if a variable is accessed before declaration?

### Answer

| Keyword | Result         |
| ------- | -------------- |
| var     | undefined      |
| let     | ReferenceError |
| const   | ReferenceError |

**Example (var):**

```js
console.log(a);

var a = 10;
```

**Output:**

```js
undefined;
```

**Example (let):**

```js
console.log(b);

let b = 20;
```

**Output:**

```js
ReferenceError;
```

---

## 9. Difference between Global Scope and Block Scope?

### Answer

### Global Scope

```js
var a = 10;

function test() {
  console.log(a);
}

test();
```

Variable har jagah access ho sakta hai.

### Block Scope

```js
{
  let b = 20;
}

console.log(b);
```

**Output:**

```js
ReferenceError;
```

Block ke bahar access nahi hoga.

---

## 10. When should we use const instead of let?

### Answer

Jab value change nahi karni ho tab `const` use karna chahiye.

```js
const PI = 3.14;
```

### Best Practice

- Default → `const`
- Value change ho → `let`
- `var` avoid karo

---

## Quick Revision

- var → Function Scope
- let, const → Block Scope
- var → Redeclare + Reassign
- let → Reassign Only
- const → Neither Redeclare Nor Reassign
- Hoisting → Declaration memory me chali jati hai
- TDZ → Declaration aur Initialization ke beech ka area
- const object modify ho sakta hai
- var avoid karo
- Default → const
