# 07 - Numbers and Math Important Questions

## 1. Difference between ceil and floor?

### Answer

`Math.ceil()`
- Upper integer return karta hai

```js
Math.ceil(4.2) // 5
```

`Math.floor()`
- Lower integer return karta hai

```js
Math.floor(4.9) // 4
```

---

## 2. What does Math.round() do?

### Answer

Nearest integer return karta hai.

```js
Math.round(4.6) // 5
Math.round(4.4) // 4
```

---

## 3. What is Math.random() range?

### Answer

Range:

```js
0 <= value < 1
```

1 kabhi exact nahi aata.

---

## 4. Generate random number from 1 to 10?

### Answer

```js
Math.floor(Math.random() * 10) + 1
```

---

## 5. Difference between Number primitive and Number object?

### Answer

Primitive:

```js
const score = 100
```

Object:

```js
const score = new Number(100)
```

Primitive preferred.

---

## 6. What does toFixed() do?

### Answer

Decimal places fix karta hai.

```js
99.456.toFixed(2)
```

Output:

```js
99.46
```