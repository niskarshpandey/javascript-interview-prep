# 09 - Arrays

## What is Array?

Array multiple values ko ek variable me store karta hai.

Example:

```js
const arr = [1, 2, 3, 4]
```

Array indexing starts from:

```text
0
```

Example:

```js
arr[0]
```

---

## Creating Arrays

### Literal Syntax

```js
const myArr = [0,1,2,3]
```

### Constructor

```js
const myArr2 = new Array(1,2,3)
```

---

# Basic Array Methods

## push()

End me element add karta hai.

```js
myArr.push(8)
```

---

## pop()

Last element remove karta hai.

```js
myArr.pop()
```

---

## unshift()

Start me element add karta hai.

```js
myArr.unshift(9)
```

---

## shift()

First element remove karta hai.

```js
myArr.shift()
```

---

## includes()

Check karta hai value present hai ya nahi.

```js
myArr.includes(4)
```

Output:

```js
true / false
```

---

## indexOf()

Element ka index return karta hai.

```js
myArr.indexOf(3)
```

Not found:

```js
-1
```

---

## join()

Array ko string me convert karta hai.

```js
myArr.join()
```

Example:

```js
[1,2,3]
```

↓

```js
"1,2,3"
```

---

# Slice vs Splice

## slice(start, end)

- Original array change nahi hota
- End index include nahi hota

```js
const arr = [0,1,2,3,4]
arr.slice(1,3)
```

Output:

```js
[1,2]
```

Original:

```js
[0,1,2,3,4]
```

---

## splice(start, count)

- Original array modify hota
- Elements remove karta

```js
arr.splice(1,3)
```

Output:

```js
[1,2,3]
```

Original becomes:

```js
[0,4]
```

---

# Combining Arrays

## push(array)

Array ke andar array push karega.

```js
marvel.push(dc)
```

Result:

```js
["thor","ironman",[...]]
```

Nested array ban jayega.

---

## concat()

Arrays merge karta hai.

```js
marvel.concat(dc)
```

---

## Spread Operator (...)

Recommended way.

```js
[...marvel, ...dc]
```

Clean and modern.

---

# flat()

Nested arrays flatten karta hai.

```js
arr.flat(Infinity)
```

Example:

```js
[1,[2,[3]]]
```

↓

```js
[1,2,3]
```

---

# Array Static Methods

## Array.isArray()

Check karta hai array hai ya nahi.

```js
Array.isArray("niskarsh")
```

Output:

```js
false
```

---

## Array.from()

Iterable ko array me convert karta hai.

```js
Array.from("hisss")
```

Output:

```js
['h','i','s','s','s']
```

---

## Important Interview Trap

```js
Array.from({name: "hisss"})
```

Output:

```js
[]
```

Why?

Because object iterable nahi hai.

JavaScript confuse hota:
- keys se array banao?
- values se array banao?

So empty array return hota.

---

## Array.of()

Values se new array banata hai.

```js
Array.of(100,200,300)
```

Output:

```js
[100,200,300]
```

---

## Interview Trap: slice vs splice

Many beginners confuse these.

Remember:

`slice` → No damage  
`splice` → Damage

Meaning:

- slice → original array safe
- splice → original array modified