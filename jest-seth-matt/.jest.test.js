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
// 7. Write the test for a function called rick that returns "Morty".
// 8. Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// 9. Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.
// 10. Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.
// 11. Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.
// 12. Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".
// 13. Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".
