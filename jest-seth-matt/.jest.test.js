// create a function that outputs "Hello Alpha 2024!"
// 	describe("greater", () => {
// 	it("should return a string Hello Alpha 2024!")
// 	expect(greater()).toEqual("Hello Alpha 2024!")
// 	})
// 	})

// 1. Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.
describe("coffee", () => {
    it ("should return a statement depending on input", () => {
        expect(coffee("yes")).toEqual("drink coffee")
        expect(coffee("no")).toEqual("keep working")
    })
})
const coffee = (answer) => {
    if(answer === "yes") {
    return "drink coffee"
} else if (answer === "no") {
    return "keep working"
    } else {
        return "error"
    } 
}

// 2. Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.
describe("relaxed", () => {
    it ("should return a statement depending on input", () => {
        expect(relaxed("yes")).toEqual("relax")
        expect(relaxed("no")).toEqual("keep going")
    })
})
const relaxed = (answer) => {
    if(answer === "yes") {
        return "relax"
    } else if (answer === "no") {
        return "keep going"
    } else {
        return "error"
    }
}

// 3. Write the test for a function that returns "in budget" if a price is lower than $300.
describe("areYouInBudget", () => {
    it ("should return a statement depending on input", () => {
        expect(areYouInBudget(true)).toEqual("in budget")
    })
})
const areYouInBudget = (number) => {
    if(number <= 300) {
        return "in budget"
    } else { 
        return "not in budget"
    }
}

// 4. Write the test for a function that takes in two numbers and returns the smaller number.
describe("numbers", () => {
    it ("returns smaller number", () => {
        const num1 = 2
        const num2 = 5

        expect(numbers(num1, num2)).toEqual(`${num1} is smaller`) 
    })
})

const numbers = (num1, num2) => {
    if(num1 < num2) {
        return `${num1} is smaller`
    } else if (num1 > num2) {
        return `${num2} is smaller`
    } else {
        return "not a number"
    }
}

// 5. Write the test for a function that takes in one numbers and returns whether the number is odd.
describe("isOdd", () => {
    it ("returns wheather the number is odd", () => {
        let number = 5
        expect(isOdd(number)).toEqual(`${number} is odd`)
    })
})
const isOdd = (number) => {
    return number % 2 !== 0 ? `${number} is odd` : `${number} is even`    
}

// 6. Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.

describe("fruitColor", () => {
    it("returns the color of fruit", () => {
        
        expect(fruitColor("apple")).toEqual("red")
        expect(fruitColor("banana")).toEqual("yellow")
        expect(fruitColor("grape")).toEqual("purple")
    })
})

const fruitColor = (fruit) => {
    if(fruit === "apple") {
        return "red"
    } else if (fruit === "banana") {
        return "yellow"
    } else if (fruit === "grape"){
        return "purple"
    } 
}
// 7. Write the test for a function called rick that returns "Morty".
describe("rickctionMortifier", () => {
    it("returns morty when rick is called", () => {
        expect(rickctionMortifier("Rick")).toEqual("Morty")
    })
})

const rickctionMortifier = (legRick) => {
    return legRick === "Rick" ? "Morty" : "Evil Morty"
}

// 8. Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
describe("greeter", () => {
    it("returns greeting containing a name", () =>{
        expect(greeter("Seth")).toEqual("Greetings human named Seth" )
        expect(greeter("Matt")).toEqual("Greetings human named Matt" )
        expect(greeter("Mark")).toEqual("Greetings human named Mark" )
        expect(greeter("Shawn")).toEqual("Greetings human named Shawn" )
        expect(greeter("Ryan")).toEqual("Greetings human named Ryan" )
        expect(greeter("Morgan")).toEqual("Greetings human named Morgan" )
        expect(greeter("Luis")).toEqual("Greetings human named Luis" )
        expect(greeter("Amir")).toEqual("Greetings human named Amir" )
        expect(greeter("Judas")).toEqual("Greetings human named Judas" )
        expect(greeter("trish")).toEqual("Greetings human named Trish" )




    })
})

const greeter = (name1) => {
    return name1 === "Seth" ? `Greetings human named ${name1}` : "iAmARobot"
}
// 9. Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
describe("oddOrEven", () => {
    it("returns whether the number is odd or even", () => {
        expect(oddOrEven(5)).toEqual("5 is odd")
        expect(oddOrEven(-105)).toEqual("-105 is odd")
        expect(oddOrEven(2)).toEqual("2 is even")
        expect(oddOrEven(36)).toEqual("36 is even")
        
    })
})

const oddOrEven = (number) => {
    if(number %2 === 0) {
        return `${number} is even`
    } else if (number % 2 !== 0) {
        return `${number} is odd`
    } else {
        return "error"
    }
}
// 10. Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
describe("doubler" , () => {
    it("returns number*2", () => {
        expect(doubler(6)).toEqual(12)
    })
})
 const doubler = (number) => {
return number * 2
 }
// 11. Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
describe("multiply", () => {
    it("returns 2 numbers multiplied by eachother", () => {
        expect(multiply(6, 6)).toEqual(36)
        expect(multiply(4, 2)).toEqual(8)
        expect(multiply(1, -2)).toEqual(-2)
        expect(multiply(-1, -2)).toEqual(2)

    })
})

const multiply = (num1, num2) => {
    return num1 * num2
}
// 12. Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
describe("divisibleBy", () => {
    it("returns if a number is divisible by a second number", () => {
        expect(divisibleBy(10, 5)).toEqual("10 is divisible by 5!")
        expect(divisibleBy(50, 5)).toEqual("50 is divisible by 5!")
        expect(divisibleBy(7, 5)).toEqual("7 is not divisible by 5!")
    })
})

const divisibleBy = (num1, num2) => {
    return num1 % num2 === 0 ? `${num1} is divisible by ${num2}!` : `${num1} is not divisible by ${num2}!`
}
// 13. Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".

describe("fizzbuzz", () => {
    it("returns 'fizz' if number is multiple of 3 'buzz' if number is a multiple of 5 and 'fizzbuzz' if number is a multiple of 3 and 5 ", () => {
        expect(fizzbuzz(30)).toEqual("fizzbuzz")
        expect(fizzbuzz(10)).toEqual("buzz")
        expect(fizzbuzz(6)).toEqual("fizz")
        expect(fizzbuzz(15)).toEqual("fizzbuzz")
    })
})

const fizzbuzz = (number) => {
    if(number % 3 === 0 && number % 5 === 0){
        return "fizzbuzz"
    } else if(number % 3 === 0) {
        return "fizz"
    } else if(number % 5 === 0) {
        return "buzz"
    } else{
        number
    }
}