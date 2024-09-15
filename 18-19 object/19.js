// Example object
const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
  },
};

// **Using Object.freeze()**

console.log('--- Object.freeze() ---');

// Freeze the object
Object.freeze(person);

// Attempting to modify the object
person.age = 31; // This will fail silently in non-strict mode or throw an error in strict mode
person.address.street = '456 Elm St'; // This will succeed because the nested object is not frozen

// Attempting to add new properties
person.email = 'john@example.com'; // This will not be added

// Attempting to delete a property
delete person.name; // This will fail silently or throw an error in strict mode

// Log the results
console.log(person.age); // Output: 30
console.log(person.email); // Output: undefined
console.log(person.address.street); // Output: 456 Elm St (Note: Nested objects are not frozen)
console.log(person.name); // Output: John

// **Using Object.seal()**

console.log('--- Object.seal() ---');

// Create a new object for sealing example
const car = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2020,
};

// Seal the object
Object.seal(car);

// Attempting to modify the object
car.year = 2021; // This will succeed
car.color = 'blue'; // This will not be added

// Attempting to delete a property
delete car.make; // This will fail silently or throw an error in strict mode

// Log the results
console.log(car.year); // Output: 2021
console.log(car.color); // Output: undefined
console.log(car.make); // Output: Toyota

/*

Explanation
Object.freeze() Example:

Object.freeze(person);: The person object is frozen, making it immutable.
Attempts to change the age property, add a new email property, and delete the name property fail or are ignored.
However, changes to nested objects (like address) are not affected by Object.freeze() unless the nested objects themselves are also frozen.
Object.seal() Example:

Object.seal(car);: The car object is sealed, preventing the addition or deletion of properties.
Attempts to modify the year property succeed, while adding a new color property and deleting the make property fail or are ignored.
This code provides a clear demonstration of how Object.freeze() and Object.seal() control the mutability of objects and their properties.

*/
