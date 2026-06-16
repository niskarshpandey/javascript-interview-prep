# 02_Data_Types - Important Questions

---

## 1. What are primitive data types?

### Answer

JavaScript me 7 primitive data types hote hain:

- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- BigInt

---

## 2. What are non-primitive data types?

### Answer

Reference type data:

- Object
- Array
- Function

---

## 3. Difference between primitive and non-primitive data types?

### Answer

| Primitive | Non-Primitive |
|------------|------------|
| Value copy hoti hai | Reference copy hoti hai |
| Immutable | Mutable |

**Primitive Example:**

```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

**Non-Primitive Example:**

```js
let obj1 = {
  name: "Niskarsh"
};

let obj2 = obj1;

obj2.name = "Pandey";

console.log(obj1.name); // Pandey
console.log(obj2.name); // Pandey
```

---

## 4. What is typeof operator?

### Answer

Variable ka datatype batata hai.

```js
typeof "Hello";
typeof 123;
typeof true;
```

**Output:**

```js
"string"
"number"
"boolean"
```

---

## 5. Why does typeof null return object?

### Answer

JavaScript ka historical bug hai.

```js
typeof null;
```

**Output:**

```js
"object"
```

---

## 6. Difference between null and undefined?

### Answer

| undefined | null |
|------------|------------|
| Value assign nahi hui | Intentionally empty value |

**Example:**

```js
let a;
console.log(a); // undefined

let b = null;
console.log(b); // null
```

---

## 7. Is Array a datatype?

### Answer

Nahi.

Array ek Object type hai.

```js
typeof [];
```

**Output:**

```js
"object"
```

---

## 8. Difference between Array and Object?

### Answer

| Array | Object |
|--------|--------|
| Indexed | Key-Value Pair |
| [] | {} |

**Array Example:**

```js
const fruits = ["Apple", "Banana", "Mango"];
```

**Object Example:**

```js
const user = {
  name: "Niskarsh",
  age: 22
};
```

---

## 9. What is NaN?

### Answer

NaN = Not a Number

```js
Number("Hello");
```

**Output:**

```js
NaN
```

**Interview Question:**

```js
typeof NaN;
```

**Output:**

```js
"number"
```

---

## 10. How to check if a value is an array?

### Answer

```js
Array.isArray([]);
```

**Output:**

```js
true
```

---

## 11. What is Symbol?

### Answer

Unique value create karne ke liye use hota hai.

```js
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2);
```

**Output:**

```js
false
```

---

## 12. What is BigInt?

### Answer

Bade integers store karne ke liye use hota hai.

```js
const num = 123456789012345678901234567890n;
console.log(num);
```

---

## Quick Revision

- 7 Primitive Types
- Object, Array, Function → Non-Primitive
- typeof null → object
- typeof NaN → number
- Array is Object
- Array.isArray() → Array check
- undefined ≠ null
- Symbol → Unique value
- BigInt → Large integers