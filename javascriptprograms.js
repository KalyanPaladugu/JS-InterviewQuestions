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
// let pos=0
    
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

// console.log(movingZeros([0,20,10,2,0,2],0))

//firstpeakelement
// function firstPeakElement(arr){
    
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>arr[i-1] && arr[i] >arr[i+1]){
//             return arr[i]
//         }
//     }
// }

// console.log(firstPeakElement([1,1,5,1]))

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

// palindrom withour predefined methods

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

//longest ord in given string 

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
