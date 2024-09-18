/*
 Higher-Order Function

A higher-order function is a function that:

1. Takes one or more functions as arguments: This allows you to pass behaviors or operations to the function.
2. Returns a function: This enables you to create new functions dynamically.

Examples of Higher-Order Functions:
- Array Methods: Functions like `map`, `filter`, and `reduce` are higher-order functions because they accept a function as an argument.

Example:

*/
const numbers = [1, 2, 3, 4];

// A higher-order function using map
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]

/*
 Callback Function

A callback function is simply a function that is passed as an argument to another function and is invoked at a later point in time. Callbacks are often used in asynchronous operations, such as when dealing with events or HTTP requests.

Examples of Callback Functions:
- When using methods like `setTimeout`, or event handlers.

Example:
*/

function fetchData(callback) {
  setTimeout(() => {
    const data = { user: 'Alice' };
    callback(data); // Invoking the callback with the fetched data
  }, 1000);
}

// Using a callback function
fetchData((userData) => {
  console.log(userData); // { user: 'Alice' }
});
/*

 Relationship Between Higher-Order Functions and Callback Functions

- Higher-Order Functions often utilize Callback Functions: When you create a higher-order function, you frequently pass callback functions to define the behavior of the higher-order function.
  
Example Combining Both Concepts:
*/
// A higher-order function that accepts a callback
function processNumbers(numbers, callback) {
  return numbers.map(callback);
}

// A callback function that squares a number
const square = (num) => num * num;

const numbers = [1, 2, 3, 4];
const squaredNumbers = processNumbers(numbers, square);

console.log(squaredNumbers); // [1, 4, 9, 16]

/*
 Summary

- Higher-Order Functions: Functions that take other functions as arguments or return them.
- Callback Functions: Functions passed as arguments to be called later.
- Usage: Both concepts are widely used in JavaScript, especially for handling asynchronous operations and working with collections.
*/
