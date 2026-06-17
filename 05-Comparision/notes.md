# 05 - Comparison

## Comparison Operators

Comparison operators values compare karte hain aur result `true` ya `false` dete hain.

```js
2 > 1
2 >= 1
2 < 1
2 == 1
2 != 1
```

---

## String to Number Comparison

JavaScript comparison ke time string ko number me convert kar sakta hai.

```js
"2" > 1   // true
"02" > 1  // true
```

Reason:
- `"2"` → 2
- `"02"` → 2

---

## Null Comparison

```js
null > 0   // false
null == 0  // false
null >= 0  // true
```

Why?

- Equality (`==`) aur comparisons (`>`, `<`, `>=`) alag tarike se kaam karte hain.
- Comparison ke time `null` ko `0` maana ja sakta hai.

Isliye weird result milta hai.

---

## Undefined Comparison

```js
undefined == 0  // false
undefined > 0   // false
undefined < 0   // false
```

`undefined` comparison me reliable nahi hota.

---

## == vs ===

### Loose Equality (`==`)
Sirf value compare karta hai.

```js
"2" == 2   // true
```

Reason:
JavaScript type conversion karta hai.

---

### Strict Equality (`===`)
Value + datatype dono compare karta hai.

```js
"2" === 2   // false
```

Recommended:
Always prefer `===`

---

# Datatypes Quick Summary

## Primitive Datatypes
- String
- Number
- Boolean
- Null
- Undefined
- Symbol
- BigInt

Primitive values stack memory me store hoti hain.

---

## Non-Primitive Datatypes
- Array
- Object
- Function

Reference types heap memory me store hote hain.

---

## Important typeof

```js
typeof null          // object (JavaScript bug)
typeof undefined     // undefined
typeof []            // object
typeof {}            // object
typeof function(){}  // function
```

---

# Stack vs Heap Memory

## Stack Memory
Primitive datatypes stack memory me store hote hain.

Features:
- Copy milti hai
- Original value change nahi hoti

Example:

```js
let myYoutubeName = "niskarsh0@gmail.com"
let anotherName = myYoutubeName

anotherName = "youtuberrr"
```

Output:

```js
myYoutubeName -> niskarsh0@gmail.com
anotherName  -> youtuberrr
```

Reason:
Copy bani thi.

---

## Heap Memory
Non-primitive datatypes heap memory me store hote hain.

Features:
- Reference milta hai
- Ek change sab jagah reflect hota hai

Example:

```js
let userOne = {
  email: "user@google.com"
}

let userTwo = userOne
userTwo.email = "hero@gmail.com"
```

Output:

```js
userOne.email -> hero@gmail.com
userTwo.email -> hero@gmail.com
```

Reason:
Dono same object ko point kar rahe hain.