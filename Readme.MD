
- Date
```
const date = new Date();

// US English: MM/DD/YYYY
console.log(date.toLocaleDateString('en-US')); 

// British English: DD/MM/YYYY
console.log(date.toLocaleDateString('en-GB')); 

// Custom options
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(date.toLocaleDateString('en-US', options)); 
// Output: "Tuesday, March 3, 2026"
```

```
const formatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'full',
  timeStyle: 'short'
});

console.log(formatter.format(new Date()));
// Output: "Tuesday, March 3, 2026 at 5:04 PM"

```
- Originally created by Facebook, Open Graph (OG) is a set of rules that tells social media platforms and messaging apps (like WhatsApp, Slack, or LinkedIn) exactly how to display your website when someone shares your link.
```
<head>
  <title>My Awesome App</title>
  
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.myapp.com/" />
  <meta property="og:title" content="My Awesome App - Home" />
  <meta property="og:description" content="The best app for tracking your Redux counter in 2026." />
  <meta property="og:image" content="https://www.myapp.com/preview-image.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="My Awesome App" />
</head>
```
```
let string1="HellowWorld";
console.log(string1.substring(5,1))
o/p:ello
```

``` let arr=[20,1,3];
 console.log(arr.sort());
 o/p:[ 1, 20, 3 ] sort() converts to string lexicographically then order is start caharacter with 1,2,3..```

```
 var arr1=[1,2];
 var arr2=arr1.slice();
 arr2[0]=40
 console.log(arr1)
 o/P:[ 1, 2 ]
 ```

```
 console.log(1+2+'3');
console.log('1'+2+3);
 o/P:33,123;
 ```

```
 const x=(0 ?? 2) || 3;
 console.log(x);
o/P:3
 ```
 - ??  Nullish Coalescing operator only moves to the right-side value if the left side is null or undefined.
 - || give first truthy value

```
const arr=[];
console.log(arr.every(x =>x>0))
o/p:true
```
- The .every() method checks if the provided callback function returns true for all elements in the array. If the array is empty, there are no elements to fail the test.

- console.log(0 || "Hello"); || operator will return rightside value when left side value is 0,"" or false
- console.log(0 ?? "Hello")  ?? operator will return rightside value when left side value is null or undefined

```
setTimeout((a,b)=>{
   console.log (a+b);
}, 0,10,2,190)

o/p:12
```

```const obj= {
   2:"a",1:"b",3:"c"
 }
console.log(obj)```

```
const obj={
    a:10,
    func:function(){
        return this.a
     }
 }
console.log(obj.func())
```

- console.log(5 && 1); o/p:1  && will return last truthy value
- console.log(5 || 1); o/p:5  && will return first truthy value

- console.log(false || null || "Hello");  || will return first truthy value o/p:Hello
- console.log(false && null && "Hello");  && will return first falsy value

- console.log(1 && null && "Hello") o/p: null 

```
let nums =[1,2,3,4];
delete nums[2];
console.log(nums.length);
o/p:4
```
```
let a=[0];
let b=a;
b[0] = 23;
console.log(a); o/p:23 
console.log(b);  o/p:23
```

```
if([]){  // empty array return truthy value
    console.log(true)
 }
```

- console.log("2" > "10");   js engine coverts first character in strings to unicode (50>49)
- console.log("2" > 10);    js engine coverts 2 to integer

- console.log(0.1+0.2 === 0.3); O/P: flase

- console.log(1+false); // boolean values true converted to 1 and false will be 0
- console.log(1-true);
- console.log(1-false);

```
const arr1=[1,2,3];
const str1="1,2,3";
console.log(arr1 == str1);  //here arr1 will convert ot strang by .tostring(type coercion)
```

```
console.log(x); o/p:undefined
var x="Hello";
console.log(x) o/p:Hello
```

- console.log([1,2,3]+[2,3,4]);
  - o/p:1,2,32,3,4

- console.log(+true);  o/p:1
- console.log(!"Sai")  0/p:false 
```


- console.log([]+[])  o/p:""
- console.log([1]+[]) o/P: "1"+""
- console.log([1]+"abc") o/p:1abc
- console.log([1, 2, 3] + "abc"); 
  - Result: "1,2,3abc"

```
 function getAge(...args){
    console.log(typeof args)
}
 getAge(21,22,"FF")
```

```
 let z=1; 
 y=z= typeof y;
console.log(z)
```

- console.log('1'- -'1'); o/p:2
- console.log('1'- +'1'); o/p:0
- console.log('1'+  -'1'); o/p:1-1

```
const x=[1];
const y=[2];
console.log(x+y) o/p:12 Here type coercion will occur to string
```

```
 const x=[1,2];
 const y="1,2";
 console.log(x==y); o/p:true, Here type coercion will change x to string
