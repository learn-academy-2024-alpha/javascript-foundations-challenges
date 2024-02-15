// 1. you are given an array of English words. Create a function that returns an array with the words in all uppercase letters.
const wordsArray = ["bingo", "house", "mustard", "auto", "lamp"]
// const uppercaseArray = (array) => array.map(array => array.toUpperCase())
// console.log(uppercaseArray(wordsArray));

// 2. A farmer has 6 chickens, 3 goats, and 2 horses. Create a function that takes in the three quantities of each animal and returns the total number of legs on the farm.
// expected output: 32
// const legs = (chicken, goat, horse) => {
//     const chickenLegs = chicken * 2
//     const goatLegs = goat * 4
//     const horseLegs = horse * 4
//     const total = chickenLegs + goatLegs + horseLegs
//     return total
// }
// console.log(legs(6, 3, 2));

// 3. Create a function that receives a number and returns a Boolean if a number is divisible by 10
//  Expected output: true
// const isDivisibleByTen = (num) => {
//     return num % 10 === 0
// }
// console.log(isDivisibleByTen(20));

// 4. A group of friends have decided to start a secret society. The name will be the first letter of each of their names. Create a function that takes in an array of names and returns the name of the secret society.

const names = ["Lisa", "Sydney", "Jake", "Steve", "Maureen"]
// Expected output:  "LSJSM"
const secretSocietyName = (array) => {
    let firstNames = []
    for (let i = 0; i < array.length; i++) {
        firstNames.push(array[i])
    }
    return firstNames
}
console.log(secretSocietyName(names));