// Example of the ternary operator

// Define a variable to hold a number
let number = 10;

// Use the ternary operator to check if the number is even or odd
let result = number % 2 === 0 ? 'Even' : 'Odd';

// Output the result
console.log(result); // Outputs: 'Even'

/*
Breakdown:
Condition: (number % 2 === 0) checks if the number is even.
True case: 'Even' is the value returned if the condition is true.
False case: 'Odd' is the value returned if the condition is false.
In this example, since number is 10 (which is even), the result is 'Even'.


The ternary operator in JavaScript is a concise way to perform conditional checks and return values based on those checks. It's essentially a shorthand for the if-else statement.

*/

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// -------------------       nested  ternary         --------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

// Define the age variable
const age = 25;

// Use nested ternary operator to determine the category
const category =
  age < 13 ? 'Child' : age < 18 ? 'Teenager' : age < 65 ? 'Adult' : 'Senior';

// Output the result to the console
console.log(category); // Output will be 'Adult' based on the value of age

/*

Breakdown:
age < 13: If true, category is 'Child'.
age < 18: If the first condition is false, this checks if age is less than 18. If true, category is 'Teenager'.
age < 65: If the second condition is false, this checks if age is less than 65. If true, category is 'Adult'.
If none of the above conditions are met, category is 'Senior'.
You can run this code snippet in a JavaScript environment (like a browser console or Node.js) to see how it works with different values of age.

*/

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ------------------       complex  ternary         --------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------

// Define the score variable
const score = 85; // You can change this value to test different scenarios

// Use nested ternary operators to determine the performance category
const performance =
  score >= 90
    ? 'Excellent'
    : score >= 80
    ? 'Good'
    : score >= 70
    ? 'Average'
    : score >= 60
    ? 'Below Average'
    : 'Poor';

// Output the result to the console
console.log(performance); // Output will be 'Good' based on the value of score
