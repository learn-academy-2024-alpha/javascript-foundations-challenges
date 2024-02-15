// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

// describe("areTired", () => {
//     it("returns drink coffee or keep working", () => {
//       expect(areTired("yes")).toEqual("drink coffee")
//       expect(areTired("no")).toEqual("keep working")
//     })
//   })
//    const areTired = (tired) =>{
//     if(tired === "yes"){
//         return "drink coffee"
//     } else if(tired === "no"){
//         return "keep working"
//    }
// }

// Create the function that will make the test pass.
// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

//   describe("areStressed", () => {
//     it("returns Relax or keep going", () => {
//        expect(areStressed("yes")).toEqual("Relax")
//        expect(areStressed("no")).toEqual("keep going")
//      })
//     })

//     const areStressed = (stressed) =>{
//             if(stressed === "yes"){
//                 return "Relax"
//             } else if(stressed === "no"){
//                 return "keep going"
//            }
//     }

// Create the function that will make the test pass.
// Write the test for a function that returns "in budget" if a price is lower than $300.

//   describe("ourBudget", () => {
//     it("returns in budget or overpriced", () => {
//        expect(ourBudget(200)).toEqual("in budget")
//        expect(ourBudget(301)).toEqual("overpriced")
//      })
//     })

// const ourBudget = (price) =>{
//             if(price <= 300){
//                 return "in budget"
//             } else if(price >= 300){
//                 return "overpriced"
//            }
//     }
// Create the function that will make the test pass.
// Write the test for a function that takes in two numbers and returns the smaller number.

//   describe ("ourNumber", () =>{
//     it("smaller number", () => {
//         expect(ourNumber(3, 5)).toEqual(3)
//     })
//   })

// const ourNumber = (num1, num2) => {
//     if (num1< num2){
//         return num1
//     } else{
//         return num2
//     }
// }


// Create the function that will make the test pass.
// Write the test for a function that takes in one numbers and returns whether the number is odd.

// describe("oddNumbers", () => {
//     it("returns number is odd", () => {
//         expect(oddNumbers() % 2 === 0).toEqual(false)
//     })
// })

// const oddNumbers = (value) => {
//     if(value % 2 === 0){
//         return "This is an even number"
//     } else{
//         return "This is an odd number"
//     }
// }
// Create the function that will make the test pass.
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

// describe("fruit", () => {
//     it("returns the color of some fruit", () =>{
//         expect(fruit("Banana")).toEqual("Yellow")
//         expect(fruit("Apple")).toEqual("Red")
//         expect(fruit("Grape")).toEqual("Purple")


//     })
// })
// const fruit = (value) => {
//     if(value === "Banana"){
//         return "Yellow"
//     } else if(value === "Apple"){
//         return "Red"
//     } else if(value === "Grape"){
//         return "Purple"
//     } else {
//         return "Get outta here with your fake fruit."
//     }
// }

// Create the function that will make the test pass.
// Write the test for a function called rick that returns "Morty".

//  describe("Rick", () => {
//     it("should return Morty", () => {
//     expect(Rick()).toEqual("Morty")
    
//     })
//  })

// const Rick =() => {
//     return "Morty"
// }

// describe("Rick", () => {
//     it("should return Morty", () => {
//     expect(Rick("Rick")).toEqual("Morty")
//     })
// })
// const Rick =(value) => {
// if(value === "Rick")
// return "Morty"
// }
// Create the function that will make the test pass.
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.


// describe("greeter", () => {
//     it("Returns Hello Users Name", () => {
//         expect(greeter()).toEqual(`Hello ${greeter}`)
//     })
// })

// const greeter = (name) => {
//     return `Hello ${greeter}`
// }

// Create the function that will make the test pass.
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

// describe("oddOrEven", () => {
//     it("returns number is odd or even", () => {
//         expect(oddOrEven() % 2 === 0).toEqual(false)
//     })
// })

// const oddOrEven = (value) => {
//     if(value % 2 === 0){
//         return "This is an even number"
//     } else{
//         return "This is an odd number"
//     }
// }

// Create the function that will make the test pass.
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

// describe ("doubler", ()=> {
//     it("multiplies number by 2", () =>{
//         expect(doubler(10)).toEqual(20)
//     })
// })

// const doubler =(value) => {
//     return value * 2
// }
// Create the function that will make the test pass.
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

// describe("multiply", ()=>{
//     it("multiplies 1 or more numbers together",()=>{
//         expect(multiply(4,9)).toEqual(36)
//     })
// })

// const multiply =(num1, num2) => {
//     return num1 * num2
// }

// Create the function that will make the test pass.
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

// describe ("divisibleBy", () =>{
//     it("tell if first number is evenly divisble by the second number",()=>{
//         expect(divisbleBy(10 , 5)).toEqual(0)
//     })
// })
// const divisbleBy=(num1, num2) =>{
//     return num1 % num2 
// }

// Create the function that will make the test pass.
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".

describe ("fizzbuzz", ()=> {
    it("replaces mulitples of 5 with buzz, 3 with fizz, 15 with fizzbuzz", ()=>{
        expect(fizzbuzz(15))
    
    })
    
    })    
