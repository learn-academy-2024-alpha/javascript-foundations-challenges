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
// console.log(strongLatte.latteProfile())

// Write the code that makes a regular, single shot latte
let strongLatte = new Latte("regular", "no milk", 1)

// Log the regular, single shot latte's profile
console.log(strongLatte.latteProfile());

// Write the code that makes a double shot, hazelnut latte with almond milk.
strongLatte = new Latte("hazelnut", "almond milk", 2)
// Log the double shot, hazelnut latte with almond milk's profile.
console.log(strongLatte.latteProfile());

// Volume of a Cylinder: create a class for Cylinder
class Cylinder {
  constructor (radius, height) {
    this.radius = radius
    this.height = height
  }

// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
volume () {
  return Math.PI * this.radius ** 2 * this.height
}
}
let mathVolume = new Cylinder(2, 4)
console.log(mathVolume.volume());

// Write the code that rounds the volume of the cylinder to four decimal places
console.log(mathVolume.volume().toFixed(4));

// Write the code that creates three unique cylinder objects
mathVolume = new Cylinder(4, 8)
console.log(mathVolume.volume().toFixed(4));

mathVolume = new Cylinder(9, 13)
console.log(mathVolume.volume().toFixed(4));

mathVolume = new Cylinder(-2, -4)
console.log(mathVolume.volume().toFixed(4));
