# 03_Type_Conversion - Important Questions

---

## 1. What is Type Conversion?

### Answer
Ek datatype ko dusre datatype me convert karna.

---

## 2. What is Explicit Conversion?

### Answer
Developer khud conversion kare.

```js
Number("123");
String(123);
Boolean(1);
```

---

## 3. What is Implicit Conversion?

### Answer
JavaScript automatically conversion kare.

```js
"5" + 1;
```

**Output:**

```js
"51"
```

---

## 4. What is Type Coercion?

### Answer
Automatic datatype conversion by JavaScript.

---

## 5. Difference between Explicit and Implicit Conversion?

### Answer

| Explicit | Implicit |
|----------|----------|
| Developer kare | JavaScript kare |

---

## 6. Output of Number("") ?

### Answer

```js
Number("");
```

**Output:**

```js
0
```

---

## 7. Output of Number(" ") ?

### Answer

```js
Number(" ");
```

**Output:**

```js
0
```

---

## 8. Output of Boolean("") ?

### Answer

```js
Boolean("");
```

**Output:**

```js
false
```

---

## 9. Output of Boolean("false") ?

### Answer

```js
Boolean("false");
```

**Output:**

```js
true
```

**Reason:** Non-empty string is always truthy.

---

## 10. Output of Boolean("0") ?

### Answer

```js
Boolean("0");
```

**Output:**

```js
true
```

---

## 11. Output of Boolean(NaN) ?

### Answer

```js
Boolean(NaN);
```

**Output:**

```js
false
```

---

## 12. Difference between Number() and parseInt()?

### Answer

```js
Number("10px");
```

**Output:**

```js
NaN
```

```js
parseInt("10px");
```

**Output:**

```js
10
```

---

## 13. Difference between == and === ?

### Answer

```js
5 == "5";
```

**Output:**

```js
true
```

```js
5 === "5";
```

**Output:**

```js
false
```

---

## 14. Why does [] + [] return empty string?

### Answer

Dono arrays string me convert ho jaati hain.

```js
[] + [];
```

**Output:**

```js
""
```

---

## 15. Difference between null == undefined and null === undefined?

### Answer

```js
null == undefined;
```

**Output:**

```js
true
```

```js
null === undefined;
```

**Output:**

```js
false
```