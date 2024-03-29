// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent",
  
  personString: function () {
    return `${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
  }
}
// Write the code that accesses the first name of the person object.
// console.log(person.firstName)
// Write the code that accesses the last name of the person object.
// console.log(person.lastName)
// Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlanet = "Earth"
console.log(person)

// Update the person object with a method that logs "Arthur Dent is from planet Earth".
// console.log(person.personString())
// Consider this variable:

const product = {
  name: "chair",
  price: 24.99
}
// Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
const describeProduct = (prodObj) => {
    return `The product is a ${prodObj.name}. It costs $${prodObj.price}`
}
console.log(describeProduct(product))
// Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
const totalWithTax = (prodObj) => {
    return (prodObj.price * .07 + prodObj.price).toFixed(2)
}
// console.log(totalWithTax(product))
// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
  descibeLunch: function () {
    return(`The ingredients for a  ${lunch.name} sandwich are ${lunch.ingredients}.`)
  }
}
// Write the code that accesses the ingredients property.
console.log(lunch.ingredients)
// Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2])
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const descibeLunch = (lunch) =>{
  return `The ingredients for a  ${lunch.name} sandwich are ${lunch.ingredients}.`
}

console.log(descibeLunch(lunch))

// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
console.log(lunch.descibeLunch())

// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
// const justCats = (animals) => animals.filter(animal => animal.type === "cat");
// console.log(justCats(animals))

// Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
// const animalNames = (animals) => animals.map(animal => animal.name);
// console.log(animalNames(animals))

// Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
// const oldAnimalNames = (animals) => animals.filter(animal => animal.age > 10).map(animals => animals.name) 
// console.log(oldAnimalNames(animals))

// Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
// const animalSentence = (animals) => animals.map(animal => `${animal.name} is a ${animal.age} year old ${animal.type}.`)
// console.log(animalSentence(animals))

// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}
// Write the code that destructures the author object so that the following code snippet will run successfully:
const { name } = author;
const { genre } = author;

console.log(`${name} is a ${genre} author`)
// // output: "H. G. Wells is a science fiction author"
// Consider this variable:

const pokeOne = {
  species: "Charmandar",
  pokemon_type: "Fire"
}

const pokeTwo = {
  species: "Magikarp",
  pokemon_type: "Water"
}
// Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:


// const { species, pokemon_type } = pokeTwo

const describePokemon = (obj) => {
  const { species, pokemon_type } = obj
  return`${species} is a ${pokemon_type} pokemon.`}

  console.log(describePokemon(pokeOne))
// // output: "Charmandar is a Fire pokemon"


console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"
// Consider this variable:

const triangleDimensions = {
  base: 2,
  height: 5
}
// Modify the triangleDimensions object to have a method that returns the area of the triangle.
const calculateArea = (triObj) => {
  return 0.5 * triObj.base * triObj.height
}

console.log(calculateArea(triangleDimensions))

// Write the code that will update the base to be the value of 6.
triangleDimensions.base = 6
console.log(triangleDimensions)
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
    ],
    2024: [
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
// const cohortName = (cohortsObj) => {
//     alpha2022 = cohortsObj.cohorts;
//     return alpha2022;
// }
// console.log(learn.cohorts[2024][0])
// Write the code that uses destructuring to log the name of your cohort.
// const { 2024: year } = learn.cohorts
// console.log(year[0])
const { cohorts: { 2024: [alphaCohort] } } = learn;
// console.log(alphaCohort)
// Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
const cohortStr = (cohortObj) => {
    const arrStr = [];
    const yearsObj = cohortObj.cohorts
    for (const year in yearsObj) {
        let cohortNames = cohortObj.cohorts[year]
        console.log(cohortNames)
        cohortNames.forEach(cohort => {
            arrStr.push(`${cohort} ${year}`);
        })
    }
    // return arrStr;
}
console.log(cohortStr(learn));
