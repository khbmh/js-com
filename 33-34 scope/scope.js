// 'use strict';

function add() {
  a = 5;
  var b = 10;
  var result = a + b;
  return result;
}

console.log(add());
console.log(a);

/*

In JavaScript, "scope" refers to the context in which variables are defined and accessed. Understanding the different types of scope helps you manage variable visibility and lifetime effectively. Here’s a breakdown of the various types of scope:

/* 1. Global Scope
- Definition: Variables defined in the global scope can be accessed anywhere in your code.
- Example: Declaring a variable outside of any function or block.
 */
let globalVar = 'I am global';
function showGlobal() {
  console.log(globalVar); // Accessible here
}

/* 2. Window Scope
- Definition: In a browser environment, the global scope is also the `window` object. Variables declared globally become properties of `window`.
- Example:
 */
var windowVar = 'I am a window property';
console.log(window.windowVar); // Accessible as a property of window

/* 3. Local Scope
- Definition: Variables defined within a function or block are in local scope. They can only be accessed within that function or block.
- Example:
 */
function myFunction() {
  let localVar = 'I am local';
  console.log(localVar); // Accessible here
}
// console.log(localVar); // ReferenceError: localVar is not defined

/* 4. Script Scope
- Definition: In a script (not in any function or block), variables declared with `var` are available throughout the script but not outside of it, while `let` and `const` behave as block-scoped.
- Example:
 */
var scriptVar = 'I am script-scoped';
if (true) {
  let blockVar = 'I am block-scoped';
  console.log(blockVar); // Accessible here
}
// console.log(blockVar); // ReferenceError: blockVar is not defined

/*
Temporal Dead Zone (TDZ)
The Temporal Dead Zone (TDZ) refers to a behavior in JavaScript where variables declared with let and const are in a "dead zone" from the start of the block until the declaration is encountered. During this period, trying to access the variable will result in a ReferenceError.

Example:
*/
console.log(tdzVar); // ReferenceError: Cannot access 'tdzVar' before initialization
let tdzVar = 'I am in the TDZ';
/*
In the above code, tdzVar is in a temporal dead zone from the start of the block until the line where it's declared. Therefore, accessing it before its declaration results in an error.
 */

/* 5. Lexical Scope
- Definition:  uses lexical scoping, meaning that a function's scope is determined by its position in the source code. Inner functions have access to variables of their outer functions.
- Example:
 */
function outerFunction() {
  let outerVar = 'I am outer';
  function innerFunction() {
    console.log(outerVar); // Accessible here
  }
  innerFunction();
}
outerFunction();

/* 6. Block Scope
- Definition: Introduced in ES6 with `let` and `const`, block scope confines variables to the block (defined by `{}`) in which they are declared.
- Example:
 */
if (true) {
  let blockScopedVar = 'I am block scoped';
  console.log(blockScopedVar); // Accessible here
}
// console.log(blockScopedVar); // ReferenceError: blockScopedVar is not defined

/* 7. Module Scope
- Definition: In ES6 modules, each module has its own scope. Variables declared in a module are not available outside unless explicitly exported.
- Example:
 */
// module.js
let moduleVar = 'I am module scoped';
export const exportedVar = 'I can be imported';

// main.js
import { exportedVar } from './module.js';
console.log(exportedVar); // Accessible here
// console.log(moduleVar); // ReferenceError: moduleVar is not defined

/* Summary
Understanding these different scopes allows you to control variable visibility and avoid naming conflicts, making your code cleaner and more maintainable.

*/

/*
`"use strict";` is a directive in JavaScript that enables strict mode, which imposes stricter parsing and error handling on your JavaScript code. This mode helps catch common coding errors and prevents the use of potentially problematic features. Here's a breakdown of what it does and why it can be beneficial:

 Key Features of Strict Mode

1. Eliminates Silent Errors:
   - In strict mode, assignments that would otherwise silently fail throw errors.
javascript*/
('use strict');
x = 3.14; // ReferenceError: x is not defined

/*
2. Prevents Variable Hoisting:
   - Variables must be declared before use. You cannot use undeclared variables.
javascript*/
('use strict');
function example() {
  y = 5; // ReferenceError: y is not defined
}
/*

3. Disallows Duplicate Parameter Names:
   - In strict mode, functions cannot have duplicate parameter names.
javascript*/
('use strict');
function sum(a, a, b) {
  // SyntaxError: Duplicate parameter name not allowed in this context
  return a + a + b;
}

/*
4. Makes `this` Undefined in Functions:
   - In regular functions, `this` refers to the global object. In strict mode, `this` is `undefined` in functions that are not called as methods of an object.
javascript*/
('use strict');
function showThis() {
  console.log(this); // undefined
}
showThis();
/*

5. Prohibits Certain Syntax:
   - Certain syntax that is considered unsafe or ambiguous is not allowed, such as:
     - Using `with` statements.
     - Octal numeric literals (e.g., `012`).
     - Assigning values to read-only properties.

6. Secures `eval`:
   - Code evaluated with `eval` in strict mode does not introduce new variables into the enclosing scope.

 How to Use Strict Mode

Strict mode can be applied in two ways:

1. Globally:
   - Place `"use strict";` at the top of your script.
javascript*/
('use strict');
// All code in this file is strict mode

/*
2. Locally:
   - Place it inside a function to apply strict mode only to that function.
javascript
*/
function myFunction() {
  'use strict';
  // Code here is strict mode
}

/*
 Benefits of Using Strict Mode
- Helps catch common mistakes early in development.
- Enforces better coding practices, leading to cleaner, more reliable code.
- Improves performance in some JavaScript engines, as strict mode can optimize code execution.

 Conclusion
Using `"use strict";` is a good practice in JavaScript development as it helps you write safer and more predictable code. It is especially recommended for larger applications or when working with multiple developers.
*/
