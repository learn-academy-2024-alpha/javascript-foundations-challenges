// 1. Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
const arr1 = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]
// const multTen = (array) => {
//     return array.map((value) => value * 10)
// }
// console.log(multTen(arr1));

// 2. Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
const arr2 = [3, 9, 15, 4, 10]
// output: [1.5, 4.5, 7.5, 2, 5]

// const divideTwo = (array) => {
//     return array.map((value) => value / 2)
// }
// console.log(divideTwo(arr2));

// 3. Create a function that takes in an array of numbers and returns an array with only odd numbers.
const arr3 = [2, 7, 3, 5, 8, 10, 13, -9]
// output: [7, 3, 5, 13, -9]
// const odd = (array) => {
//     return array.filter((value) => value % 2 !== 0)
// }
// console.log(odd(arr3));

// 4. Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
const pumbaa = "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// output: ["a", "wonderful", "ain't", "passing", "craze"]
// const multiWordString = (str) => {
//     const wordArray = str.split(" ")
//     return wordArray.filter((value) => value.length % 2 !== 0)
// }
// console.log(multiWordString(pumbaa));

// 5. Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// output: "nicework"

// const stringCreator = (array) => {
//     let str = array.filter((value) => {
//         return typeof value === "string"
//     })
//     return str.join("")
// }
// console.log(stringCreator(comboArr));
