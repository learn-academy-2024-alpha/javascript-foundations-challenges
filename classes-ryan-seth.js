// Coffee Maker: copy the given Coffee class into a text editor


class Coffee {
  constructor(type, cream, sugar) {
    this.type = type.toLowerCase()
    this.cream = cream
    this.sugar = sugar
  }

  coffeeProfile() {
    return `A ${this.type} coffee with ${this.creams()}, ${this.sugars()}`
  }

  creams() {
    if (this.cream > 1) {
      return `${this.cream} creams`
    } else {
      return `${this.cream} cream`
    }
  }

  sugars() {
    if (this.sugar > 1) {
      return `${this.sugar} sugars`
    } else {
      return `${this.sugar} sugar`
    }
  }
}
// Write the code that makes a black coffee object
let blackCoffee = new Coffee("black", 0, 0)
console.log(blackCoffee)
// Write the code that outputs the black coffee's profile
console.log(blackCoffee.coffeeProfile())
// Write the code that makes a coffee object with 1 cream and 2 sugars
blackCoffee = new Coffee("coldbrew", 1 , 2)
//let creamCoffee = new Coffee("coldbrew", 1, 2 )
console.log(blackCoffee);
// Write the code that outputs the 1 cream and 2 sugars coffee profile
console.log(blackCoffee.coffeeProfile())



// Latte Maker: create a class for Latte

// Write a Latte class that takes a flavor, a milk type, and a number of shots
class Latte {
    constructor(flavor, milkType, numberOfShots){
    this.flavor = flavor.toLowerCase()
    this.milkType = milkType
    this.numberOfShot = numberOfShots
    }

// Write a method for your Latte class that outputs the latte's profile
latteProfile() {
    return `A ${this.flavor} latte with ${this.milkType} and ${this.numberOfShot} shots of espresso`
}
}
let strongLatte = new Latte("vanilla", "heavy cream", 2)
console.log(strongLatte.latteProfile())
// Write the code that makes a regular, single shot latte
// Log the regular, single shot latte's profile
// Write the code that makes a double shot, hazelnut latte with almond milk.
// Log the double shot, hazelnut latte with almond milk's profile.
// Volume of a Cylinder: create a class for Cylinder
// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places
// Write the code that creates three unique cylinder objects
