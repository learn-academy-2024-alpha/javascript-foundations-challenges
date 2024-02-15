// 💻 Challenges
// Consider this variable:

const person = {
  firstName: "Arthur",
  lastName: "Dent",
  getData: function () {
    return`${this.firstName} ${this.lastName} is from planet ${this.homePlanet}`
  }
}
// 1. Write the code that accesses the first name of the person object.
console.log(person.firstName);

// 2. Write the code that accesses the last name of the person object.
console.log(person.lastName);

// 3.Write the code that gives the person object a property of homePlanet and set it to 'Earth'.
person.homePlanet = "Earth"
console.log(person.homePlanet);
// 4.Update the person object with a method that logs "Arthur Dent is from planet Earth".
console.log(person.getData());



// Consider this variable:

const product = {
  name: "chair",
  price: 24.99
}
// 5.Write a function called describeProduct that takes the product object as an argument and logs "The product is a chair. It costs $24.99".
const describeProduct = (product) => {
return `The product is a ${product.name}. It costs $${product.price}`
}
console.log(describeProduct(product));
// 6.Write a function called totalWithTax that takes the product object as an argument and returns the total price of the chair that includes a 7% sales tax rounded to two decimals.
const totalWithTax = (product) => {
  let tax = product.price * .07
  let withTax = product.price + tax
  let total = withTax.toFixed(2)
  return `$${total}`
}


// const totalWithTax = (product) => {
//   let tax = product.price * .07
//   let withTax = product.price + tax
//   let total = (Math.round(withTax*100)/100).toFixed(2)
//   return `$${total}`
// }
console.log(totalWithTax(product));


// Consider this variable:

const lunch = {
  name: "PB and Banana",
  type: "sandwich",
  ingredients: ["bread", "peanut butter", "banana"],
  makeSandwich: function () {
    return `The ingredients for a ${this.name} ${this.type} are ${this.ingredients.join(", ")}.`
  }
}
// 7.Write the code that accesses the ingredients property.
console.log(lunch.ingredients);


// 8.Write the code that access the third ingredient of the lunch object.
console.log(lunch.ingredients[2]);
// 9.Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
const pbB = (lunch) => {
  return `The ingredients for a ${lunch.name} ${lunch.type} are ${lunch.ingredients.join(", ")}.`
}
console.log(pbB(lunch));
// 10.Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
console.log(lunch.makeSandwich());


// Consider this variable:

const animals = [
  { name: "Waffles", type: "dog", age: 7 },
  { name: "Fluffy", type: "cat", age: 14 },
  { name: "Spelunky", type: "dog", age: 4 },
  { name: "Hank", type: "cat", age: 11 }
]
// 11.Create a function that takes in an array of animal objects and returns a new array with only the objects that are cats.
const cats = (animals) => {
  return animals.filter(value => value.type === "cat")
}
console.log(cats(animals));
// 12.Create a function that takes in an array of animal objects and returns a new array with only the names of the animals.
const animalNames = () => {
  return animals.map(value => value.name)
}
console.log(animalNames(animals));
// 13.Create a function that takes in an array of animal objects and returns a new array of the names of the animals that are more than 10 years old.
const animalAge = (array) => {
  return array.filter((obj) => obj.age > 10).map((item) => `${item.name}`)
  }
 console.log(animalAge(animals))
//14. Create a function that takes in an array of animal objects and returns a new array with a sentence about each animal.
const animalSentence = (array) => {
  return array.map(array => `${array.name} is a good ${array.type} and he is ${array.age} years old.`)
  
}

console.log(animalSentence(animals))


// Consider this variable:

const author = {
  name: "H. G. Wells",
  genre: "science fiction"
}
// 15.Write the code that destructures the author object so that the following code snippet will run successfully:
const { name, genre } = author 
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
// 16.Create a function called describePokemon that take an object like the ones above and uses destructuring to return a description of the Pokemon so that the following code snippet will run successfully:

const describePokemon = (arrayOfPoke) => {
  const { species, pokemon_type } = arrayOfPoke
  return `${species} is a ${pokemon_type} pokemon`
}

console.log(describePokemon(pokeOne))
// // output: "Charmandar is a Fire pokemon"


console.log(describePokemon(pokeTwo))
// // output: "Magikarp is a Water pokemon"



// Consider this variable:

const triangleDimensions = {
  base: 2,
  height: 5,
  area: function () {
    return .5 * this.base * this.height
  }
}
//17. Modify the triangleDimensions object to have a method that returns the area of the triangle.

console.log(triangleDimensions.area())

// 18. Write the code that will update the base to be the value of 6.
triangleDimensions.base = 6
console.log(triangleDimensions.base)


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
// 19. Write the code that logs the name of your cohort.
//console.log(learn.cohorts[2023][0])

console.log(Object.values(learn.cohorts)[1][0])


//20.  Write the code that uses destructuring to log the name of your cohort.

const { cohorts: { 2023: cohortNames }  } = learn
const yourCohortName = cohortNames[0]
console.log(yourCohortName);


// 21. Create a function that takes an object like the one above and returns an array with a string of every cohort name and year.
// // output: ["2022 Alpha", "2022 Bravo", "2022 Charlie", "2022 Delta", "2022 Echo", "2022 Foxtrot", "2022 Golf", "2022 Hotel", "2023 Alpha", "2023 Bravo", "2023 Charlie", "2023 Delta", "2023 Echo", "2023 Foxtrot", "2023 Golf", "2023 Hotel", "2023 India", "2023 Juliet"]

const cohortStr = (cohortObj) => {
  let arr = []
  let yearsObj = cohortObj.cohorts
  //console.log(yearsObj)
  for ( const year in yearsObj) {
    const cohortName = cohortObj.cohorts[year]
    cohortName.forEach(cohort => {
      arr.push(`${cohort} ${year}`)
    })
  }
  return arr
}
console.log(cohortStr(learn))