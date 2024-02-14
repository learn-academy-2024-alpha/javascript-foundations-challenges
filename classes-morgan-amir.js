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


// Coffee Maker: copy the given Coffee class into a text editor
// Write the code that makes a black coffee object
let blackCoffeeObj = new Coffee("black", "no cream", "no sugar")
console.log(blackCoffeeObj)
// Write the code that outputs the black coffee's profile
console.log(blackCoffeeObj.coffeeProfile())
// Write the code that makes a coffee object with 1 cream and 2 sugars
let coffeeCreamSugar = new Coffee("not black", 1, 2)
console.log(coffeeCreamSugar)
// Write the code that outputs the 1 cream and 2 sugars coffee profile
console.log(coffeeCreamSugar.coffeeProfile())

// Latte Maker: create a class for Latte

//class Latte 
  

// Write a Latte class that takes a flavor, a milk type, and a number of shots

// class Latte {
//   constructor(flavor, milk, shots){
//     this.flavor = flavor 
//     this.milk = milk
//     this.shots = shots
//   }
// }

// Write a method for your Latte class that outputs the latte's profile

// class Latte {
//   constructor(flavor, milk, shots){
//     this.flavor = flavor 
//     this.milk = milk
//     this.shots = shots
//   }
  
//   latteProfile() {
//     return `This ${this.flavor} latte with ${this.milk} milk with ${this.shots} shots of espresso.` 
//   }
// }

// Write the code that makes a regular, single shot latte

class Latte {
  constructor(flavor, milk, shots){
    this.flavor = flavor 
    this.milk = milk
    this.shots = shots
  }
  
  latteProfile() {
    return `This ${this.flavor} latte with ${this.milk} milk with ${this.shots} shots of espresso.` 
  }

  regularLatte() {
    if (this.shots < 2) {
      return `A regular ${this.shots} shot ${this.flavor} latte with ${this.milk} milk`
    }
    
  }
  doubleLatte() {
    if (this.shots === 2) {
      return `${this.shots} shots ${this.flavor} latte with ${this.milk} milk`
    }
    
  }
}

// Log the regular, single shot latte's profile

let vaniAlmLatte = new Latte('vanilla', 'Almond', 1)

console.log(vaniAlmLatte.regularLatte())

// Write the code that makes a double shot, hazelnut latte with almond milk.

let doubHazLatte = new Latte('hazlenut', 'almond', 2)

// Log the double shot, hazelnut latte with almond milk's profile.

console.log(doubHazLatte.doubleLatte())

// Volume of a Cylinder: create a class for Cylinder

// class Cylinder {

// }

// Write a class that calculates the volume of a Cylinder: v = πr^2h (r is the radius and h is the height of the cylinder)

// class Cylinder {
// constructor(height, radius){
//   this.height = height
//   this.radius = radius
// }
// volume( ){
//   return (3.14 * (this.radius ** 2) * this.height).toFixed(4) 
// }    
// }

// Write the code that rounds the volume of the cylinder to four decimal places


class Cylinder {
  constructor(height, radius){
    this.height = height
    this.radius = radius
  }
  volume( ){
    let pi = 3.14
    let rSquared = this.radius ** 2
    let height = this.height
    return (pi * rSquared * height)
  }    
  }

// Write the code that creates three unique cylinder objects

let cylinderOne = new Cylinder(2, 5)
let cylinderTwo = new Cylinder(-2, -5)
let cylinderThree = new Cylinder(0.2, 0.5)

console.log(cylinderOne.volume())
console.log(cylinderTwo.volume())
console.log(cylinderThree.volume())