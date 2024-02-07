// Copy the challenges into your JavaScript file. Comment out the instructions and code the solution to each problem beneath the prompt.
// Don't forget to pseudo code.

// Write a function that takes in an array of numbers and returns an array with all numbers multiplied by 3.
const testArr1 = [3, 9, 15, 4, 10]
// output: [9, 27, 45, 12, 30]

// create a function named mult3 that inputs an array of numbers. that returns all numbers multiplied by 3
// create a variable with an empty array
// create a loop to iterate through the array
// storing data of arrayOfNums *3 to a new array within the loop
// return newArray of data// output: [9, 27, 45, 12, 30]
// invoke the function with an argument(testArr1) to replace the parameter(arrayOfNums) in the function

// const mult3 = (arrayOfNums) => {
//     let newArray = []
//     for (let i=0; i < arrayOfNums.length; i++){
//         newArray.push(arrayOfNums[i]* 3)

//     }
//      return newArray  

// }
//     console.log(mult3(testArr1));


// Write a function that takes in an array of numbers and returns a new array with only odd numbers.
//const testArr2 = [0, 2, -7, 3, 5, 8, 10, 13]
// // output: [-7, 3, 5, 13]

// create a function that inputs array of numbers, outputs is an array of odd numbers
// create a new index using a variable 
// iterate through the array
// create conditional statement that looks for odd numbers 
// store the info into a new location 
// create return of new array that contains only odd numbers
// invoke function and test array

// const oddNums =(numsArray) =>{
//     let oddArray = []
//     for (let i=0; i < numsArray.length; i++){
//         if(numsArray[i] % 2 !== 0){
//             oddArray.push(numsArray[i])
//         }   
//     }
//     return oddArray 

       
// } 
// console.log(oddNums(testArr2));




// Write a function that takes in an array of numbers and letters and returns a string with only the letters. HINT: use the typeof method.
//create our function that sorts letters in array
//input array of numbers and letters 
//output just the letters out of the array
//iterate each element of the array searching array by type of data 
//sort the data type of old array and keep the string in a new array
//return data of new array and convert array into string
//call on data using comboArr to test code  
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
//     const stringSorter =(stringArray) =>{
// 			let string =[]
// 			for(i=0; i < stringArray.length; i++){
// 				if(typeof stringArray[i]==="string"){
// 					string.push(stringArray[i])
// 				} 
// 			} 
// 			return string.join("")
// 		} 
// 		console.log(stringSorter(comboArr));
// // output: "nicework"









//Create a function that takes in an array of numbers and returns the sum.
//const addThese1 = [1, 2, 3, 4]
// // output: 10
//const addThese2 = []
// // output: 0

//create function to sum up array 
// input array of numbers
// output sum of numbers in array
// iterate numbers in array
// add up value of all numbers inside of array
// return reduced sum of all integers in array
// call on function to run addThese 1

// const addedArray = (numsSum) =>{
// 	let nums = [] 
// 	for(i =0;i < numsSum.length; i++){
// 		nums.push(numsSum[i])
// 	}
// 	return nums.reduce((total, value) => total + value) 
// } 
// console.log(addedArray(addThese1));


// const addedArray = (numsSum) =>{
// 	 	let nums = [] 
// 	 	for(i =0;i < numsSum.length; i++){
// 	 		nums.push(numsSum[i])
// 	 	}
// 		const reducer =(total, value) =>{
// 			return total + value
// 		}
// 		let sum = numsSum.reduce(reducer)
// 	 	return sum
//  } 
//  console.log(addedArray(addThese1));
 
// Create a function that takes in an array of numbers and returns the index of the largest number.
 const indexHighestNumber = [1, 4, 2, 3]
// // output: 1

const gArray = (bigNum) =>{
	let num = 0
	for(i =0;i < bigNum.length; i++){
		if(bigNum[i] > num)
	}


}





// 🏔 Stretch Goals
// Create a function that takes in two arrays and returns one array with no duplicate values.
// const arr1 = [3, 7, 10, 5, 4, 3, 3]
// const arr2 = [7, 8, 2, 3, 1, 5, 4]
// // output: [3, 7, 10, 5, 4, 8, 2, 1]
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
// 🏔 Epic Goals
// Create a function called highLow that takes in a number and returns whether the number is higher or lower than the "answer".
// Create an HTML page and link your JavaScript file. More info here.
// As a user, I see a prompt or input where I can guess a number between 1 and 100 (both inclusive).
// As a user, I can see if my guess is too high or too low.
// As a user, if I guess the "answer" correctly I am notified that I won.
// As a user, I can continue to guess the "answer" until I am correct.
// STRETCH: As a user, if I have not guessed the correct number in seven tries I see a losing message.
