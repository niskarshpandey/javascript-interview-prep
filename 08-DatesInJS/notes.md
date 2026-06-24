# 08 - Date and Time

## Date Object

JavaScript me date and time handle karne ke liye `Date` object use hota hai.

```js
let myDate = new Date()
```

---

## Common Date Methods

### toString()

Readable full date-time format.

```js
myDate.toString()
```

Example:

```js
Tue Jun 17 2026 22:30:10 GMT+0530
```

---

### toDateString()

Sirf date.

```js
myDate.toDateString()
```

Example:

```js
Tue Jun 17 2026
```

---

### toISOString()

ISO standard format.

```js
myDate.toISOString()
```

Example:

```js
2026-06-17T17:00:00.000Z
```

---

### toJSON()

JSON format me date.

```js
myDate.toJSON()
```

---

### toLocaleDateString()

Local date format.

```js
myDate.toLocaleDateString()
```

Example (India):

```js
17/6/2026
```

---

### toLocaleString()

Local date + time.

```js
myDate.toLocaleString()
```

---

## typeof Date

```js
typeof myDate
```

Output:

```js
object
```

---

# Creating Custom Dates

## Using Numbers

```js
new Date(2023, 0, 23)
```

Important:

⚠️ Month indexing starts from **0**

```text
0 = January
1 = February
...
11 = December
```

Example:

```js
new Date(2023, 0, 23)
```

= 23 January 2023

---

## With Time

```js
new Date(2023, 0, 23, 5, 3)
```

Format:

```text
Year, Month, Day, Hour, Minute
```

---

## Using String

```js
new Date("2023-01-14")
```

or

```js
new Date("01-14-2023")
```

---

## Important Month Trap

Single digit month:

```js
0
```

means January (number constructor)

But string format:

```js
01
```

means January

Example:

```js
new Date(2023, 0, 14)      // Jan
new Date("2023-01-14")     // Jan
```

---

# Timestamp

## Date.now()

Milliseconds since 1 Jan 1970.

```js
Date.now()
```

Output:

```js
1718600000000
```

---

## getTime()

Specific date ka timestamp.

```js
myCreateDate.getTime()
```

---

## Convert to Seconds

```js
Math.floor(Date.now()/1000)
```

Reason:
- Date.now() gives milliseconds
- Divide by 1000 for seconds

---

# Get Methods

## getMonth()

Month return karta hai.

```js
newDate.getMonth()
```

⚠️ 0-based

Isliye often:

```js
newDate.getMonth() + 1
```

---

## getDay()

Day of week.

```text
0 = Sunday
1 = Monday
...
6 = Saturday
```

---

# Custom Formatting

Example:

```js
newDate.toLocaleString('default',{
    weekday: "long"
})
```

Output:

```js
Tuesday
```

Useful options:

```js
weekday
month
year
day
hour
minute
```
---

## Important Interview Trap

```js
new Date(2023, 0, 14)
```

Question:

Month kya hai?

Answer:

```js
January
```

Not February ❌

Reason:

Number-based Date constructor me month indexing `0` se start hoti hai.

```text
0 = January
1 = February
2 = March
...
11 = December
```

Example:

```js
new Date(2023, 0, 14) // January
new Date(2023, 1, 14) // February
```