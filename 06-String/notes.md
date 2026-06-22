# 06 - Strings

## What is String?

String characters ka collection hota hai.

Examples:

```js
const name = "Niskarsh"
const city = 'Lucknow'
```

---

## String Concatenation

Strings ko `+` ya template literals se join kar sakte hain.

Old way:

```js
const name = "Karma"
const repoCount = 49

console.log(name + repoCount)
```

Modern way (Recommended):

```js
console.log(`Hello my name is ${name} and repo count is ${repoCount}`)
```

`${}` ke andar variables ya expressions likh sakte hain.

---

## String Object

```js
const gameName = new String("niskarsh")
```

String object methods use karne ke liye helpful.

---

## length

String ki total length batata hai.

```js
"hello".length
```

Output:

```js
5
```

---

## toUpperCase()

String uppercase me convert karta hai.

```js
gameName.toUpperCase()
```

---

## charAt()

Specific index ka character deta hai.

```js
gameName.charAt(2)
```

---

## indexOf()

Character kis index par hai batata hai.

```js
gameName.indexOf("k")
```

Agar na mile:

```js
-1
```

---

## substring(start, end)

Start se end tak string return karta hai.

Negative values allow nahi karta.

```js
const str = "niskarsh"
str.substring(0,4)
```

Output:

```js
nisk
```

---

## slice(start, end)

Substring jaisa hi hai but negative values allow karta hai.

```js
str.slice(-4)
```

---

## trim()

Starting aur ending spaces remove karta hai.

```js
"  hello  ".trim()
```

Output:

```js
hello
```

---

## replace()

String ka part replace karta hai.

```js
url.replace('%20', '-')
```

Example:

```js
nis%20pandey
```

↓

```js
nis-pandey
```

---

## includes()

Check karta hai substring present hai ya nahi.

```js
url.includes("nis")
```

Output:

```js
true
```

---

## split()

String ko array me convert karta hai separator ke basis pe.

```js
gameName.split('-')
```

Example:

```js
"niskarsh-nmp-mmm"
```

Output:

```js
["niskarsh", "nmp", "mmm"]
```

---

# Important Difference

## substring vs slice

### substring()
- Negative values ignore karta hai

### slice()
- Negative values support karta hai