02_Data_Types - imp_questions.md

1. What are primitive data types?
   Answer:

JavaScript me 7 primitive data types hote hain:
String
Number
Boolean
Null
Undefined
Symbol
BigInt

2. What are non-primitive data types?
   Answer:

Reference type data:
Object
Array
Function

3.  Difference between primitive and non-primitive data types?
    Answer:

Primitive value copy karte hain.
let a = 10;
let b = a;
Non-primitive reference copy karte hain.

let obj1 = {name:"Niskarsh"};
let obj2 = obj1;

4.  What is typeof operator?

Answer:

Variable ka datatype batata hai.
typeof "Hello"
typeof 123
typeof true

Output:
string
number
boolean

5. Why does typeof null return object?
   Answer:

JavaScript ka historical bug hai.
typeof null
Output:

object

6. Difference between null and undefined?
   Answer:

undefined → value assign nahi hui
null → intentionally empty value

7. Is Array a datatype?

Answer:
Nahi.

Array ek Object type hai.
typeof []

Output:

object

8. Difference between Array and Object?

Answer:
Array:

["A","B","C"]

Object:

{
name:"Niskarsh"
}
Array indexed hota hai, Object key-value pair.

9. What is NaN?

Answer:

Not a Number
Number("Hello")
Output:

NaN

10. How to check if a value is an array?

Answer:
Array.isArray([])

Output:
true