```

```
const x="abc",y ="def";
console.log(x+ +y) o/p:abcNAN ; unary operator will convert to nerest nueric type of not NaN
```
- union two array by delete duplicant elements
```
const arr1=[1,2,3,4,6];
const arr2=[3,4,6,7,9];

//solutions1:
const newArray=[...arr1,...arr2];
console.log([...new Set(newArray)]);
//solution2:
const newArray = [];
for(let i of arr1){
    newArray.push(i)
}
for(let i of arr2){
    if(!newArray.includes(i)){
        newArray.push(i)
    }
}
console.log(newArray)
```
- Create Object by accepting keys from arr1 and values from arr2
```
const arr1=['name','age','salary'];
const arr2=['kalyan','28','600000'];

function objFromArray(arr1,arr2){
const obj={};
for(let i in arr1 ){
     <!-- for(let i =0;i<arr1.length;i++){ -->}
    obj[arr1[i]] = arr2[i]
}
return obj
}

console.log(objFromArray(arr1,arr2))
```

```
for(i=0;i<=3;i++){
     setTimeout(()=>{
         console.log(i)
    },100)
 }
 o/p:4 4 4 4
```
```
function typeChecking(){

    var a=b=3;
    console.log(typeof a);
    console.log(typeof b)
}
typeChecking()
console.log(typeof a);
console.log(typeof b);

o/p: Number,Number undefined, number
```
- Missing a Number
```
let arr=[1,2,4,5];
let n=arr.length+1;
let expectedSum=n*(n+1)/2;
let actualSum=0;

for(let i=0;i<arr.length;i++){
    actualSum+=arr[i]
}
console.log(expectedSum-actualSum)
o/p:3
```
- Missing numbers in given array
```
let arr=[1,2,4,5,9];
let missingNumers=[];
let max=Math.max(...arr);
let numSet= new Set(arr);
for(let i=1;i<=max;i++){
if(!numSet.has(i)){
    missingNumers.push(i)
}

}
console.log(missingNumers)

```
- remove empty values
```
let arr=[1,2,4,53,46,3,,,,,,3,,2,,1]
// console.log(arr.filter(Boolean))
let newArr=arr.filter((item) => item != false );
console.log(newArr)
```
- console.log(false == []); //true
- console.log(false == ![]); //true
- console.log([] == []);   //false

- remove duplicate keys from both objects
```
let obj1={a:1,b:2,c:3,d:4}
let obj2={d:4,e:6}
let obj3={}
let count=0;
for(let i in obj1){
    if(!(i in obj3)){
        obj3[i] = obj1[i];
        count++
    }
}
for(let i in obj2){
    if(!(i in obj3)){
        obj3[i] = obj2[i];
        count++
    }
}
console.log(obj3,"obj length",count)
```
- sum array elements 
```
let arr=[1,2,3,4,"asd","fgh"];

function arrSum(arr){
    let sum=0
     for(let i of arr){
        if (typeof i == 'number'){
        sum+=i
     }
    }
     return sum
}
console.log(arrSum(arr))
```

- count vowels in given string
```
let str="asdfwetuiovASFTUIOLVM"
function vowelsCount(str){
    let count=0;
    // let vowels=['a','e','i','o','u','A','E','I','O','U'];
    // let vowels="aeiouAEIOU"
    let vowels=/[aeiou]/i
    for(let i of str){
        // if(vowels.includes(i)){
        if(vowels.test(i)){
            count++
        }
    }
    return count

}
console.log(vowelsCount(str))
```

- In JavaScript, call, apply, and bind are used to control the value of this inside a function. This is often called Function Borrowing.
- Imagine you have a specific object, and you want to use a function belonging to another object (or a standalone function) on it.

1. `call()`
The `call()` method invokes a function immediately. It takes the this context as the first argument, followed by the function arguments individually.

```
const user1 = { name: "Arjun" };

function greet(city, country) {
    console.log(`Hello, I am ${this.name} from ${city}, ${country}`);
}

// Arguments are passed one by one
greet.call(user1, "Mumbai", "India"); 
// Output: Hello, I am Arjun from Mumbai, India
```
2. `apply()`

- The `apply()` method is exactly like `call()`, but it takes the function arguments as an array. This is useful when your data is already in an array format.

```
const user2 = { name: "Deepa" };

