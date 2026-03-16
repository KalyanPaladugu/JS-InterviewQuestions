// union two array by delete duplicant elements
// const arr1=[1,2,3,4,6];
// const arr2=[3,4,6,7,9];

// //solutions1:
// const newArray=[...arr1,...arr2];
// console.log([...new Set(newArray)]);
// //solution2:
// const newArray = [];
// for(let i of arr1){
//     newArray.push(i)
// }
// for(let i of arr2){
//     if(!newArray.includes(i)){
//         newArray.push(i)
//     }
// }
// console.log(newArray)

// Create Object by accepting keys from arr1 and values from arr2

// const arr1=['name','age','salary'];
// const arr2=['kalyan','28','600000'];

// function objFromArray(arr1,arr2){
// const obj={};
// for(let i in arr1 ){
//     // for(let i =0;i<arr1.length;i++){
//     obj[arr1[i]] = arr2[i]
// }
// return obj
// }

// console.log(objFromArray(arr1,arr2))

// for(i=0;i<=3;i++){
//     setTimeout(()=>{
//         console.log(i)
//     },100)
// }

// function typeChecking(){

//     var a=b=3;
//     console.log(typeof a);
//     console.log(typeof b)
// }
// typeChecking()
// console.log(typeof a);
// console.log(typeof b);

// o/p: Number,Number undefined, number

// //Missing a Number
// let arr=[1,2,4,5];
// let n=arr.length+1;
// let expectedSum=n*(n+1)/2;
// let actualSum=0;

// for(let i=0;i<arr.length;i++){
//     actualSum+=arr[i]
// }
// console.log(expectedSum-actualSum)

//Missing a Numbers in given range
// let arr=[1,2,4,5,9];
// let missingNumers=[];
// let max=Math.max(...arr);
// let numSet= new Set(arr);
// for(let i=1;i<=max;i++){
// if(!numSet.has(i)){
//     missingNumers.push(i)
// }

// }
// console.log(missingNumers)

// remove empty values
// let arr=[1,2,4,53,46,3,,,,,,3,,2,,1]
// // console.log(arr.filter(Boolean))
// let newArr=arr.filter((item) => item != false );
// console.log(newArr)

// console.log(false == []);
// console.log(false == ![]);
// console.log([] == []);

// let arr=[1,2,3]
// let re=arr.forEach(i => console.log(i*2) )
// console.log(re)
// console.log(arr)

// let obj1={a:1,b:2,c:3,d:4}
// let obj2={d:4,e:6}
// let obj3={}
// let count=0;
// for(let i in obj1){
//     if(!(i in obj3)){
//         obj3[i] = obj1[i];
//         count++
//     }
// }
// for(let i in obj2){
//     if(!(i in obj3)){
//         obj3[i] = obj2[i];
//         count++
//     }
// }
// console.log(obj3,"obj length",count)

// sum array elements

// let arr=[1,2,3,4,"asd","fgh"];

// function arrSum(arr){
//     let sum=0
//      for(let i of arr){
//         if (typeof i == 'number'){
//         sum+=i
//      }
//     }
//      return sum
// }
// console.log(arrSum(arr))


// let str="asdfwetuiovASFTUIOLVM"
// function vowelsCount(str){
//     let count=0;
//     // let vowels=['a','e','i','o','u','A','E','I','O','U'];
//     // let vowels="aeiouAEIOU"
//     let vowels=/[aeiou]/i
//     for(let i of str){
//         // if(vowels.includes(i)){
//         if(vowels.test(i)){
//             count++
//         }
//     }
//     return count

// }
// console.log(vowelsCount(str))

//Factorial
// function factorialN(n){
//    let result=1;
//     if(n == 0 || n===1) return 1;
//     for(let i=2;i<=n;i++){
//        result *=i
//     }
// return result
// }

// function factorialN(n){
   
//     if(n == 0 || n===1) return 1;
//     return n* factorialN(n-1)

// }

//  console.log(factorialN(6))

//JS program to armstrong number


// function armStrongN(num){
//    let tempValue = num;
//    let sum=0;
//    let digitsLength=tempValue.toString().length;
//    while(tempValue>0){
//         let digit=tempValue%10;
//         sum+= digit ** digitsLength;
//         tempValue= Math.floor(tempValue/10);
//     }
//     return sum === num
// }
// console.log(armStrongN(371));

// function fibonocci(value){
//     if(value <0) return [];
//     if(value ==1) return [0]
//   let sequence =[0,1]
//   for(let i=2;i<=value;i++){
//     sequence.push(sequence[i-1]+sequence[i-2])
    
//   }
//   return sequence
// }

// console.log(fibonocci(1))

// function isPrime(num){
//     if(num<=1) return false;
//     for(let i=2;i<=Math.sqrt(num);i++){
//       if(num%i===0){
//         return false
//       }
//     }

//     return true
// }

// console.log(isPrime(9))