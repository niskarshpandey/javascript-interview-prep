# JavaScript Execution Context

## What is Execution Context?

Execution Context (EC) is the environment in which JavaScript code is executed.

JavaScript engine creates an execution context whenever code runs.

There are 3 types of Execution Context:

1. **Global Execution Context (GEC)**
2. **Function Execution Context (FEC)**
3. **Eval Execution Context**

---

## 1. Global Execution Context (GEC)

When JavaScript starts executing a file, first it creates a **Global Execution Context**.

In browser:

```js
this === window // true (non-strict mode)
```

Global execution context contains:

- Global variables
- Function declarations
- `this`

---

## Example

```js
let val1 = 10
let val2 = 5

function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)
```

---

# Execution Context has 2 Phases

Every execution context has two phases:

1. Memory Creation Phase
2. Execution Phase

---

# Phase 1: Memory Creation Phase

In this phase JavaScript only allocates memory.

Variables get:

```txt
undefined
```

Functions get:

```txt
complete definition
```

For above example:

```txt
val1    -> undefined
val2    -> undefined
addNum  -> function definition
result1 -> undefined
result2 -> undefined
```

---

## Important

This is why function hoisting works.

Example:

```js
sayHello()

function sayHello() {
    console.log("Hello")
}
```

Output:

```txt
Hello
```

Because function definition is already stored in memory phase.

---

# Phase 2: Execution Phase

Now JavaScript executes code line by line.

---

## Step 1

```js
let val1 = 10
```

Memory update:

```txt
val1 -> 10
```

---

## Step 2

```js
let val2 = 5
```

Memory update:

```txt
val2 -> 5
```

---

## Step 3

```js
let result1 = addNum(val1, val2)
```

Function call happens.

A new **Function Execution Context** is created.

---

# Function Execution Context (FEC)

Whenever a function is called, JavaScript creates a new execution context for that function.

Example:

```js
addNum(10, 5)
```

This function context also has 2 phases.

---

## Function Memory Phase

```txt
num1  -> undefined
num2  -> undefined
total -> undefined
```

---

## Function Execution Phase

Arguments assigned:

```txt
num1 -> 10
num2 -> 5
```

Execute:

```js
total = num1 + num2
```

Result:

```txt
total -> 15
```

Return:

```js
return total
```

Returned value goes back to global context.

```txt
result1 -> 15
```

Function execution context gets deleted after execution.

---

## Second Function Call

```js
let result2 = addNum(10, 2)
```

New function context created again.

Memory phase:

```txt
num1  -> undefined
num2  -> undefined
total -> undefined
```

Execution phase:

```txt
num1 -> 10
num2 -> 2
total -> 12
```

Return:

```txt
result2 -> 12
```

---

# Call Stack

JavaScript uses **Call Stack** to manage execution contexts.

It follows:

**LIFO (Last In First Out)**

Meaning:
Last function added to stack gets executed first.

---

## Example 1

```js
function one() {
    console.log("one")
}

function two() {
    console.log("two")
}

function three() {
    console.log("three")
}

one()
two()
three()
```

Execution:

```txt
Global
```

Call `one()`:

```txt
one
Global
```

Complete → Pop

Call `two()`:

```txt
two
Global
```

Complete → Pop

Call `three()`:

```txt
three
Global
```

Complete → Pop

Final:

```txt
Global
```

---

# Nested Call Stack Example

```js
function one() {
    console.log("one")
    two()
}

function two() {
    console.log("two")
    three()
}

function three() {
    console.log("three")
}

one()
```

---

## Step 1

```txt
one
Global
```

Output:

```txt
one
```

---

## Step 2

`one()` calls `two()`

Stack:

```txt
two
one
Global
```

Output:

```txt
two
```

---

## Step 3

`two()` calls `three()`

Stack:

```txt
three
two
one
Global
```

Output:

```txt
three
```

---

## Pop Sequence

`three()` complete:

```txt
two
one
Global
```

`two()` complete:

```txt
one
Global
```

`one()` complete:

```txt
Global
```

---

# Key Points

- JavaScript is single-threaded.
- It executes one thing at a time.
- Before execution, memory allocation happens.
- Variables get `undefined`.
- Functions get full definition.
- Each function call creates a new execution context.
- Execution contexts are managed by call stack.
- Call stack follows **LIFO**.

---

# One Line Summary

> JavaScript first creates memory, then executes code line by line using execution contexts and call stack.