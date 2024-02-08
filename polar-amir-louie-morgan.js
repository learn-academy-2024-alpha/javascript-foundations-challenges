// Some Practice Problems for you!

// you are given an array of English words. Create a function that returns an array with the words in all uppercase letters.
// const wordsArray = ["bingo", "house", "mustard", "auto", "lamp"]
// input: an array of words
// output: return an array of words all uppercase
// logic: create fxn that .map() strings to uppercase
// const upperCaseMaker = (arrOfWords) => {
//     return arrOfWords.map(word => {
//         return word.toUpperCase()
//     })
// }
// console.log(upperCaseMaker(wordsArray))


//  A farmer has 6 chickens, 3 goats, and 2 horses. Create a function that takes in the three quantities of each animal and returns the total number of legs on the farm.
// const chicken = 6
// const goat = 3
// const horse = 2
// expected output: 32
// input: three numbers
// output: one number
// logic: 2 different variables holding arrays(# of legs), turned arr to string then to num
// const legsOnFarm = (numOfChickens, numOfGoats, numOfHorses) => {
//     let legCounter2 = [ 2 ]
//     let legCounter4 = [ 4 ]
//     let totalNumOfChickenLegs = legCounter2.map(chickenLegs => {
//         return numOfChickens * chickenLegs
//     })
//     let totalNumOfGoatHorseLegs = legCounter4.map(legs4 => {
//         return (numOfGoats + numOfHorses) * legs4
//     })
//     totalNumOfChickenLegs.join("")
//     totalNumOfGoatHorseLegs.join("")
//     return parseInt(totalNumOfChickenLegs) + parseInt(totalNumOfGoatHorseLegs)
// } 
// console.log(legsOnFarm(chicken, goat, horse))


// Create a function that receives a number and returns a Boolean if a number is divisible by 10
//  Expected output: true
const oneNum = 20
const secNum = 14
// input: one number
// output: true or false (boolean)
// logic: conditional statement

const divisibleBy10 = (num) => {
    if (num % 10 === 0) {
        return true
    } else {
        return false
    }
}
console.log(divisibleBy10(secNum));













//  A group of friends have decided to start a secret society. The name will be the first letter of each of their names. Create a function that takes in an array of names and returns the name of the secret society.

const names = ["Lisa", "Sydney", "Jake", "Steve", "Maureen"]
// Expected output:  "LSJSM"

// Create a function that takes in the array and returns an array with the numbers in ascending order.

const numsArray = [5, 42, 3, 79, 15, 36, 18]
// Expected output: [3, 5, 15, 18, 36, 42, 79]