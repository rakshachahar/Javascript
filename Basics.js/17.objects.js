// store in heap

// Ways to create objects

// 1. Object literal syntax
const car = {
    brand: "Toyota",
    model: "Model Camry",
    year: 2020,
    start: function() {
        console.log("Car started");
    }
};
console.log(car);
car.start();

// 2. new Object() syntax
const item = new Object();
item.name = "Laptop";
item.price = 1200;
console.log(item);

// 3.Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello, my name is " + this.name);
    };
}
const person1 = new Person("Alice", 30);
console.log(person1);
person1.greet();

// 4. ES6 Class syntax
class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound);
    }
}
const dog = new Animal("Dog", "Woof");
console.log(dog);
dog.makeSound();

// Accessing object Properties
console.log(car.brand); //Dot notation
console.log(car["model"]); //Bracket notation

// Modifying object properties
car.year = 2021; //Dot notation
car["color"] = "red"; //Bracket notation
console.log(car);
