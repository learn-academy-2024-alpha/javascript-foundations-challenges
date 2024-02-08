// 💻 Challenges
// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.



// Create a function that takes in an array of numbers and returns an array with all numbers multiplied by 10.
// const arr1 = [3, 9, 15, 4, 10]

// const newArray = (arr) => {
//     let array = arr.map((value) => {
//         return value * 10  
//     })
//     return array
//    } 

// console.log(newArray(arr1));
// // output: [30, 90, 150, 40, 100]

// Create a function that takes in an array of numbers and returns an array with all numbers divided by two.

// const arr1 = [3, 9, 15, 4, 10]

// const divideBy2 = (arr) => {
//     return arr.map((value) => {
//         return value / 2
//     })
// }

// console.log(divideBy2(arr1));
// // output: [1.5, 4.5, 7.5, 2, 5]

// Create a function that takes in an array of numbers and returns an array with only odd numbers.
const arr2 = [2, 7, 3, 5, 8, 10, 13, -9]
//input: creating a function with an input with an array of numbers
// output: an array iwth only odd numbers 
// iterate through the array searching for odd numbers 
// returning a condensed array with only odd numbers

const oddNum = (arr) => {
    return arr.filter((value) => {
        return value % 2 !== 0
    })
}
console.log(oddNum(arr2));
// // output: [7, 3, 5, 13, -9]

// Create a function that takes in a string of multiple words and returns an array with only the words that have an odd number of characters.
const pumbaa =
  "Hakuna Matata what a wonderful phrase Hakuna Matata ain't no passing craze"
// // output: ["a", "wonderful", "ain't", "passing", "craze"]


// create a function that inputs a string of words and outputs words with odd characters
const oddLetterFinder = (string) => {
// convert string into an array
  let stringToArray = string.split(" ")
//  create a return that loops to search for elements with an odd number of characters
    return stringToArray.filter((value) => {
// use modelo to search for words with odd characters
      if(value.length % 2 !== 0){
        // return the value of odd characters
        return value
      }
    })
}
console.log(oddLetterFinder(pumbaa));





// Create a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: Use the typeof operator.
 const comboArr = [7, "n", "i", "c", 10, "e", false, "w", 3, "o", "r", "k"]
// // output: "nicework"

// create a function 
// input combo array
// output a filtered string
// iterate through the string 
// sort out just the "strings"
// 


// const stringMaker = (superArray) => {

// const filterer = (value) => {
//   if(typeof value === "string"){
//     return value
//   }
// }
//   return superArray.filter(filterer).join("")
// }
// console.log(stringMaker(comboArr));




// const stringMaker = (superArray) => {
//   return superArray.filter((value) =>{
//     if(typeof value === "string"){
//       return value
//     }
//   }).join("")
// }
// console.log(stringMaker(comboArr));

const stringMaker = (superArray) => {
    return superArray.filter(value => typeof value === "string").join("")
  }
  console.log(stringMaker(comboArr));


// Create a function that takes in an array and returns an array without any false, null, 0, or blank values.





const filterArrayValues = [58, "", "abcd", true, null, false, 0]
// // output: [58, "abcd", true]

// create function 
// input: taken in an array
// output: sans null, sans false, sans, 0, and sans blank space

// const sansFalsey = (array) => {
//  return array.filter((value) => {
//     if(true){
//       return value
//     }
//   })
// }
// console.log(sansFalsey(filterArrayValues));

const sansFalseyToCoolForSchool = (array) => {
return array.filter((value) => value)
}
console.log(sansFalseyToCoolForSchool(filterArrayValues));





// Create a function that takes in an array of strings and returns an array of strings with every other letter capitalized.
const makesWackyWords = ["simba", "nala", "zazu", "rafiki"]
// // output: ["sImBa", "nAlA", "zAzU", "rAfIkI"]


// create a function that inputs an array of strings 
// const lionKingMe = (array) => {
//   return array.map((value, index) => {
//     let kingArray =  value.split("")[index]
//     if(kingArray % 2 === 0){
//       value.split("").toUpperCase
//     }
//     return kingArray
//   })
// }
// console.log(lionKingMe(makesWackyWords));

// const lionKingMe = (array) => {
//   return array.map((v, i) => i % 2 === 0 ? v.toLowerCase() : v.toUpperCase()).join("")
// }
// console.log(lionKingMe(makesWackyWords));


const lionKingMe = (array) => {
  return array.map((value, index) => {
    let splitIssues = value.split("")

    if(splitIssues.indexof(splitIssues) % 2 !== 0){
      return splitIssues.toUpperCase().join("")
    }
    })
  }

console.log(lionKingMe(makesWackyWords));
// Create a function that takes in a string and returns a new string with all the vowels removed.
// const str = "javascript is awesome"
// // output: "jvscrpt s wsm"



// Create a function that takes in a string containing numbers and returns an array with each number at its own index and converted to the data type of number.
// const stringOfNumbers = "4574328"
// // output: [4, 5, 7, 4, 3, 2, 8]




// 🏔 Stretch Goals
// Create a function that takes in two arrays as arguments returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3]
// const arr2 = [7, 8, 2, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]



// Create a function that takes in an array of mixed data types and returns the first value that is a string. HINT: look into the JavaScript .find() method.
// const allTheData = [7, null, true, 2, "yo!", false, 4, "hello!"]
// // output: "yo!"