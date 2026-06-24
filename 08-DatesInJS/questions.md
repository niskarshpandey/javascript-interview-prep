# 08 - Date and Time Important Questions

## 1. What is Date object?

### Answer

Date object is used to work with dates and time in JavaScript.

```js
new Date()
```

---

## 2. What does Date.now() return?

### Answer

Milliseconds since January 1, 1970 (Unix Epoch).

---

## 3. Why do we use getMonth() + 1?

### Answer

Because month indexing starts from 0.

```text
0 = January
11 = December
```

Example:

```js
date.getMonth() + 1
```

---

## 4. What does getDay() return?

### Answer

Day of week.

```text
0 = Sunday
1 = Monday
...
6 = Saturday
```

---

## 5. Difference between getTime() and Date.now()?

### Answer

`Date.now()`
- Current timestamp

`getTime()`
- Specific date timestamp

---

## 6. What is Unix Timestamp?

### Answer

Time represented as milliseconds from:

```text
1 January 1970 UTC
```