// Define variables
let age = 22;
let hasID = true;

// Basic if-else
if (age >= 18) {
  console.log("You are an adult.");

  // Nested if-else
  if (hasID) {
    console.log("You have an ID.");
  } else {
    console.log("You don't have an ID.");
  }
} else {
  console.log("You are a minor.");
}

/*

Explanation:
Basic if-else:

The outer if checks if age is 18 or older.
If true, it logs "You are an adult."
If false, it skips the nested if-else and logs "You are a minor."
Nested if-else:

Inside the first if block (when age >= 18), another if-else is used to check if hasID is true.
If true, it logs "You have an ID."
If false, it logs "You don't have an ID."
This combined code snippet handles both basic and nested conditional logic in a clear and organized way.

*/
