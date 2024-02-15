// Some Practice Problems for you!

// you are given an array of English words. Create a function that returns an array with the words in all uppercase letters.
const wordsArray = ["bingo", "house", "mustard", "auto", "lamp"]

// const uppercaseArray = (array) => array.map(array => array.toUpperCase())

// console.log(uppercaseArray(wordsArray))

//  A farmer has 6 chickens, 3 goats, and 2 horses. Create a function that takes in the three quantities of each animal and returns the total number of legs on the farm.
// expected output: 32


// const legs = (chicken, goat, horse) => {
//     const chickenLegs = 2
//     const goatLegs = 4
//     const horseLegs = 4
//     const totalChickenLegs= chicken * chickenLegs
//     const totalGoatLegs= goat * goatLegs
//     const totalHorseLegs= horse * horseLegs
//     let totalLegs= (totalChickenLegs + totalGoatLegs + totalHorseLegs)
//     console.log(totalLegs)
//     return totalLegs
// }

// console.log(legs)

// const totalLegs = (chickens, goats, horses) => {
//     const chickenLegs = chickens * 2
//     const goatLegs = goats * 4
//     const horseLegs = horses * 4
//     const total = chickenLegs + goatLegs + horseLegs
//     return total
// }
// console.log(totalLegs(6, 3, 2))

// Create a function that receives a number and returns a Boolean if a number is divisible by 10
// const isDivisibleByTen =(num)=> {
//    return num % 10 === 0}
// console.log(isDivisibleByTen(10))
//  Expected output: true

//  A group of friends have decided to start a secret society. The name will be the first letter of each of their names. Create a function that takes in an array of names and returns the name of the secret society.
const names = ["Lisa", "Sydney", "Jake", "Steve", "Maureen"]

// const secretSocietyName = (names) => {
//     let firstNames = ""
//     for (let i=0; i < names.length; i++) {
//         firstNames += (names[i][0]);
//     }
//     return firstNames
// }
//  console.log(secretSocietyName(names))
// Expected output:  "LSJSM"

// Create a function that takes in the array and returns an array with the numbers in ascending order.
const numsArray = [5, 42, 3, 79, 15, 36, 18]
// // Expected output: [3, 5, 15, 18, 36, 42, 79]
// const sortingNumber = (array) => {
//     return array.sort((a, b) => a - b)
// }
// console.log(sortingNumber(numsArray));

// Create a function that takes in a string and checks if the string is a palindrome.
const word1 = "racecar"
// Expected output: true
const word2 = "donuts"
// Expected output: false

// const palindrome = (str) => {
//    let reverseString = str.split("").reverse().join("")
//     return str === reverseString
// }
// console.log(palindrome("donuts"));

// Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]
// const particularLetter = fruitArray.filter((array) => {
//         return array.includes("a") || array.includes("A") 
// })
// console.log(particularLetter);


// Create a function that takes in two arrays as arguments and returns one array with no duplicate values.
const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]
// const noDupes = (arr1, arr2) => {
//     let combined = arr1.concat(arr2)
//     let uniqueArray = combined.filter((value, index) => combined.indexOf(value) === index)
//     return uniqueArray
// }
// console.log(noDupes(dataTypesArray1, dataTypesArray2));

// Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]
const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]
const accountTransactions3 = []
// Expected output: []
const addUp = (array) => {
    let newArray = []
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
        newArray.push(sum)
    }
    return newArray
}
console.log(addUp(accountTransactions1));

//Create a function that receives an array of numbers and returns an array containing only the positive numbers
const numsArray2 = [-5, 10, -3, 12, -9, 5, 90, 0, 1]
// Expected outcome: [10, 12, 5, 90, 1]

// Create a function that will remove the spaces found in a string
const string1 = "Hello Alpha!"
// Expected result: "HelloAlpha!"
const string2 = "The lazy fox jumps over the dog"
// Expected result: "Thelazyfoxjumpsoverthedog"

// Create a function that takes a string and returns the number of vowels in the string.

const string3 = "banana"
// Expected result: 3
const string4 = "I like ice cream"
// Expected result: 6