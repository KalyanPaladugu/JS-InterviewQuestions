// let string1="HellowWorld";
// console.log(string1.substring(5,1))

// let arr=[20,1,3];
// console.log(arr.sort());
// o/p:[ 1, 20, 3 ] sort() converts to string lexicographically then order is start caharacter with 1,2,3..


// var arr1=[1,2];
// var arr2=arr1.slice();
// arr2[0]=40
// console.log(arr1)

// console.log(1+2+'3');
// console.log('1'+2+3);
//  o/P:33,123;

// const x=(0 ?? 2) ||3;
// console.log(x)

// const arr=[];
// console.log(arr.every(x =>x>0))
// o/p:true

// console.log(0 || "Hello"); || operator will return rightside value when left side value is 0,"" or false
// console.log(0 ?? "Hello")  ?? operator will return rightside value when left side value is null or undefined

// setTimeout((a,b)=>{
//    console.log (a+b);
// }, 0,10,2,190)

// const obj= {
//     2:"a",1:"b",3:"c"
// }
// console.log(obj)

// const obj={
//     a:10,
//     func:function(){
//         return this.a
//     }
// }

// console.log(obj.func())


// console.log(5 && 1); o/p:1  && will return last truthy value
// console.log(5 || 1); o/p:5  && will return first truthy value

// console.log(false || null || "Hello");  || will return first truthy value o/p:Hello
// console.log(false && null && "Hello");  && will return first falsy value

// console.log(1 && null && "Hello") o/p: null 

// let nums =[1,2,3,4];
// delete nums[2];
// console.log(nums.length);o/p:4

// let a=[0];
// let b=a;
// b[0] = 23;
// console.log(a); o/p:23 
// console.log(b);  o/p:23

// if([]){  // empty arra i truthy value
//     console.log(true)
// }

// console.log("2" > "10");   js engine coverts first character in strings to unicode (50>49)
// console.log("2" > 10);    js engine coverts 2 to integer

// console.log(0.1+0.2 === 0.3); O/P: flase

// console.log(1+false); // boolean values tru converted to 1 and false will be 0
// console.log(1-true);
// console.log(1-false);

// const arr1=[1,2,3];
// const str1="1,2,3";
// console.log(arr1 == str1);  //here arr1 will convert ot strang by .tostring(type coercion)

// console.log(x); o/p:undefined
// var x="Hello";
// console.log(x) o/p:Hello

// console.log([1,2,3]+[2,3,4]);
// o/p:1,2,32,3,4

// console.log(+true);  o/p:1
// console.log(!"Sai")  0/p:false /

// console.log([]+[])  o/p:""
// console.log([1]+[]) o/P: "1"+""
// console.log([1]+"abc") o/p:1abc

// function getAge(...args){
//     console.log(typeof args)

// }
// getAge(21,22,"FF")

// let z=1; 
// y=z= typeof y;
// console.log(z)

// console.log('1'- -'1'); o/p:2
// console.log('1'- +'1'); o/p:0
// console.log('1'+  -'1')

const x=[1];
const y=[2];
// console.log(x+y) o/p:12 Here type coercion will occur to string