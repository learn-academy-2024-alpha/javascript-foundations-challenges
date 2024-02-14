// 💻 Challenges
// Consider this variable:

//  const person = {
//    firstName: "Arthur",
//    lastName: "Dent"
//  }


// Write the code that accesses the first name of the person object.

// console.log(person.firstName)

//output: Arthur

// Write the code that accesses the last name of the person object.

//console.log(person.lastName)

//output: Dent


// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.

// person.homePlanet = "Earth"

// Update the person object with a method that logs "Arthur Dent is from planet Earth".

//console.log(person.homePlanet)

// Consider this variable:

// const product = {
//   name: "chair",
//   price: 24.99
// }

// // Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".

// // const describeProduct = (product) => {
// //         return `The product is a ${product.name}. It costs ${product.price}`
// //     }

// // console.log(describeProduct(product))

// // Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.

// const totalWithTax = (object) => {
//     let tax = 24.99 * 0.7
//     let totalPrice = tax + 24.99
//     return totalPrice.toFixed(2)
// }
// console.log(totalWithTax(product))
// output: 42.48

// Consider this variable:

// const lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"]
// }
// Write the code that accesses the ingredients property.


// console.log(lunch.ingredients)

// Write the code that access the third ingredient of the lunch object.

// console.log(lunch.ingredients[2])

// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// const lunchTime = () => {
//     return `The ingredients for a ${lunch.name} ${lunch.type} is ${lunch.ingredients}`
// }
// console.log(lunchTime())


// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// const lunch = {
//     name: "PB and Banana",
//     type: "sandwich",
//     ingredients: ["bread", "peanut butter", "banana"],
//     getData: function () {
//     return `The ingredients for a ${lunch.name} ${lunch.type} is ${lunch.ingredients}`
//     }
// }
// console.log(lunch.getData())
  
// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
// const catNames = animals.filter((value) => value.type === "cat")
// console.log(catNames);

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
// const onlyName = animals.map((value) => value.name)
// console.log(onlyName);

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
// const oldYeller = (object) => {
//     return object.filter((value) => {
//         if(value.age > 10) {
//             return value.name
//         }
//     })
// }
// console.log(oldYeller(animals));

// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
// const aboutAnimal = (object) => {
//     return object.map((value) => {
//         return `${value.name} is a ${value.type} and they are ${value.age} years young`
//     })
// }
// console.log(aboutAnimal(animals));

// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}

// Write the code that destructures the author object so that the following code snippet will run successfully:
// const { name, genre } = author
//  console.log(`${name} is a ${genre} author`)
// // output: "H. G. Wells is a science fiction author"


const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire"
}

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water"
}
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:
// const describePokemon = (poke) => {
//     return `${poke.species} is a ${poke.pokemon_type} type pokèmon`
// }
// console.log(describePokemon(pokeOne))
// // output: "Charmandar is a Fire pokemon"
// console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"

const triangleDimensions = { // 2 * 5 * 1/2
  base: 2,
  height: 5
}
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
// const triangleDimensionsOne = { 
//     base: 2,
//     height: 5,
//     getData: function () {
//         return (this.base * this.height) / 2
//     }
//   }
//   console.log(triangleDimensionsOne.getData());
// Write the code that will update the base to be the value of 6.
// triangleDimensionsOne.base = 6
// console.log(triangleDimensionsOne.getData());


// 🏔 Stretch Goals
// Consider this variable:

const learn = {
  cohorts: {
    2022: [
      "Alpha",
      "Bravo",
      "Charlie",
      "Delta",
      "Echo",
      "Foxtrot",
      "Golf",
      "Hotel"
    ],
    2023: [
      "Alpha",
      "Bravo",
      "Charlie",
      "Delta",
      "Echo",
      "Foxtrot",
      "Golf",
      "Hotel",
      "India",
      "Juliet"
    ]
  }
}
// Write the code that logs the name of your cohort.
console.log(learn.cohorts[2023][0]);

// Write the code that uses destructuring to log the name of your cohort.
const { 
    cohorts: {
        2023: [alphaCohort],
    },  
} = learn
console.log(alphaCohort);

// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
const nameYear = (object) => {
    let arr = []
    let object = object
    for (const year in object) {
        const cohortName = object.cohorts[year]
        cohortName.forEach(cohort => {
            arr.push(`${cohort} ${year}`)
        })
    }
    return arr
}
console.log(arr);
// // output: ["2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf", "2022 Hotel", "2023 Alpha", "2023 Bravo", "2023 Charlie", "2023 Delta", "2023 Echo", "2023 Foxtrot", "2023 Golf", "2023 Hotel", "2023 India", "2023 Juliet"]
