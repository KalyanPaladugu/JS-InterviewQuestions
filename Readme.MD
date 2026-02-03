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
    - var is function-scoped and can cause bugs
    - let and const are block-scoped
    - Use const by default, let when reassignment is needed

- What is undefined vs null?

    - undefined: variable declared but not assigned
    - null: intentional absence of value

```
Explanation:
let a;
let b = null;
```a``` is undefined, ```b``` is explicitly empty
```

+ What is a closure?
- A closure is a function that remembers variables from its outer scope, even after the outer function has executed

```
Example:

function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

Explanation:
Closures help in data privacy and function factories
```
- What is hoisting?
    - Hoisting is JavaScript’s behavior of moving declarations to the top of the scope.
```
Explanation:
console.log(a); // undefined
var a = 10;
Only declarations are hoisted, not initializations
```

- Arrow function vs normal function?
    - Arrow functions do not have their own ```this```
    - Cannot be used as constructors

```
Shorter syntax
const add = (a, b) => a + b;
```

- Objects & Arrays

- What is this keyword?
    - this refers to the object that is executing the function.
    - Its value depends on how the function is called (method, constructor, event, etc.)

- Difference between == and ===?

    - == compares values (type conversion)
    - === compares value and type
```
5 == "5"   // true
5 === "5"  // false
```
- What is a Promise?
    - A Promise represents a value that may be resolved, rejected, or pending.
```
fetch(url)
  .then(res => res.json())
  .catch(err => console.error(err));
```

- async / await?

    - It is syntactic sugar over promises that makes async code look synchronous.
```
async function getData() {
  const res = await fetch(url);
  const data = await res.json();
}
```

- What is the event loop?

- The event loop handles asynchronous operations by moving tasks from the callback queue to the call stack

- Explanation:
    - It allows JavaScript to be non-blocking despite being single-threaded

- What is debouncing?
    - Debouncing limits function execution until a delay has passed
    - Use case: search input, resize events\

- What is throttling?
     - Throttling ensures a function runs at most once in a specified interval
+ Use case: scrolling, button clicks

- What is prototypal inheritance?
     - Objects can inherit properties from another object via the prototype chain.

- Explanation:
  - JavaScript uses prototypes instead of classical inheritance

+ What is call, apply, and bind?

Answer:
 - call: invoke function with arguments individually
 - apply: arguments as array
 - bind: returns a new function

+ Reverse a string
 - const reverse = str => str.split('').reverse().join('');

+ Check if a number is prime

```
function isPrime(n) {
  if (n <= 1) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
```
+ Difference between map, filter, and reduce?
    - map → transforms array
    - filter → selects elements
    - reduce → accumulates values

1. Form Validation Scenario

```
Question:

You have a signup form. The user clicks Submit, but some fields are empty. How would you prevent form submission?

Answer:

form.addEventListener("submit", function (e) {
  e.preventDefault();
});


Explanation:
preventDefault() stops the browser’s default behavior (form submission). You validate inputs first, then submit only if valid.
```

2. API Call Fails Sometimes

```
Question:

Your API occasionally fails. How do you handle errors gracefully?

Answer:

async function fetchData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
  } catch (error) {
    console.error("Something went wrong", error);
  }
}


Explanation:
try...catch prevents the app from crashing and allows you to show user-friendly error messages.

```
3. Search Box Optimization (Debouncing)

```
Question:

Users type fast in a search box, triggering too many API calls. How do you optimize this?

Answer:
Use debouncing.

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}


Explanation:
Debouncing waits until the user stops typing before calling the API.
```


4. Button Clicked Multiple Times

```
Question:

A payment button is clicked multiple times. How do you prevent duplicate requests?

Answer:

button.disabled = true;


Explanation:
Disable the button after the first click or use throttling to limit execution.
```

5. Data Sharing Between Functions

```
Question:

You want private variables that shouldn’t be accessible globally. What do you use?

Answer:
Closures

function counter() {
  let count = 0;
  return () => ++count;
}


Explanation:
Closures provide data privacy while still allowing controlled access.
```

6. Page Loads Slowly

```
Question:

Your page loads slowly due to large JavaScript files. What can you do?

Answer:

Code splitting

Lazy loading

Defer scripts

<script src="app.js" defer></script>


Explanation:
defer loads JS after HTML parsing, improving performance.

```

7. Handling Multiple API Calls

```
Question:

You need to fetch user data and posts at the same time. How?

Answer:

Promise.all([fetch(userURL), fetch(postsURL)])


Explanation:
Promise.all() runs promises in parallel, improving speed.

```

8. Keeping UI Responsive

```
Question:

A heavy calculation freezes the UI. How do you fix it?

Answer:

Use setTimeout

Use Web Workers

Explanation:
JavaScript is single-threaded. Breaking tasks prevents blocking the UI.

```
9. Session Persistence
```
Question:

User refreshes the page and loses data. How do you persist it?

Answer:

localStorage

sessionStorage

localStorage.setItem("user", JSON.stringify(user));


Explanation:
Data remains even after page reload.
```

10. Conditional Rendering
```
Question:

Show a loader until data is fetched. How?

Answer:

if (loading) {
  showLoader();
} else {
  showData();
}


Explanation:
This improves UX and prevents empty screens
```
11. Authentication Token Expired
```
Question:

API returns 401 (Unauthorized). What should the app do?

Answer:

Redirect to login

Refresh token

Explanation:
Handle authentication failures to maintain security.

```

12. Sorting Large Data Sets
```
Question:

How do you sort users by age?

Answer:

users.sort((a, b) => a.age - b.age);


Explanation:
Custom comparator ensures correct numeric sorting.
```

13. Prevent Memory Leaks

```
Question:

Event listeners remain even after page change. What do you do?

Answer:

element.removeEventListener("click", handler);


Explanation:
Always clean up listeners to avoid memory leaks.
```

14. Handling Undefined Data

```
Question:

API response has missing fields. How do you avoid crashes?

Answer:

user?.profile?.name


Explanation:
Optional chaining prevents runtime errors.
```

15. Multiple Developers Working on Code
```
Question:

How do you avoid variable conflicts?

Answer:

Modules

IIFE

Block scope (let, const)
```


- Promise Order

```
console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("end");
```

Output:
```
start
end
promise
timeout

Why:
Microtasks (Promises) run before macrotasks (setTimeout).
```



🧠 1. Event Loop (Async Output Questions)

Classic Question
```
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => console.log("C"));

console.log("D");

✅ Output
A
D
C
B
```

🔑 Interview-Winning Explanation

“JavaScript runs synchronous code first on the call stack.
Promises go to the microtask queue, while setTimeout goes to the macrotask queue.
The event loop always executes microtasks before macrotasks, so C runs before B.”

🔥 Keywords to say:
Call stack · Microtask queue · Macrotask queue · Event loop