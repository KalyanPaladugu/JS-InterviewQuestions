// let string1="HellowWorld";
// console.log(string1.substring(1,5))

// let arr=[20,1,3];
// console.log(arr.sort());
// o/p:[ 1, 20, 3 ] sort() converts to string lexicographically then order is start caharacter with 1,2,3..

// let arr=[20,1,3];
// function sortingArray(arr){
    
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//             [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
//             }
//         }
        
//     }
//     return arr
// }

// console.log(sortingArray(arr))



// var arr1=[1,2];
// var arr2=arr1.slice();
// arr2[0]=40
// console.log(arr2)

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
// console.log(5 || 1); o/p:5  || will return first truthy value

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

// if([]){  // empty array i truthy value
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
// console.log([1]+[]) o/P: "1"
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
//  console.log('1'+  -'1')

// const x=[1];
// const y=[2];
// console.log(x+y) o/p:12 Here type coercion will occur to string

// const x=[1,2];
// const y="1,2";
// console.log(x==y); o/p:true, Here type coercion will change x to string

// const x="abc",y ="def";
// console.log(x+ +y) o/p:abcNAN ; unary operator will convert to nearest nueric type of not NaN

// let arr=[1].push(2); here after adding 2 it will returns the length of the array:2
// console.log(arr.push(3)) TypeError: arr.push is not a function

// let num=0;
// console.log(num++);  // o/p:0 return value and increment 
// console.log(++num); // o/p:2 intial value 1 and preincrement and return 2
// console.log(num)   //  o/p:2


// console.log(data());
// var data= function(){
//  return '1'
// }

// TypeError: data is not a function

// const obj={a:1};
// // obj={a:3} //TypeError: Assignment to constant variable. const can't re assign values
// obj.a=12; // but we can modify properties
// console.log(obj)

// let obj={
//     a:null,b:undefined
// }
// let newObj=JSON.stringify(obj);
// let newObj1=JSON.parse(newObj)
// console.log(JSON.stringify(obj)) // while convertion undefined values are removed
// console.log(newObj1) 

//Remove element from array
// let arr=[1,2,3,4,5,6,4];
// let elementIndex = arr.indexOf(2);
// arr.splice(elementIndex,1);
// console.log(arr);
// function removeElement(arr,element){
//      let elementIndex = arr.indexOf(element);

//      while(elementIndex !== -1){
//         arr.splice(elementIndex,1);
//         elementIndex = arr.indexOf(element);
//      }
    
//     return arr
// }

// console.log(removeElement(arr,4))

// console.log(true+1);  //o/p: 2, through type coercion true will be 1
// console.log(true+'1'); // o/p: true1, adding boolean to String will become string

// const str="Hello";
// str.name="Kalyan";
// console.log(str.name) // o/p :undefined, while try to add propeties to primitive data type 
// it will create temp obj while execution after execution it will remove it and no error will generate

// const str1="Kalyan";
// const str2= new String("Kalyan");
// console.log(typeof(str2))
// console.log(str1 == str2); //o/p:true, str2 is will create new object by type coercion it will switch to string
// console.log(str1===str2); // o/p:false

// console.log(Boolean({}));  o/p:true, empty object is truthy value
// console.log(Boolean([])); o/p: true, empty array is truthy value
// console.log(Boolean("")); o/p:false, empty string is falsy value
// console.log(Boolean(new Boolean(false))) ; o/p:true, new Boolean(false) will return new object

// console.log([] == ![]) o/p:true, ![] is false and left [] will convert to empty String then it is false,false==false => true 

// let obj1={name:"Kalyan"}
// let obj2=obj1;
// obj2={}; // here we are reassigning obj2 to new object so obj1 will not change
// console.log(obj1) ;
// console.log(obj2) ;
// let a=3;
// let b=a;
// b=5;
// console.log(a);
// console.log(b);
// let arr1=[3];
// let arr2=arr1;
// arr2=[5];
// console.log(arr1);
// console.log(arr2);
// let arr1 = [3];
// let arr2 = arr1;

// arr2[0] = 5; // Modifying the content at the shared address

// console.log(arr1); // [5]
// console.log(arr2); // [5]