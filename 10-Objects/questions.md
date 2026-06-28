# 10 - Objects Important Questions

## 1. What is an object?

### Answer

Object stores data in key-value pairs.

---

## 2. Difference between dot and bracket notation?

### Answer

Dot:

```js
user.name
```

Bracket:

```js
user["name"]
```

Bracket special keys ke liye useful.

Example:

```js
user["full-name"]
```

---

## 3. What does Object.freeze() do?

### Answer

Object ko immutable bana deta hai.

Freeze ke baad modifications ignore hote hain.

---

## 4. What is Symbol?

### Answer

Symbol unique identifiers create karta hai.

Used to avoid property conflicts.

---

## 5. What is this keyword in object?

### Answer

`this` current object ko refer karta hai.

Example:

```js
this.name
```

---

## 6. Difference between Object.assign and spread?

### Answer

Both objects merge karte hain.

Assign:

```js
Object.assign({}, obj1, obj2)
```

Spread:

```js
{...obj1, ...obj2}
```

Spread modern hai.

---

## 7. What is object destructuring?

### Answer

Object se values directly extract karna.

```js
const {name} = user
```

---

## 8. What is JSON?

### Answer

JSON is a lightweight data format used in APIs.

Example:

```json
{
  "name":"niskarsh"
}
```