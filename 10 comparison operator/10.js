// Equality Operators

let a = 5; // Numeric value 5
let b = "5"; // String value '5'
let c = 10; // Numeric value 10

// == (Equal to) checks if values are equal, with type coercion if necessary
console.log(a == b); // true: '5' is coerced to number 5, so 5 == 5

// === (Strictly Equal to) checks if values are equal and of the same type
console.log(a === b); // false: 5 (number) is not the same type as '5' (string)

// != (Not equal to) checks if values are not equal, with type coercion if necessary
console.log(a != b); // false: '5' is coerced to number 5, so 5 != 5 is false

// !== (Strictly Not Equal to) checks if values are not equal or not of the same type
console.log(a !== b); // true: 5 (number) is not the same type as '5' (string)

// Relational Operators

console.log(a > c); // false: 5 is not greater than 10
console.log(a >= c); // false: 5 is not greater than or equal to 10
console.log(a < c); // true: 5 is less than 10
console.log(a <= c); // true: 5 is less than or equal to 10

// Object Comparison

let obj1 = { a: 1 }; // Object with property a
let obj2 = { a: 1 }; // Different object with the same property a

// === (Strictly Equal to) for objects checks if they reference the same object
console.log(obj1 === obj2); // false: obj1 and obj2 are different objects, even though they have the same properties

// Strict Equality and Coercion

console.log(0 == false); // true: false is coerced to 0, so 0 == 0 is true
console.log(0 === false); // false: 0 (number) is not the same type as false (boolean)

// Additional Edge Cases

console.log("5" == 5); // true: '5' (string) is coerced to number 5, so '5' == 5 is true
console.log("5" === 5); // false: '5' (string) is not the same type as 5 (number)
console.log(null == undefined); // true: null and undefined are considered equal in non-strict comparison
console.log(null === undefined); // false: null and undefined are different types
console.log("" == 0); // true: '' (empty string) is coerced to 0, so '' == 0 is true
console.log("" === 0); // false: '' (string) is not the same type as 0 (number)

/*

Explanation:
Equality Operators:

== checks for equality after type coercion. For example, '5' (string) is coerced to 5 (number) to compare with 5.
=== checks for equality without type coercion, meaning both value and type must be the same.
!= checks for inequality after type coercion. '5' (string) is coerced to 5 (number) to compare with 5.
!== checks for inequality without type coercion. Values or types must be different.
Relational Operators:

> checks if the left value is greater than the right value.
>= checks if the left value is greater than or equal to the right value.
< checks if the left value is less than the right value.
<= checks if the left value is less than or equal to the right value.
Object Comparison:

For objects, arrays, and functions, === compares references, not the content. Even if two objects have the same properties, they are considered different if they are different references.
Strict Equality and Coercion:

Coercion occurs with == where types are converted to make the comparison possible.
=== avoids this by checking both type and value.
Additional Edge Cases:

Comparing null and undefined with == returns true, but with ===, it returns false due to type differences.
Comparing an empty string '' with 0 using == returns true due to coercion, but using === returns false due to type difference.


*/
