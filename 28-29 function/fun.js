

// Function Declaration   ==== Hoisted (can be called before declaration)
function greet(name) {
  console.log('Hello, ' + name + '!');
}

// Function Expression   ==== Not Hoisted
const add = function (a, b) {
  return a + b;
};

// Arrow Function
const multiply = (x, y) => x * y;

// Using the functions
greet('Alice'); // Output: Hello, Alice!

let sum = add(5, 3);
console.log('Sum:', sum); // Output: Sum: 8

let product = multiply(4, 5);
console.log('Product:', product); // Output: Product: 20

/*
Explanation:

Function Declaration: greet is a named function that takes a name parameter and prints a greeting message.

Function Expression: add is an anonymous function assigned to a constant that takes two parameters and returns their sum.

Arrow Function: multiply is a concise function that takes two parameters and returns their product.

Each function is then called with appropriate arguments, and the results are logged to the console.
*/
