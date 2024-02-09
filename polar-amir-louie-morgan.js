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
// const oneNum = 20
// const secNum = 14
// input: one number
// output: true or false (boolean)
// logic: conditional statement

// const divisibleBy10 = (num) => {
//     if (num % 10 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(divisibleBy10(secNum));


//  A group of friends have decided to start a secret society. The name will be the first letter of each of their names. Create a function that takes in an array of names and returns the name of the secret society.

const names = ["Lisa", "Sydney", "Jake", "Steve", "Maureen"]
// input array of names 
// Expected output:  string of first letter in each name "LSJSM"
// create function that takes in array of names
// use to return and iterate name of secret society
// join array of letters to add up first letters in name

// const socName = (nameArray) =>{
//     return nameArray.map((value, index)=>{
//         let letterArr = value.split("")
//         return letterArr.map((value, index)=>{
//             if (index === 0){
//                 return value
//             }
//         }).join("")
// }).join("")
//     } 
//         console.log(socName(names))





// Create a function that takes in the array and returns an array with the numbers in ascending order.


//const numsArray = [5, 42, 3, 79, 15, 36, 18]
// input array of numbers
// create function that puts numbers in order
// sort through array to arrange numbers ascending
// Expected output: [3, 5, 15, 18, 36, 42, 79]

// const newArray = (arrayOfNums) =>{
//    return arrayOfNums.sort((a,b) => a-b)
    
// } 
//     console.log(newArray(numsArray))



// Create a function that takes in a string and checks if the string is a palindrome.
const word1 = "racecar"
// Expected output: true
const word2 = "donuts"
// Expected output: false
//input words to be checked
//create function that turns string into array
//use .reverse on new array
//turn new array back to string to compare to original word
// return if statement is true or false

// const palindrome =(string) =>{
//     let stringArray = string.split("")
//     let reversedString = stringArray.reverse().join("")
//         if (string === reversedString){
//             return true
//         } else {
//             return false
//         }
// }
//  console.log(palindrome(word1))

// Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// // Expected output: ["Mango", "Apricot", "Peach"]
 const filterLetterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]
// input array of words and a single letter
// output array with words that have letter in common
// create function that iterates while filtering 
//returns new array with words that share common letter

// const commonLetter = (array, filterLetter) =>{
//     let upperCase = filterLetter.toUpperCase()
//    return array.filter(value=> {
//         if (value.includes(filterLetter) || value.includes(upperCase)){
//             return value 
//         }
//     })
// }
// console.log(commonLetter(fruitArray,filterLetterE))

// Create a function that takes in two arrays as arguments and returns one array with no duplicate values.

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// const newArray = (array1, array2) =>{
//     let megaArray = array1.concat(array2)
//     let newArray = []
//     for (let i=0; i < megaArray.length; i++){
//         if(!newArray.includes(megaArray[i])){
//             newArray.push(megaArray[i])
//         }
//     } return newArray
// }
//     console.log(newArray(dataTypesArray1,dataTypesArray2))

// Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
const accountTransactions1 = [100, -17, -23, -9]
// // Expected output: [100, 83, 60, 51]
 const accountTransactions2 = [250, -89, 100, -96]
// // Expected output: [250, 161, 261, 165]
 const accountTransactions3 = []
// // Expected output: []






//Create a function that receives an array of numbers and returns an array containing only the positive numbers
const numsArray2 = [-5, 10, -3, 12, -9, 5, 90, 0, 1]
// Expected outcome: [10, 12, 5, 90, 1]

// const posArray =(numArray) =>{
//    return numArray.filter(value =>{
//         if(value > 0){
//             return value
//         }
//     })
// }
//     console.log(posArray(numsArray2))



// Create a function that will remove the spaces found in a string
const string1 = "Hello Alpha!"
// Expected result: "HelloAlpha!"
const string2 = "The lazy fox jumps over the dog"
// Expected result: "Thelazyfoxjumpsoverthedog"

const newString =(string) =>{
    return string.split(" ").join("")
}
    console.log(newString(string2))




// Create a function that takes a string and returns the number of vowels in the string.

//const string3 = "banana"
// Expected result: 3
//const string4 = "I like ice cream"
// Expected result: 6





