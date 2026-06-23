# 07 - Numbers and Math

## Number

JavaScript me numbers integer aur decimal dono represent karte hain.

```js
const score = 400
```

Number object bhi bana sakte hain:

```js
const balance = new Number(100)
```

---

## toString()

Number ko string me convert karta hai.

```js
balance.toString()
```

Example:

```js
balance.toString().length
```

Output:

```js
3
```

Because `"100"` length = 3

---

## toFixed()

Decimal places fix karta hai.

```js
balance.toFixed(2)
```

Example:

```js
100.00
```

Useful for prices / money.

---

## toPrecision()

Total significant digits set karta hai.

```js
const num = 11123.8966
num.toPrecision(3)
```

Output:

```js
1.11e+4
```

---

## toLocaleString()

Readable format me commas lagata hai.

```js
1000000
```

US format:

```js
1,000,000
```

Indian format:

```js
(1000000).toLocaleString('en-IN')
```

Output:

```js
10,00,000
```

---

# Math Object

JavaScript ka built-in object for mathematical operations.

```js
Math
```

---

## Math.abs()

Negative ko positive bana deta hai.

```js
Math.abs(-44)
```

Output:

```js
44
```

---

## Math.round()

Nearest integer.

```js
Math.round(4.6)
```

Output:

```js
5
```

---

## Math.ceil()

Always upper integer.

```js
Math.ceil(4.2)
```

Output:

```js
5
```

---

## Math.floor()

Always lower integer.

```js
Math.floor(4.9)
```

Output:

```js
4
```

---

## Math.min()

Smallest value.

```js
Math.min(4,3,6,8)
```

Output:

```js
3
```

---

## Math.max()

Largest value.

```js
Math.max(4,3,6,8)
```

Output:

```js
8
```

---

# Random Number

## Math.random()

Random decimal number देता hai:

Range:

```js
0 to <1
```

Example:

```js
Math.random()
```

Possible output:

```js
0.7265
```

---

## Random 1–10

```js
Math.floor(Math.random()*10) + 1
```

Range:

```js
1 to 10
```

---

## Random between Min and Max

Formula:

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

Example:

```js
min = 10
max = 20
```

Output range:

```js
10 to 20
```
----

## Important Interview Trap

```js
Math.floor(Math.random() * 10)
```

Range:

```js
0 to 9
```

Why?

Step by step:

```js
Math.random()
```

Range:

```js
0 <= value < 1
```

Multiply by 10:

```js
0 <= value < 10
```

Now apply floor:

```js
Math.floor(...)
```

Final range:

```js
0 to 9
```

⚠️ Important:
Many beginners think this gives `1 to 10`, but that is wrong.

If you want `1 to 10`, use:

```js
Math.floor(Math.random() * 10) + 1
```