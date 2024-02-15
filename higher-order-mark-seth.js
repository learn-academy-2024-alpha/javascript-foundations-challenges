// 1. Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
//const arr1 = [3, 9, 15, 4, 10]
// output: [30, 90, 150, 40, 100]
// const multTen = (array) => {
//     return array.map((value) => value * 10)
// }
// console.log(multTen(arr1));

// 2. Create a function that takes in an array of numbers and returns an array with all numbers divided by two.
//const arr2 = [3, 9, 15, 4, 10]
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

// 6. Create a function that takes in an array and returns an array without any false, null, 0, or blank values.
// const filterArrayValues = [58, "", "abcd", true, null, false, 0]

// const noFalsy = (array) => {
//     let truthy = array.filter((value)=>{
//         return value
//     })
// console.log(truthy)
// return truthy
// }
// console.log(noFalsy(filterArrayValues))

// output: [58, "abcd", true]

// 7.Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
// const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]

// const everyOtherLetter = (arr) => {
//     let wordArray= arr.toString().split("")
//     let transformedArray = wordArray.map((value, index) => {
//         return index % 2 === 0 ? value.toLowerCase() : value.toUpperCase()
//     })
    
//         return transformedArray.join("")
//    }

// console.log(everyOtherLetter(makesWackyWords))

// output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]

// 8.Create a function that takes in a string and returns a new string with all the vowels removed.
const str = "javascript is awesome"
// const removeVowels = (str) => {
//     let lettersArray = str.split("")
//     let vowels = "aeiou"
//     let filteredArray = lettersArray.filter((letter) => !vowels.includes(letter))
//     return filteredArray.join("")
// }
// console.log(removeVowels(str))
// output: "jvscrpt s wsm"

//9. Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
const stringOfNumbers = "4574328"
// output: [4, 5, 7, 4, 3, 2, 8]
// const numberString = (string) => {
//     let newArray = string.split("")
//     return newArray.map((value, index) => {
//         return parseInt(value)
//     })
// }
// console.log(numberString(stringOfNumbers));
// -------------------------or---------------------
// const stringConverter = (numString) => {
//     return numString.split('').map(Number)
// }
// console.log(stringConverter(stringOfNumbers));

// 10. Create a function that takes in two arrays as arguments returns one array with no duplicate values.
const arr1 = [3, 7, 10, 5, 4, 3]
const arr2 = [7, 8, 2, 1, 5, 4]
// output: [3, 7, 10, 5, 4, 8, 2, 1]

// const oneArray = (arr1, arr2) => {
//     let combinedArray = arr1.concat(arr2)
//     let noDupesArray = []
//     combinedArray.forEach(num => {
//         if(!noDupesArray.includes(num)){
//             noDupesArray.push(num)
//         }
//     })
//     return noDupesArray
// }
// console.log(oneArray(arr1, arr2));


//--------------------or--------------
// const oneArray = (arr1, arr2) => {
//     let combinedArray = arr1.concat(arr2)
//     let uniqueArray = []
//     for(let i = 0; i < combinedArray.length; i++) {
//         if (!uniqueArray.includes(combinedArray[i])) {
//             uniqueArray.push(combinedArray[i])
//         }
//     }
//     return uniqueArray
// }  
// console.log(oneArray(arr1, arr2));  

//-----------------------or----------------
// const oneArray = (arr1, arr2) => {
//     let combinedArray = arr1.concat(arr2)
//     let uniqueArray = combinedArray.filter((value, index) => combinedArray.indexOf(value) === index)
//     return uniqueArray
// }
// console.log(oneArray(arr1, arr2));

// 11. Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.

