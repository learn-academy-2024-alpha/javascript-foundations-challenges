// 1. Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
 const testArr1 = [3, 9, 15, 4, 10]
// output: [9, 27, 45, 12, 30]
// pseudo code:
    // input: array
    // output: numbers mult by 3
    // create function 
    // iterate using for loop
    // determine if even using conditional
    // return numbers mult by 3
// const numsByThree = (arryOfNums) => {
//     let newArr = []
//     for (let i = 0; i < arryOfNums.length; i++) {
//         newArr.push(arryOfNums[i] * 3)
//     }
//     return newArr
// }
// console.log(numsByThree(testArr1));

// 2. Write a function that takes in an array of numbers and returns a new array with only odd numbers.
const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// output: [-7, 3, 5, 13]
// pseudo code:
    // input: array
    // output: odd numbers
    // create function 
    // iterate using for loop
    // determine if even using modulo
    // return odd numbers
// const oddNums =(oddNumsArr) => {
//     let odd = []
//     for (let i = 0; i < oddNumsArr.length; i++) {
//         if (oddNumsArr[i] % 2 === 0) {
//             continue
//         } else {
//             odd.push(oddNumsArr[i])
//         }
//     }
//     return odd
// }
// console.log(oddNums(testArr2));

// 3. Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
const comboArr = [
  7,
  "n",
  true,
  "i",
  "c",
  10,
  "e",
  -388,
  "w",
  3,
  "o",
  0,
  "r",
  false,
  "k"
]
// output: "nicework"
// pseudo code:
    // input: array
    // output: a string with only the letters
    // empty array for just letter
    // use .join() method to return string
    // create function 
    // iterate using for loop
    // use typeof method 
    // determine if using logic
    // return string "nicework"
// const returnString = (mixedArr) => {
//     let arrForLetters = []
//     for (let i = 0; i < mixedArr.length; i++) {
//         if (typeof mixedArr[i] === "string") {
//             arrForLetters.push(mixedArr[i])
//         }
//     }
//     return arrForLetters.join("")
// }
// console.log(returnString(comboArr));

// 4. Create a function that takes in an array of numbers and returns the sum.
const addThese1 = [1, 2, 3, 4]
// output: 10

const addThese2 = []
// output: 0
// input: array
    // output: the sum of numbers
    // create function 
    // iterate using for loop
    // determine if using logic
    // create number using 0
    // return sum of numbers
// const sumOfNums = (nums) => {
//     let number = 0;
//     for (let i = 0; i < nums.length; i++) {
//         number += nums[i]
//     }
//     return number
// }
// console.log(sumOfNums(addThese1), sumOfNums(addThese2));

// 5. Create a function that takes in an array of numbers and returns the index of the largest number.
const indexHighestNumber = [1, 4, 2, 3]
// output: 1
    // input: array
    // output: index of largest number
    // create function 
    // iterate using for loop
    // determine if using logic
    // create number using 0
    // return the index of the largest number
// const largestNum = (num) => {
//     let start = 0;
//     for (let i = 0; i < num.length; i++) {
//         if (start < num[i]) {
//             start = num[i]
//         }
//     }
//     return num.indexOf(start)
// }
// console.log(largestNum(indexHighestNumber));

// 6. Create a function that takes in two arrays and returns one array with no duplicate values.
const arr1 = [3, 7, 10, 5, 4, 3, 3]
const arr2 = [7, 8, 2, 3, 1, 5, 4]
// output: [3, 7, 10, 5, 4, 8, 2, 1]
 // input:  both array
    // output: one array with no duplicate value
    // create function 
    // iterate using for loop
    // determine if using logic
    // create empty array
    // return one array with no duplicate values
const twoIntoOne = (arr1, arr2) => {
    let arr = []
    for (let i = 0; i < arr1.length; i++) {
        arr.push(arr1)
    }
}