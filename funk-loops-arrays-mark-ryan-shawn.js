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

const extractLetters = (array) => {
    let newString = "";
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'string'){
            newString += array[i]
        }
    }
    return newString
}
console.log(extractLetters(comboArr))
// output: "nicework"
// Create a function that takes in an array of numbers and returns the sum.
// const addThese1 = [1, 2, 3, 4]
// // output: 10

// const addThese2 = []
// // output: 0
// Create a function that takes in an array of numbers and returns the index of the largest number.
// const indexHighestNumber = [1, 4, 2, 3]
// // output: 1