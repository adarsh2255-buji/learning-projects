/*let arr = ['hi', 'lo', 'va']

function arraySwap(arr){
   let temp = arr[0];
   arr[0] = arr[arr.length-1];
   arr[arr.length-1] = temp;
   return arr;
}
console.log(arraySwap(arr)); // Output: [5, 2, 3, 4, 1]

for(let i = 0; i <= 10; i++) {
    if( i % 2 === 0) {
        console.log(i); // Output: 0, 2, 4, 6, 8, 10
    }
}

for(let i = 5; i >= 0; i--) {
    console.log(i); // Output: 5, 4, 3, 2, 1, 0
} */


// let arr2 = [1, 2, 3, 4, 5];

// for(let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i] + 1)
// }

// arr = [-2, -1, 0, 99]
// function addOne(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         arr[i]++;
//     }
//     return arr;
// }

// console.log(addOne(arr)); // Output: [2, 3, 4]

// let arr = [1,2,3]
// function addNum(arr, num) {
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] += num;
       
//     }
//     return arr;
// }

// console.log(addNum(arr, 5)); // Output: [6, 7, 8]

// let array1 = [1, 2, 3, 4, 5, 6,];
// let array2 = [1, 2, 3, 4, 5, 6];
// function addArray(array1, array2){
//     let newArray = [];
//     for(let i = 0; i < array1.length; i++) {
//             newArray.push(array1[i] += array2[i]);
//     }
//     return newArray;
// }
// console.log(addArray(array1, array2)) // Output: [ 2, 4, 6, 8, 10, 12 ]


// let arr = [1, -2, 5, 6]
// function countPositive(nums) {
//     let count = 0
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] > 0) count ++
//     }
//     return count;
// }

// console.log(countPositive(arr)) // 3

// let arr = [1, 2,3,4,5,6]
// function minMax(nums) {
//     let min = nums[0];
//     let max = nums[0];
//     for(let i = 1; i < nums.length; i++) {
//         if(nums[i] < min) min = nums[i];
//         if(nums[i] > max) max = nums[i];
//     }
//     return {min, max};
// }

// console.log(minMax(arr)) // Output: { min: 1, max: 6 }
let arr = ['apple', 'orange', 'orange','grapes'];

// function countWords(words) {
//     let count = {};
//     for(let i = 0; i < words.length; i++) {
//         const word = words[i];
//         if(!count[word]) {
//             count[word] = 1;
//         } else{
//             count[word]++;
//         }
//     }
//     return count;
// }

// console.log(countWords(arr)); // Output: { apple: 1, orange: 2, grapes: 1 }

// const arrstr = ['hello', 'world', 'search', 'good', 'search'];

// for(let i =0; i < arrstr.length; i++){
//     if(arrstr[i] === 'search'){
//         console.log(i)
//         break;
//     }else{
//         console.log('-1')
//     }
// }

// function findIndex(array, word) {
//     for(let i = 0; i < array.length; i++) {
//         if(array[i] === word){
//             return i;
//         }   
//     }  return -1;
// }

// console.log(findIndex(['green', 'red', 'blue', 'red'], 'red'))

// ['apple', 'orange', 'banana'].forEach(function(value, index) {
//     console.log(`${index} ${value}`)
// })

const add = function(){
    console.log(2+3)
}

function runTwice(fun){
    return fun;
}

runTwice(add())
