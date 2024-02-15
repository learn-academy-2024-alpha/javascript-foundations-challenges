// Process: Write the test FIRST. Ensure the test fails correctly. Then write the code that will make the test pass.

// Note: You do not need to comment out the old tests or functions. The purpose of tests are to be AUTOMATED. Commenting them out defeats that purpose.

// Write the test for a function that returns "drink coffee" if you are tired and "keep working" if you are not tired.

describe("coffeeIfNeeded", () => {
    it("returns a statement if coffee is needed", () => {
      expect(coffeeIfNeeded("yes")).toEqual("drink coffee")
      expect(coffeeIfNeeded("no")).toEqual("keep working")
    })
  })
//ReferenceError: coffeeIfNeeded is not defined
// Create the function that will make the test pass.

const coffeeIfNeeded = (answer) => {
    if (answer === "yes") {
        return "drink coffee"
    }else if (answer === "no") {
        return "keep working"
    }else {
        return "error"
    }
}
// PASS  ./jest.test.js


// Write the test for a function that returns "relax" if you are stressed and "keep going" if you are not stressed.

describe("stressedOut", () => {
    it("returns a statement if your feeling stresssed", () => {
      expect(stressedOut("yes")).toEqual("relax")
      expect(stressedOut("no")).toEqual("keep going")
    })
  })
//   refrence error ● stressedOut › returns a statement if your feeling stresssed
// Create the function that will make the test pass.
const stressedOut = (answer) => {
    if (answer === "yes") {
      return "relax"
    } else if (answer === "no") {
      return "keep going"
    } else {
      return "error!"
    }
  }

// Write the test for a function that returns "in budget" if a price is lower than $300.
// Create the function that will make the test pass.

describe("budgetAnn", () => {
    it("should return in budget if less than $300", () => {
      let result = 250
        expect(budgetAnn(result)).toEqual("in budget")
    })
  })

const budgetAnn = (value) => {
    if (value < 300) {
    return "in budget"
} else {
    return "not in budget"
}
}


// Write the test for a function that takes in two numbers and returns the smaller number.
// Create the function that will make the test pass.

describe("smallNum", () => {
  it("takes 2 numbers and returns smaller number", () => {
    let num1 = 100
    let num2 = 200
    expect(smallNum(num1, num2)).toEqual(100)
  })
})

const smallNum = (value, number) => {
  return Math.min(value, number)
}

// Write the test for a function that takes in one numbers and returns whether the number is odd.
// Create the function that will make the test pass.

describe("oddNums", () => {
  it("takes in number and returns if number is odd", () => {
    let arrNums = 3
    expect(oddNums(arrNums)).toEqual("odd")
  })
})

const oddNums = (value) => {
  if (value % 2 !== 0){
    return "odd"
  } else {
    return "even"
  }
}
// Write the test for a function that takes in a fruit and returns "yellow" if the argument is banana, "red" if apple and "purple" if grape.
// Create the function that will make the test pass.

describe("fruitColor", () => {
  it("returns the color of the fruit that is given", () => {
    let fruit1 = "banana"
    let fruit2 = "apple"
    let fruit3 = "grape"
    expect(fruitColor(fruit1)).toEqual("yellow")
    expect(fruitColor(fruit2)).toEqual("red")
    expect(fruitColor(fruit3)).toEqual("purple")
  })
})
const fruitColor = (answer) => {
  if (answer === "banana") {
    return "yellow"
  } else if (answer === "apple") {
    return "red"
  } else if (answer === "grape") {
    return "purple"
  } else {
    return "error!"
  }
}


// Write the test for a function called rick that returns "Morty".
// Create the function that will make the test pass.
describe("rick", () => {
  it("returns string Morty", () => {
    expect(rick("yes")).toEqual("Morty")
  })
})

const rick = (answer) => {
  if (answer === "yes") {
    return "Morty"
  } else {
    return "error!"
  }
}
// Write the test for a function called greeter that takes a name as an argument and returns a greeting with that name to the screen.
// Create the function that will make the test pass.


describe("greeter", () => {
  it("return a String with name in the greeting", () => {
    let name1 = "Judas"
    let result = `Hello ${name1} you are cool`
    expect(greeter(result)).toEqual(result)
  })
})

const greeter = (string) => {
  //if (value === "Judas") {
  return string
}

// Write the test for a function called oddOrEven that takes a number as an argument and logs whether the number is odd or even.

describe("oddOrEven", () => {
it("returns a number as odd or even", () => {
  let oddNum = 3
  let evenNum = 4
  expect(oddOrEven(oddNum)).toEqual("that's odd")
  expect(oddOrEven(evenNum)).toEqual("now we're even")
})
})

// Create the function that will make the test pass.

const oddOrEven = (num) => {
  if(num % 2 !== 0){
  return "that's odd"
  }else if(num % 2 === 0){
    return "now we're even"
  }else{
    return "sum ain't right"
  }
    }
  

// Write the test for a function called doubler that takes a number and returns the result of the number multiplied by 2.

describe("doubler", () =>{
  it("takes a number and return it times 2.", () => {
    let multNum = 5
    let multResult = multNum * 2 
    expect(doubler(multResult)).toEqual("it takes a team")
  })
}) 

// Create the function that will make the test pass.

const doubler = (multCount) => {
  if (multCount === 10){
    return "it takes a team"
  }
}

// Write the test for a function called multiply that takes two numbers as arguments and logs the result of one of the numbers multiplied by the other.

describe("multiplyNums", () => {
  it("takes two numbers as arguments and returns those numbers multiplied", () => {
    let firstNum = 100
    let secondNum = 200
    let finalResult = firstNum * secondNum 
    expect(multiplyNums(firstNum, secondNum)).toEqual(finalResult)
  })
})
// Create the function that will make the test pass.

const multiplyNums = (num1, num2) => {
  return num1 * num2
}
// Write the test for a function called divisibleBy that takes two numbers as arguments and returns whether the first number is evenly divisible by the second so that divisibleBy(10, 5) logs "10 is evenly divisible by 5".

describe("divisbleBy", () => {
  it("takes two numbers and returns whether the first number is evenly divisible by the second", () => {
    let divideNum1 = 100
    let divideNum2 = 20
    expect(divisbleBy(divideNum1, divideNum2)).toEqual("these numbers are divisible by each other")
  })
})
// Create the function that will make the test pass.

const divisbleBy = (nums1, nums2) => {
  if (nums1 / nums2){
    return "these numbers are divisible by each other"
  } else {
    return "these are not divisible"
  }
}
// Write the test for a function called fizzbuzz. If a number is a multiple of 3, replace it with the word "fizz". If a number is a multiple of five, replace it with the word "buzz". If a number is a multiple of both 3 and 5, replace it with "fizzbuzz".

describe("fizzBuzz", () => {
  it("takes a number mulitple 3 returns fizz, takes a number multiple of 5 returns buzz, takes a number multiple of both 3 and 5 returns fizzbuzz", () => {
    let mulNum1 = 6
    let mulNum2 = 20
    let mulNum3 = 15
    expect(fizzBuzz(mulNum1)).toEqual("fizz")
    expect(fizzBuzz(mulNum2)).toEqual("buzz")
    expect(fizzBuzz(mulNum3)).toEqual("fizzbuzz")
  })
})
//  Create the function that will make the test pass.

const fizzBuzz = (number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return "fizzbuzz"
  } else if (number % 3 === 0) {
    return "fizz"
  } else if (number % 5 === 0) {
    return "buzz"
  } else {
    return "no valid entry"
  }
}