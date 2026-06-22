# 06 - Strings Important Questions

## 1. What is a string in JavaScript?

### Answer

String is a sequence of characters used to store text.

Example:

```js
let name = "Niskarsh"
```

---

## 2. What is template literal?

### Answer

Template literals use backticks `` ` `` and allow variable interpolation.

```js
const name = "Karma"
console.log(`Hello ${name}`)
```

Benefits:
- Easy string formatting
- Supports multiline strings
- Variables insert via `${}`

---

## 3. Difference between substring() and slice()?

### Answer

`substring()`
- Negative values support nahi karta

`slice()`
- Negative values support karta

Example:

```js
"javascript".slice(-4)
```

---

## 4. What does trim() do?

### Answer

Extra spaces remove karta hai from start and end.

```js
"  hello  ".trim()
```

---

## 5. What does split() do?

### Answer

String ko array me convert karta hai.

```js
"a-b-c".split("-")
```

Output:

```js
["a", "b", "c"]
```

---

## 6. What is indexOf()?

### Answer

Character ya substring ka index return karta hai.

Not found:

```js
-1
```

---

## 7. Difference between primitive string and String object?

### Answer

Primitive:

```js
const name = "Niskarsh"
```

Object:

```js
const name = new String("Niskarsh")
```

Primitive mostly preferred.