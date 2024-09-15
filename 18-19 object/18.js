// Creating an object using literal notation
const person = {
  name: 'John',
  age: 30,

  // Method to greet
  greet: function () {
    console.log('Hello, my name is ' + this.name);
  },

  // Method to say age
  sayAge: function () {
    console.log('I am ' + this.age + ' years old.');
  },
};

// Accessing properties using dot notation
console.log(person.name); // Output: John
console.log(person.age); // Output: 30

// Modifying properties
person.age = 31;

// Accessing properties using bracket notation
console.log(person['age']); // Output: 31

// Calling methods
person.greet(); // Output: Hello, my name is John
person.sayAge(); // Output: I am 31 years old.

// Adding a new method
person.sayHello = function () {
  console.log('Hello!');
};

// Calling the new method
person.sayHello(); // Output: Hello!

// Creating a prototype object
const animal = {
  eat: function () {
    console.log('Eating');
  },
};

// Creating a new object that inherits from animal
const dog = Object.create(animal);
dog.bark = function () {
  console.log('Woof!');
};

// Calling methods from the prototype and the new method
dog.eat(); // Output: Eating
dog.bark(); // Output: Woof!

// Using Object methods to get properties and values
console.log(Object.keys(person)); // Output: ['name', 'age', 'greet', 'sayAge', 'sayHello']
console.log(Object.values(person)); // Output: ['John', 31, [Function: greet], [Function: sayAge], [Function: sayHello]]
console.log(Object.entries(person)); // Output: [['name', 'John'], ['age', 31], ['greet', [Function: greet]], ['sayAge', [Function: sayAge]], ['sayHello', [Function: sayHello]]]

/*

Explanation of Code
Creating and Initializing an Object:

We define a person object with properties name and age, and methods greet and sayAge.
Accessing and Modifying Properties:

We access and modify the age property using both dot and bracket notation.
Calling Methods:

We call the greet and sayAge methods of the person object.
Adding New Methods:

We add a new method sayHello to the person object and call it.
Prototypes and Inheritance:

We define an animal object with an eat method and create a dog object that inherits from animal. The dog object also has its own bark method.
Using Object Methods:

We use Object.keys(), Object.values(), and Object.entries() to get different representations of the person object’s properties.
This code snippet demonstrates various aspects of JavaScript objects and should give you a good understanding of how they work in practice.

*/