// Arguments are passed as a single array
greet.apply(user2, ["Bangalore", "India"]); 
// Output: Hello, I am Deepa from Bangalore, India
Mnemonic: Apply = Array | Call = Comma-separated.
```

3. `bind()`
Unlike the others, `bind()` does not invoke the function immediately. Instead, it returns a new function with the this context permanently locked. You can call this new function whenever you want later.

```
const user3 = { name: "Vikram" };

// Returns a new function
const boundGreet = greet.bind(user3, "Chennai", "India");

// Later in the code...
boundGreet(); 
// Output: Hello, I am Vikram from Chennai, India
```

##### Promises

- A Promise in JavaScript is an object that represents the eventual completion (success) or failure of an asynchronous operation and its resulting value
- A Promise has 3 states:
    - Pending → Initial state (operation still running)
    - Fulfilled → Operation completed successfully (resolve)
    - Rejected → Operation failed (reject)

✅ Why do we use Promises?
1. Handle asynchronous operations
API calls
File reading
Timers (setTimeout)
2. Avoid "Callback Hell"

❌ Without Promises:
```
doSomething(() => {
  doNext(() => {
    doAnother(() => {
      // messy nested callbacks 😵
    });
  });
});
```
- callback hell vs promises
```
❌ Callback Hell (Pyramid of Doom)
getUser(userId, function(err, user) {
  if (err) {
    console.error(err);
  } else {
    getOrders(user.id, function(err, orders) {
      if (err) {
        console.error(err);
      } else {
        getOrderDetails(orders[0].id, function(err, details) {
          if (err) {
            console.error(err);
          } else {
            console.log(details);
          }
        });
      }
    });
  }
});

// ✅ Promises (Clean & Linear)
getUser(userId)
  .then((user) => getOrders(user.id))
  .then((orders) => getOrderDetails(orders[0].id))
  .then((details) => console.log(details))
  .catch((err) => console.error(err));
```
✅ With Promises:

```
doSomething()
  .then(doNext)
  .then(doAnother)
  .catch(handleError);
```
3. Better error handling
    - Use .catch() instead of multiple error callbacks
4. Chain operations easily
    - Perform multiple async steps in sequence
5. Run parallel tasks
    - Using Promise.all()

- Drabacks of Promises

1. Callback Hell Still Exists (Promise Hell)
```
// ❌ Multiple nested .then() calls
fetchUser(1)
  .then(user => {
    return fetchPosts(user.id)
      .then(posts => {
        return fetchComments(posts[0].id)
          .then(comments => {
            return { user, posts, comments };
          });
      });
  })
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
- Solution:use async/await
2. Silent Failures
- Unhandled promise rejections can go unnoticed.
- javascript// ❌ Error silently ignored

```
fetchData()
  .then(data => processData(data))
  .then(result => saveResult(result));
  // .catch() missing! Error swallowed

// ✅ Always add error handling
fetchData()
  .then(data => processData(data))
  .then(result => saveResult(result))
  .catch(error => console.error('Error:', error));
```
- Solution: Always add .catch() or use global error handler:
3. No Cancellation Support
- Promises can't be cancelled once created.
=- javascript// ❌ Promise can't be cancelled
```
const promise = fetchData(); // Can't stop this!

// ✅ Solution: Use AbortController
const controller = new AbortController();

fetch('/api/data', { signal: controller.signal })
  .then(res => res.json())
  .catch(error => console.error(error));

// Cancel the request
setTimeout(() => controller.abort(), 1000);
```
4. Error Handling Complexity

```
// ❌ Error only caught if it's in the immediate chain
fetchData()
  .then(data => {
    throw new Error('Processing error');
  })
  .then(result => console.log(result)) // Skipped, error thrown above
  .catch(error => console.error(error)); // Catches it

// ❌ Errors in callbacks might not be caught
fetchData()
  .then(data => {
    setTimeout(() => {
      throw new Error('Async error');
    }, 1000);
  })
  .catch(error => {
    console.error(error); // Won't catch setTimeout error!
  });

// ✅ Use async/await for cleaner error handling
async function loadData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```
- How to overcome this issue always use asyn/await

```
// Clean, synchronous-looking code
async function getUserWithPosts(userId) {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(user.id);
    const comments = await fetchComments(posts[0].id);
    
    return { user, posts, comments };
  } catch (error) {
    console.error('Error loading data:', error);
    throw error;
  }
}

// Usage
getUserWithPosts(1)
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

- `prototype` 
- In JavaScript, the `prototype` is the mechanism that allows objects to inherit features from one another. Every object in JavaScript has a built-in property called its prototype.
- we used prototype mainly for efficiency and memory saving
- instead of creating same function again and again for every object we put it in the prototype so all object can share it
