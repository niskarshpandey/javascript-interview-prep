# 09 - Arrays Important Questions

## 1. What is an array?

### Answer

Array stores multiple values in a single variable.

---

## 2. Difference between push and pop?

### Answer

`push()`
- Add at end

`pop()`
- Remove from end

---

## 3. Difference between shift and unshift?

### Answer

`unshift()`
- Add at beginning

`shift()`
- Remove from beginning

---

## 4. Difference between slice and splice?

### Answer

`slice()`
- Original array unchanged
- End excluded

`splice()`
- Original array modified
- Removes elements

---

## 5. Difference between concat and spread operator?

### Answer

Both merge arrays.

Concat:

```js
arr1.concat(arr2)
```

Spread:

```js
[...arr1, ...arr2]
```

Spread is more modern.

---

## 6. What does Array.isArray() do?

### Answer

Checks whether value is array or not.

---

## 7. What does Array.from() do?

### Answer

Converts iterable to array.

Example:

```js
Array.from("hello")
```

---

## 8. What does Array.of() do?

### Answer

Creates array from values.

```js
Array.of(1,2,3)
```