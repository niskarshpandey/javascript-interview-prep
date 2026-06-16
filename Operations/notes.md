# Operations in JavaScript

Operations values par calculations perform karne ke liye use hote hain.

---

## Basic Arithmetic Operators

```js
2 + 2   // 4
2 - 2   // 0
2 * 2   // 4
2 / 2   // 1
2 % 3   // 2
2 ** 3  // 8
```

---

## Negative Value

```js
let value = 3
let negValue = -value
```

Output:

```js
-3
```

---

## String Concatenation

Strings ko `+` se join kar sakte hain.

```js
let str1 = "hello"
let str2 = " sir"

let str3 = str1 + str2
```

Output:

```js
hello sir
```

---

## Mixed Type Operations

```js
"1" + 2      // "12"
1 + "2"      // "12"
"2" + 1 + 1  // "211"
1 + 2 + "3"  // "33"
```

### Rule

- Agar string pehle aa gayi → baad wala concat hoga
- Number + Number pehle evaluate hota hai

---

## Unary Plus / Minus

```js
+true    // 1
-true    // -1
+""      // 0
+false   // 0
-false   // -0
```

---

# Increment Operator

`++` value ko 1 se increase karta hai.

---

## Post Increment (x++)

Pehle value use hoti hai, fir increment hota hai.

```js
let x = 3
let y = x++

console.log(x) // 4
console.log(y) // 3
```

### Memory Trick

Post = Pehle Purana, baad me Plus

---

## Pre Increment (++x)

Pehle increment hota hai, fir updated value use hoti hai.

```js
let x = 3
let y = ++x

console.log(x) // 4
console.log(y) // 4
```

### Memory Trick

Pre = Pehle Plus