# 13 - Arrow Functions and IIFE

# this Keyword in Object

`this` current object ko refer karta hai.

Example:

```js
const user = {
    username: "niskarsh",

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
    }
}
```

Here:

```js
this.username
```

means:

```text
Current object ka username
```

---

# this in Global Scope

Browser me:

```js
console.log(this)
```

Usually:

```text
Window object
```

Node / VS Code me:

```js
{}
```

Isliye browser aur VS Code me difference dikhta hai.

---

# this in Normal Function

```js
function chai(){
   let username = "niskarsh"
   console.log(this.username)
}
```

Output:

```js
undefined
```

Reason:

`this` normal function ke andar object context ke bina useful nahi hota.

---

# Arrow Function

Syntax:

```js
const chai = () => {
   console.log("Hello")
}
```

Arrow function shorter syntax deta hai.

---

# Arrow Function and this

```js
const chai = () => {
   console.log(this)
}
```

Arrow functions apna own `this` nahi banate.

Wo surrounding scope ka `this` use karte hain.

---

# Explicit Return

Normal return likhte hain.

```js
const addTwo = (num1, num2) => {
   return num1 + num2
}
```

---

# Implicit Return

Agar single expression hai to braces hata sakte ho.

```js
const addTwo = (num1, num2) => num1 + num2
```

or

```js
const addTwo = (num1, num2) => (num1 + num2)
```

---

# Returning Object from Arrow Function

Object return karna ho to parentheses mandatory.

Wrong:

```js
const func = () => { username: "niskarsh" }
```

Correct:

```js
const func = () => ({ username: "niskarsh" })
```

---

# IIFE

Full form:

```text
Immediately Invoked Function Expression
```

Function jo define hote hi execute ho jaye.

Syntax:

```js
(function chai(){
   console.log("DB CONNECTED")
})()
```

---

# Why IIFE?

Use cases:

- Immediate execution
- Global scope pollution avoid
- Private scope create

---

# Named IIFE

Function name hota hai.

```js
(function chai(){
   console.log("DB CONNECTED")
})()
```

---

# Arrow IIFE

```js
((name) => {
   console.log(`DB CONNECTED ${name}`)
})("niskarsh")
```

---

# Important Semicolon Rule

Multiple IIFEs likhne ho:

```js
(function one(){})();
(function two(){})();
```

First IIFE ke baad semicolon zaroor lagao.

Without semicolon:

```js
Error aa sakta hai
```

Because JS next `()` ko previous function continuation samajh sakta hai.

---

# Important Interview Trap

```js
const obj = {
   name: "Niskarsh",
   greet: () => {
      console.log(this.name)
   }
}

obj.greet()
```

Output?

```js
undefined
```

Not:

```js
Niskarsh
```

Why?

Because arrow function object ka `this` bind nahi karta.