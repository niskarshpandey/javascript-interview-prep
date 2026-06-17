# 05 - Comparison Important Questions

## 1. What are comparison operators?

### Answer
Comparison operators do values compare and return boolean.

Examples:

```js
>
<
>=
<=
==
===
```

---

## 2. Difference between == and === ?

### Answer

`==`
- Checks only value
- Performs type conversion

```js
"2" == 2   // true
```

`===`
- Checks value and datatype
- No type conversion

```js
"2" === 2   // false
```

---

## 3. Why is `null >= 0` true but `null == 0` false?

### Answer

Because equality and comparison operators behave differently in JavaScript.

Comparison may convert `null` to `0`.

---

## 4. Why should we avoid loose equality?

### Answer

Because automatic type conversion can produce unexpected results.

Use strict equality (`===`) for safer code.

---

## 5. What is stack memory?

### Answer

Stack memory stores primitive values.

Characteristics:
- Fast access
- Copy based
- Original value stays safe

---

## 6. What is heap memory?

### Answer

Heap memory stores reference types.

Characteristics:
- Stores objects/arrays/functions
- Variables hold references
- Changes affect all references

---

## 7. Which datatypes use stack memory?

### Answer

Primitive datatypes:

- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- BigInt

---

## 8. Which datatypes use heap memory?

### Answer

Non-primitive datatypes:

- Array
- Object
- Function

---

## 9. Why does `typeof null` return object?

### Answer

This is a historical JavaScript bug.

```js
typeof null   // object
```

It remains for backward compatibility.