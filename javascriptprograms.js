// function demo(x,y){
//      console.log(arguments)
//     arguments[1]=12
//     console.log(arguments)
//     return x+y
// }

// console.log(demo(3,4))

// let arr=[1,2,3];
// arr[10]=12;
// console.log(arr[4])

// function compressString(str){
  
//     let result="";
//     let count=1;
//     for(let i=1;i<=str.length;i++){
//    if(str[i] ===str[i-1]){
//     count++
//    }
//    else{
//       result+=str[i-1]+count;
//       count=1
//    }
//     }
//     return result
// }

// console.log(compressString("aaabbc"))

// function movingZeros(arr,pos){
// // let pos=0
    
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] !==0){
//             let temp= arr[pos];
//             arr[pos] =arr[i];
//             arr[i] = temp;
//             pos++
//         }
//     }
//     return arr
// }

// function movingZeros(arr){
//     let lastNonZeroIndex=0;
//     // Step 1: Move all non-zero elements to the front
//     for(let i=0;i<arr.length;i++){
//         if(arr[i] !==0){
//             arr[lastNonZeroIndex] =arr[i];
//             lastNonZeroIndex++;
//         }
//     }
//     // Step 2: Fill the remaining positions with zeros
//     for(let i=lastNonZeroIndex;i<arr.length;i++){
//         arr[i]=0
//     }
    
//     return arr
    
    
// }

// const moveZeros = (arr) => {
//   const nonZeros = arr.filter(num => num !== 0);
//   const zeros = arr.filter(num => num === 0);
//   return [...nonZeros, ...zeros];
// };

// const nums = [0, 5, 0, 2, 0, 9];
// console.log(moveZeros(nums)); // [5, 2, 9, 0, 0, 0]

// "Two-Pointer" Swap (The Senior Way)
// const moveZeros = (arr) => {
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       // Swap elements
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       j++;
//     }
//   }
//   return arr;
// };
// console.log(movingZeros([0,20,10,2,0,2]))
// console.log(movingZeros([0,20,10,2,0,2],0))

//firstpeakelement
// function firstPeakElement(arr){
    
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>arr[i-1] && arr[i] >arr[i+1]){
//             return arr[i]
//         }
//     }
// }

// console.log(firstPeakElement([1,3,1,5,1]))

// second larget number 
// function secondLarget(arr){
//     let first=-Infinity;
//     let second= -Infinity;
//     for(let i of arr){
//         if(i>first){
//             second=first;
//             first = i;
//         }
//         else if(i>second && i !=first){
//          second=i
            
//         }
//     }

//     return second
// }
// console.log(secondLarget([1,2,4,3,,6]));

// palindrom without predefined methods

// function strPal(str){
//     let left=0;
//     let right= str.length-1;
//     while(left<right){
//         if(str[left] !== str[right]){
//             return false
//         }     
//         left++;
//         right--;
//     }
//     return true
// }

// console.log(strPal("mdam"))

//longest word in given string 

// function longestWord(str){

//     let words= str.split(" ");
//     let longest=words[0];
//     for(let word of words){
        
//         if(word.length > longest.length){
//             longest=word;
//         }
//     }
//     return longest
// }
// console.log(longestWord("I am kalyana paladugu"))
// function longestWord(str){

//     let word= str.split(" ").reduce((longest,current)=> current.length > longest.length ? current:longest)
//     return word
// }
// console.log(longestWord("I am kalyana paladugu"))

// const arr=["as","Asds","asdsaddadad","sasad"];
// let re=arr.sort((a,b) => b.length-a.length)
// console.log(re[0]);

//count number of vowels in a string

// function vowelsCount(str){
// let vowels=['a','e','i','o','u'];
// let count=0;
// let freq={}
// for(let i of str){
//     if(vowels.includes(i)){
//        if(freq[i]){
//         freq[i]++
//        }else {
//        freq[i]=1
//        }
//     }
// }
// return freq
// }

// console.log(vowelsCount("asedfioaidu"))


// let str="hello";
// function stReverse(str){
// let newstr=''

// for(let i=str.length-1;i>=0;i--){
// newstr+=str[i]

// }
// return newstr
// }
// console.log(stReverse(str))

//Flattening of Array
// let arr=[1,[2,3,[4,5,6]]]
// console.log(arr.flat(Infinity))
// function falttenArray(arr){
//     let result=[];
//     for(let i of arr){
//         if(Array.isArray(i)){
//             result.push(...falttenArray(i))
//         }
//         else {
//             result.push(i)
//         }
//     }
//     return result
// }

// console.log(falttenArray(arr))


// console.log("A");

// setTimeout(()=>console.log("B"));

// ["C","D"].forEach((x) => console.log(x))
// console.log("E")


// return array by  id
// const obj  =[{
//     key:"Sample 1",
//     data:"data2",
// },{
//     key:"Sample 1",
//     data:"data1",
// },{
//     key:"Sample 3",
//     data:"data3",
// },{
//     key:"Sample 2",
//     data:"data2",
// },{
//     key:"Sample 1",
//     data:"data3",
// }
// ]

// const output={}

// for(let item of  obj){
//     if(output[item.key]){
//         output[item.key].push(item)
//     }
//     else {
//         output[item.key] =[item]
//     }
// }
// console.log(output);

//memoize function 

// function memozieOne(fn){
//     const  cache = new Map();

//     return  function(arg){
//         if(cache.has(arg)){
//             console.log("memoize")
//           return  cache.get(arg)
//         }
//         const result= fn(arg)
//         cache.set(arg,result)
//         return result
//     }
// }
// const  add =(a) =>{
    // for(let i=0; i<1000000000; i++) {} // Fake delay
//     return a*a
// }

// const memoizedValue= memozieOne(add)

// console.log(memoizedValue(2))
// console.log(memoizedValue(2))


//composition fullfill

// const multiplyBy2 = (x) => x * 2;
// const add5 = (x) => x + 5;

// // Traditional way (Hard to read)
// const result = add5(multiplyBy2(10)); // 25

// // Composition way (Clean and modular)
// // const compose = (...fns) => (x) => fns.reduceRight((val, f) => f(val), x);
// const compose = (...functions) =>{
//     return args =>{
//    return  functions.reduceRight((arg,fn)   => fn(arg),args)
//     }
// }

// const multiplyAndAdd = compose(add5, multiplyBy2);
// console.log(multiplyAndAdd(5)); // 25

//Array Chunking

// const arr=[1,2,3,4,5,6,7];
// size=3;
// // o/p:[[1,2,3],[4,5,6],[7]]
// function arrayChunking(arr,size){
//     let result = [];
//     for(let i=0;i<=arr.length;i+=size){
//       result.push(arr.slice(i,i+size));
//     }
//     return result
// }

// console.log(arrayChunking(arr,2))