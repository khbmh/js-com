/*
var is hoisted; 
but let and const is not hoisted, they are put in temporal dead zone.

------

function declaration is hoisted 
but function expression is not hoisted. 
though both are function definitions.
*/

// =================================================================

//  Example 1: Variable Declaration Hoisting

console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
/*

Explanation:
- The variable declaration `var x;` is hoisted to the top, so `console.log(x)` outputs `undefined` before the assignment `x = 5` is executed.
*/
//  Example 2: Function Declaration Hoisting

greet(); // Output: Hello, World!

function greet() {
  console.log('Hello, World!');
}
/*

Explanation:
- The entire `greet` function is hoisted, so you can call `greet()` before its actual declaration in the code.
*/
//  Example 3: Variable Declaration with `let` and `const` Hoisting

console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 20;
/*

Explanation:
- With `let` and `const`, the variables are hoisted but remain in a “temporal dead zone” until they are declared. Accessing them before the declaration results in a ReferenceError.
*/
//  Example 4: Function Expression Hoisting

console.log(myFunc); // Output: undefined
myFunc(); // TypeError: myFunc is not a function

var myFunc = function () {
  console.log('Function expression');
};
/*

Explanation:
- The variable declaration `var myFunc;` is hoisted, but the function assignment is not. Therefore, `myFunc` is `undefined` at the time of the `console.log` and calling it results in an error.
*/
//  Example 5: Class Declaration Hoisting

const instance = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization

class MyClass {
  constructor() {
    console.log('MyClass instance created');
  }
}
/*

Explanation:
- Class declarations are hoisted but cannot be accessed before their declaration, resulting in a ReferenceError.
*/

//  Example 6: Function Expression with `let`

console.log(myFunction); // undefined
myFunction(); // TypeError: myFunction is not a function

let myFunction = function () {
  console.log('Function expression with let');
};
/*

Explanation:
- Like other `let` declarations, the variable is hoisted but remains in the temporal dead zone until its declaration is encountered. Accessing it before initialization results in a ReferenceError.

// These examples illustrate the different behaviors of hoisting with variable declarations, function declarations, function expressions, and class declarations. Understanding these nuances helps in writing predictable and bug-free JavaScript code.
*/
