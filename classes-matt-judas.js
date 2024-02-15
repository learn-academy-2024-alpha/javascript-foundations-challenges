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


//   Coffee Maker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
let blackCoffee = new Coffee("black","no","no")

// Write the code that outputs the black coffee's profile
console.log(blackCoffee.coffeeProfile());
// Write the code that makes a coffee object with 1 cream and 2 sugars
let myCoffee = new Coffee("", "1", "2")
// Write the code that outputs the 1 cream and 2 sugars coffee profile
console.log(myCoffee.coffeeProfile());
//   Latte Maker: create a class for Latte

// Write a Latte class that takes a flavor, a milk type, and a number of shots
class Latte {
    constructor(latteFlavor, latteMilkType, latteNumberOfShots) {
        this.flavor = latteFlavor
        this.milkType = latteMilkType
        this.numberOfShots = latteNumberOfShots
     }
    // Write a method for your Latte class that outputs the latte's profile
    latteProfile() {
        return ` A ${this.flavor} Latte, with ${this.milkType} and ${this.numberOfShots} shot of espresso`
    }
}

// Write the code that makes a regular, single shot latte
let myLatte = new Latte("regular", "whole milk", 1)
// Log the regular, single shot latte's profile
console.log(myLatte.latteProfile());
// Write the code that makes a double shot, hazelnut latte with almond milk.
let doubleShotHazel = new Latte("hazelnut", "almond milk", "a double")
// Log the double shot, hazelnut latte with almond milk's profile.
console.log(doubleShotHazel.latteProfile());
// Volume of a Cylinder: create a class for Cylinder

class Cylinder {
    constructor(cylinderRadius, cylinderHeight) {
        this.radius = cylinderHeight
        this.height = cylinderHeight

    }
    cylVolume() {
        return (((3.14 *`${this.radius}`) **2  ) * `${this.height}`).toFixed(4)
    }
} 

// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)
// Write the code that rounds the volume of the cylinder to four decimal places

// Write the code that creates three unique cylinder objects
let cylOne = new Cylinder(3, 8)
let cylTwo = new Cylinder(12, 4)
let cylThree = new Cylinder(7, 6)

console.log();
console.log();
console.log();