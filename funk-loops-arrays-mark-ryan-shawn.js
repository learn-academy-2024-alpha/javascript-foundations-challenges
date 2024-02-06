// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
// const testArr1 = [3, 9, 15, 4, 10]
 
//1. input- array of numbers
//2. output- array of numbers *3
//3. Return result of array of numbers *3

// const multiplyBy3 = (arrayOfNums) => {
//     let result = []
//     for (let i = 0; i < arrayOfNums.length; i++) {
//         result.push(arrayOfNums[i] * 3);
//     }
//     return result
// };

// console.log(multiplyBy3(testArr1))

// // output: [9, 27, 45, 12, 30]

// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]

// const onlyEven = (array) => {
//     let newArr = []
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] % 2 !== 0) {
//         newArr.push(array[i])
//       }
//     }
//     return newArr
//   }
  
//   console.log(onlyEven(testArr2))


// const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // output: [-7, 3, 5, 13]

// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
// const comboArr = [
//   7,
//   "n",
//   true,
//   "i",
//   "c",
//   10,
//   "e",
//   -388,
//   "w",
//   3,
//   "o",
//   0,
//   "r",
//   false,
//   "k"
// ]

// const extractLetters = (array) => {
//     let newString = "";
//     for (let i = 0; i < array.length; i++) {
//         if (typeof array[i] === 'string'){
//             newString += array[i]
//         }
//     }
//     return newString
// }
// console.log(extractLetters(comboArr))
// output: "nicework"

// Create a function that takes in an array of numbers and returns the sum.
// output: 10
// output: 0

// input: array of numbers
// output: sum of array numbers
// create a func
// iterate with a for loop
// create an empty arr = 0
// return new array 

//     const addThese1 = [1, 2, 3, 4]
//     const addThese2 = []
//     const addArr = (array) => {
//         let newArr = 0
//         for (let i=0; i<array.length; i++){
//         newArr += array[i]
//     }
//     return newArr
// }
// console.log(addArr(addThese1))
// console.log(addArr(addThese2))



// Create a function that takes in an array of numbers and returns the index of the largest number.
// output: 1


// const indexHighestNumber = [1, 4, 2, 3]

// const largeNum = (arrayOfNums) => {
//     let newArr = []
//     let maxNum = Math.max(...arrayOfNums)
//     for (let i=0; i<arrayOfNums.length; i++){
//         if (arrayOfNums[i] === maxNum) {
//         newArr.push(i);
//         }
//     }
//     return newArr
// }
//     console.log(largeNum(indexHighestNumber)[0]);

// Stretch Goals

// Create a function that takes in two arrays and returns one array with no duplicate values.
//     // const test1= ['a', 32, 'h', 99,]
//     const arr1 = [3, 7, 10, 5, 4, 3, 3]
//     const arr2 = [7, 8, 2, 3, 1, 5, 4]
// // // output: [3, 7, 10, 5, 4, 8, 2, 1]
// // input: 2 arrays 
// // output: one array with no dup values
// // create a fxn takes in 2 arrays
// // use concat method to combine both arrays and set method to not run dups
// // 
//     // const arraysDups = (arrayNums1, arrayNums2) => {
//     const arraysDups = (arrayOfNums1, arrayOfNums2) => {
//         let newArr = []
//         let dupArr = arr1.concat(arr2)
//         let noDups = [...new Set(dupArr)]
//         return noDups.sort()
//     }
//     let numSort = arraysDups(arr1, arr2)
//     console.log(numSort)

// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
// const arrayLength = 6
// const arrayValue = 0
// // output: [0, 0, 0, 0, 0, 0]

// const arrayLength = 4
// const arrayValue = 11
// // output: [11, 11, 11, 11]
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// const addUp1 = 4
// // 1 + 2 + 3 + 4 = 10
// // output: 10

// const addUp2 = 10
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// // output: 55

// const addUp3 = 600
// // output: 180300