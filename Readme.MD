JavaScript interview Questions
==============================

+ What is JavaScript?
    - JavaScript is a high-level, interpreted scripting language used to make web pages interactive. It runs in the browser and on servers (Node.js)

+ What are JavaScript data types?

```
Primitive types:
String
Number
Boolean
Undefined
Null
Symbol
BigInt

Non-primitive:
Object (arrays, functions, objects)
```
- Explanation:
    - Primitive values are immutable, while objects are mutable

    
+ Difference between var, let, and const?

```
Feature	     var	    let	   const
Scope	     Function	Block	Block
Re-declare	 Yes	    No  	No
Re-assign	 Yes	    Yes	    No
```
- Explanation:
    - var is function-scoped and can cause bugs.
    - let and const are block-scoped.
    - Use const by default, let when reassignment is needed.