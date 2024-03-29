// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
// Create the function that will make the test pass.
// describe("functionName", ()=> {
//     it("short desciption of what fxn should do", ()=>{
//         expect(functionNam(input)).toEqual(output)
//     })
// })

describe("drinkCoffeeOrKeepWorking", ()=>{
    it("the function returns drink coffee or if you are tired it returns keep working", ()=>{
        expect(drinkCoffeeOrKeepWorking(true)).toEqual("drink coffee")
        expect(drinkCoffeeOrKeepWorking(false)).toEqual("keep working")
    })
})


const drinkCoffeeOrKeepWorking = (answer) =>{
    if (answer === true) {
        return "drink coffee"
    } else if (answer === false) {
        return "keep working"
    }
}


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
// Create the function that will make the test pass.
describe("relaxOrKeepGoing", ()=>{
    it(" the function should return relax if you are stressed and if not keep going", ()=>{
        expect(relaxOrKeepGoing(true)).toEqual("relax")
        expect(relaxOrKeepGoing(false)).toEqual("keep going")
    })
})

const relaxOrKeepGoing = (answer) =>{
    if (answer === true) {
        return "relax"
    } else if (answer === false) {
        return "keep going"
    }
}



// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.
describe("budget", ()=>{
    it("the function should return in budget if the price is lower than $300", ()=>{
        expect(budget(200)).toEqual('in budget')
        expect(budget(500)).toEqual('to expensive')
    })
})

const budget = (price) => {
    if(price <= 300 ){
        return "in budget"
    } else {
        return "to expensive"
    } 
}


// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.
describe("smallestNumber",()=>{
    it("the function will take in two numbers and returns the smallest", ()=>{
        expect(smallestNumber(10,20)).toEqual(10);
        expect(smallestNumber(20,15)).toEqual(15);
    })
})

const smallestNumber = (num1, num2) => {
    if(num1 > num2) {
        return num2
    }else if(num2 > num1){
        return num1
    }else{
        return "equal in value"
    }
}
// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.
describe("isItOdd", () => {
    it("the fxn takes a num and returns whether num is odd", () => {
        expect(isItOdd(10)).toEqual("not odd")
        expect(isItOdd(13)).toEqual("odd")
    })
})

const isItOdd = (num) => {
    if (num % 2 !== 0) {
        return "odd"
    } else {
        return "not odd"
    }
}
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.
describe("appleOrBanana", () => {
    it("the fxn takes in a string and returns yellow if banana, red if apple, purple if grape", () => {
        expect(appleOrBanana("banana")).toEqual("yellow")
        expect(appleOrBanana("apple")).toEqual("red")
        expect(appleOrBanana("grape")).toEqual("purple")
    })
})

const appleOrBanana = (fruit) => {
    if (fruit === "banana") {
        return "yellow"
    } else if (fruit === "apple") {
        return "red"
    } else if (fruit === "grape") {
        return "purple"
    }
}
// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.
describe("rick", () => {
    it("the fxn returns string Morty", () => {
        expect(rick()).toEqual("Morty")
    })
})

const rick = () => {
    return "Morty"
}
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.
describe("greeter", () => {
    it("the fxn will return the name passed with a greeting", () => {
        expect(greeter("Mark")).toEqual("Hello, Mark!")
    })
})

const greeter = (name) => {
    return `Hello, ${name}!`
}
// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// Create the function that will make the test pass.
describe("oddOrEven", () => {
    it("the fxn will take a num and return whether odd or even", () => {
        expect(oddOrEven(12)).toEqual("even")
        expect(oddOrEven(13)).toEqual("odd")
    })
})

const oddOrEven = (num) => {
    if (num % 2 === 0) {
        return "even"
    } else {
        return "odd"
    }
}
// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// Create the function that will make the test pass.
describe("doubler", () => {
    it("The function will take in a number and double it", () => {
        expect(doubler(5)).toEqual(10)
        expect(doubler(10)).toEqual(20)
    })
})

const doubler = (number) => {
    return number * 2
}
// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// Create the function that will make the test pass.
describe("multiply", () => {
    it("The function will take two numbers and multiply them and result in the sum of the two numbers", () => {
        expect(multiply(5, 5)).toEqual(25)
        expect(multiply(3, 10)).toEqual(30)
    })
})

const multiply = (num1, num2) => {
    return num1 * num2
}
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// Create the function that will make the test pass.
describe("divisibleBy", () => {
    it("This function will take two numbers and find whether or not the number is evenly divisible by the second number.", () => {
        expect(divisibleBy(10, 5)).toEqual("evenly divisible")
        expect(divisibleBy(24,5)).toEqual("not evenly divisible")

    })
})

const divisibleBy = (num1,num2) => {
    if (num1 % num2 === 0) {
        return "evenly divisible"
    } else{
        return "not evenly divisible"
    }
}
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
// Create the function that will make the test pass.

describe("fizzbuzz", () => {
    it("This function will display a multiple of 3, replace it with the word fizz. If a number is a multiple of five, replace it with the word buzz. If a number is a multiple of both 3 and 5, replace it with fizzbuzz", () => {
        expect(fizzbuzz(15)).toEqual("fizzbuzz")
        expect(fizzbuzz(3)).toEqual("fizz")
        expect(fizzbuzz(5)).toEqual("buzz")

    })
})


const fizzbuzz = (num) => {
    if (num % 3 === 0 && num % 5 === 0){
        return "fizzbuzz"
    } else if(num % 3 === 0){
        return "fizz"
    } else if (num % 5 === 0){
        return "buzz"
    }
}