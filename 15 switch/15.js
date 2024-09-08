// Define a variable with a value
const day = 3;

// Use a switch statement to determine the day of the week
switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Invalid day');
        break;
}

// Output: Wednesday


/*

Explanation:
Expression: The value of the day variable is evaluated in the switch statement.

Cases: Each case represents a possible value of the day variable. When a case matches the value of day, the code inside that case block is executed.

Break: The break statement is used to exit the switch block. Without it, the code would "fall through" and execute all subsequent cases until a break is encountered or the end of the switch block is reached.

Default: The default case is optional. It runs if none of the specified cases match the value of the expression. It’s like the final else in an if-else chain.

This example will print "Wednesday" to the console because the value of day is 3, which matches the third case.

*/