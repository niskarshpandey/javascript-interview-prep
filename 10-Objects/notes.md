# 10 - Objects

## What is Object?

Object key-value pairs me data store karta hai.

Example:

```js
const user = {
  name: "Niskarsh",
  age: 22
}
```

---

# Object Creation

## Object Literal

```js
const user = {}
```

Most common way.

---

## Singleton Object

Constructor se object banane par singleton object banta hai.

```js
const user = new Object()
```

---

# Accessing Object Values

## Dot Notation

```js
user.email
```

---

## Bracket Notation

```js
user["email"]
```

Special cases:

```js
user["full-name"]
```

Because:

```js
user.full-name
```

Invalid hai.

---

# Symbol in Object

```js
const mySym = Symbol("key1")
```

Object me symbol key use:

```js
const obj = {
  [mySym]: "value"
}
```

Important:

Without brackets:

```js
mySym: "value"
```

Wrong.

---

# Updating Values

```js
user.email = "abc@gmail.com"
```

---

# Object.freeze()

Object ko immutable bana deta hai.

```js
Object.freeze(user)
```

Freeze ke baad changes apply nahi honge.

---

# Adding Functions in Object

```js
user.greeting = function(){
    console.log("Hello")
}
```

---

# this Keyword

Current object ko refer karta hai.

```js
user.greeting = function(){
   console.log(this.name)
}
```

`this.name` means:

```text
Current object ka name
```

---

# Nested Objects

Object ke andar object.

```js
const regularUser = {
   fullname:{
      userfullname:{
         firstname:"Niskarsh"
      }
   }
}
```

Access:

```js
regularUser.fullname.userfullname.firstname
```

---

# Merge Objects

## Object.assign()

```js
Object.assign({}, obj1, obj2)
```

---

## Spread Operator

Recommended.

```js
const obj3 = {...obj1, ...obj2}
```

---

# Array of Objects

```js
const users = [
   { id:1, email:"a@gmail.com" },
   { id:2, email:"b@gmail.com" }
]
```

Access:

```js
users[0].email
```

---

# Object Methods

## Object.keys()

Keys array return karta hai.

```js
Object.keys(user)
```

---

## Object.values()

Values array return karta hai.

```js
Object.values(user)
```

---

## Object.entries()

Key-value pairs array me.

```js
Object.entries(user)
```

Output:

```js
[
  ["name", "Niskarsh"],
  ["age", 22]
]
```

---

## hasOwnProperty()

Check karta hai key present hai ya nahi.

```js
user.hasOwnProperty("email")
```

Output:

```js
true / false
```

---

# Object Destructuring

Object se values extract karna.

```js
const course = {
   courseInstructor: "Hitesh"
}
```

Destructure:

```js
const { courseInstructor } = course
```

Rename bhi kar sakte:

```js
const { courseInstructor: guruji } = course
```

---

# JSON

JSON = JavaScript Object Notation

API responses mostly JSON me aate hain.

Example:

```json
{
  "name": "niskarsh",
  "course": "js"
}
```

Rules:
- Keys string me
- No functions

---

# Important Interview Trap

```js
const obj = {
  name: "Niskarsh"
}

const obj2 = obj
obj2.name = "Pandey"
```

Question:

`obj.name` kya hoga?

Answer:

```js
Pandey
```

Reason:

Objects heap memory me store hote hain aur reference share karte hain.

---

## Memory Rule

```text
Primitive → Copy
Object → Reference
```