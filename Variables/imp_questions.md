01_Variables - imp_questions.md

1. Difference between var, let and const?
   Answer:

Keyword Scope Redeclare Reassign
var Function ✅ ✅
let Block ❌ ✅
const Block ❌ ❌

2. What is Hoisting?
   Answer:

JavaScript declarations ko execution se pehle memory me le jata hai.

console.log(a);

var a = 10;

Output:

undefined 3. What is Temporal Dead Zone (TDZ)?
Answer:

Declaration aur initialization ke beech ka area TDZ kehlata hai.

console.log(a);
let a = 10;

Output:
ReferenceError

4. Can const objects be modified?
   Answer:

Object modify ho sakta hai, reference nahi.

const user = {
name: "Niskarsh"
};
user.name = "Pandey";
console.log(user.name);

Output:
Pandey

5. Difference between declaration and initialization?
   Answer:

Declaration:
let a;
Initialization:
a = 10;
Declaration + Initialization:
let a = 10;

6. Why is var avoided in modern JavaScript?
   Answer:

Function scoped hota hai
Redeclaration allow karta hai
Bugs create kar sakta hai
Isliye let aur const use karte hain.

7. Can let be redeclared?
   Answer:

No.
let a = 10;
let a = 20;

Output:

SyntaxError

8. What happens if a variable is accessed before declaration?

Answer:
var → undefined
let → ReferenceError
const → ReferenceError
console.log(a);
var a = 10;

Output:

undefined

9. Difference between Global Scope and Block Scope?
   Answer:

Global Scope:
var a = 10;

Har jagah access ho sakta hai.

Block Scope:
{
let b = 20;
}
Block ke bahar access nahi hoga.

10. When should we use const instead of let?
    Answer:

Jab value change nahi karni ho tab const use karna chahiye.
const PI = 3.14;
Best Practice:
Default → const
Value change ho → let
var avoid karo
