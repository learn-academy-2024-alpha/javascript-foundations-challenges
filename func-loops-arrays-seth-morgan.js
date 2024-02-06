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
// const twoIntoOne = (arr1, arr2) => {
//     let arr = []
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr.includes(arr1[i])) {
//             continue
//         } else {
//             arr.push(arr1[i])
//         }
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         if (arr.includes(arr2[i])) {
//             continue
//         } else {
//             arr.push(arr2[i])
//         }
//     }
//     return arr
// }
// console.log(twoIntoOne(arr1, arr2));

// Create a function that takes in two numbers as arguments and returns an array the length of the first number filled with the second number.
const arrayLength = 6
const arrayValue = 0
// output: [0, 0, 0, 0, 0, 0]
const arrayLength2 = 4
const arrayValue2 = 11
// output: [11, 11, 11, 11]
// iput: 2 numbers
// output: array
// logic: will need an empty arr, for loop, push method

// const firstWithSecond = (num1, num2) => {
//     let newArr = []
//     for (let i = 0; i < num1; i++) {
//         newArr.push(num2)
//     }
//     return newArr
// }
// console.log(firstWithSecond(arrayLength2, arrayValue2));

// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
const addUp1 = 4
// 1 + 2 + 3 + 4 = 10
// output: 10
const addUp2 = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55
// output: 55
const addUp3 = 600
// output: 180300

// input: a single number
// output: a single number
// logic: for loop, empty variale
// const factorial = (num) => {
//     let newNum = 0
//     for (let i = num; i > 0; i--) {
//         newNum += i
//     }
//     return newNum
// }
// console.log(factorial(addUp2))

// Epic Goals

// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// input: a single number
// output: string, whether the number is higher or lower than the "answer"
// logic: if statement, variale called answer,

const highLow = (number) => {
    let userAnswer = prompt("Enter a number between 1 - 100")
    let userCont = prompt("do you wish to continue")
    let answer = 50
    do {
        if (userAnswer < answer && userAnswer >= 1) {
            alert("your guess is too low")
            userCont

        } else if (userAnswer > answer && userAnswer <= 100) {
            alert("your guess is too high")
            let userCont = prompt("do you wish to continue")
        } else {
            alert("congradulations you guessed right!!!")
        }
    } while (userCont === "y")
} 
