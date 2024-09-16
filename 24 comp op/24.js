// Initial balance
let balance = 1000;
console.log('Initial balance:', balance); // Output: 1000

// Depositing money
balance += 500; // Adds 500 to the balance
console.log('After deposit:', balance); // Output: 1500

// Withdrawing money
balance -= 200; // Subtracts 200 from the balance
console.log('After withdrawal:', balance); // Output: 1300

// Applying interest
balance *= 1.05; // Increases balance by 5%
console.log('After interest:', balance); // Output: 1365

// Calculating tax adjustment
balance /= 1.1; // Adjusts balance after 10% tax
console.log('After tax adjustment:', balance); // Output: 1240.9090909090908

// Calculating remainder after rounding
balance %= 100; // Gets the remainder after dividing by 100
console.log('Remaining balance:', balance); // Output: 40.9090909090908

/*
Initial Balance: Starts with an initial balance of 1000.
Deposit: Adds 500 to the balance.
Withdrawal: Subtracts 200 from the balance.
Interest: Applies a 5% interest rate to the balance.
Tax Adjustment: Divides the balance by 1.1 to account for a 10% tax adjustment.
Remainder: Calculates the remainder when the balance is divided by 100.
This code snippet effectively uses compound operators (+=, -=, *=, /=, %=) to perform various operations on the balance variable.
*/
