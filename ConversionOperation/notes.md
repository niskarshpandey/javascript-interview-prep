## Truthy and Falsy Values

JavaScript me kuch values Boolean conversion ke time automatically true ya false ban jaati hain.

### Falsy Values

Ye values Boolean conversion me false return karti hain:

```js
Boolean(false); // false
Boolean(0); // false
Boolean(-0); // false
Boolean(""); // false
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false
```

### Truthy Values

Inke alawa lagbhag sab values true return karti hain:

```js
Boolean(true); // true
Boolean(1); // true
Boolean(-1); // true
Boolean("0"); // true
Boolean("false"); // true
Boolean(" "); // true
Boolean("Niskarsh"); // true
Boolean([]); // true
Boolean({}); // true
```

### Important Interview Traps

```js
Boolean("0"); // true
Boolean("false"); // true
Boolean(" "); // true
Boolean([]); // true
Boolean({}); // true
```

Reason:
Ye sab empty nahi hain, isliye JavaScript inhe truthy maanta hai.

### Quick Rule

Falsy values ko yaad kar lo:
false, 0, -0, "", null, undefined, NaN

Inke alawa almost sab kuch truthy hota hai.

---

## Quick Revision & Interview Traps

### Number Conversion

```js
Number("33"); // 33
Number("33abc"); // NaN
Number(true); // 1
Number(false); // 0
Number(null); // 0
Number(undefined); // NaN
Number(""); // 0
Number(" "); // 0
```

---

### Boolean Conversion

```js
Boolean(1); // true
Boolean(0); // false
Boolean(""); // false
Boolean(" "); // true
Boolean("0"); // true
Boolean("false"); // true
Boolean("Niskarsh"); // true
Boolean(null); // false
Boolean(undefined); // false
Boolean(NaN); // false
Boolean([]); // true
Boolean({}); // true
```

---

### String Conversion

```js
String(33); // "33"
String(true); // "true"
String(false); // "false"
```

---

### typeof Operator

```js
typeof null; // object
typeof undefined; // undefined
typeof []; // object
typeof {}; // object
typeof function () {}; // function
typeof Symbol("123"); // symbol
```

---

### Most Important Falsy Values

```js
false;
0 - 0;
("");
null;
undefined;
NaN;
```

Inke alawa almost sab values truthy hoti hain.
