// while loop
let i = 0;
console.log('while loop:');
while (i < 5) {
  console.log(i);
  i++;
}

// for loop
console.log('\nfor loop:');
for (let j = 0; j < 5; j++) {
  console.log(j);
}

// do while loop
let k = 0;
console.log('\ndo while loop:');
do {
  console.log(k);
  k++;
} while (k < 5);

/*

Explanation
while Loop:

Starts with i = 0.
Prints the value of i.
Increments i by 1 in each iteration.
Stops when i is no longer less than 5.
for Loop:

Initializes j to 0.
Prints the value of j.
Increments j by 1 in each iteration.
Stops when j is no longer less than 5.
do while Loop:

Starts with k = 0.
Prints the value of k.
Increments k by 1 in each iteration.
Checks the condition after printing; continues as long as k is less than 5.
Each loop type will produce the same output:

arduino
Copy code
while loop:
0
1
2
3
4

for loop:
0
1
2
3
4

do while loop:
0
1
2
3
4
This code snippet shows how each loop type iterates through the same range of numbers, demonstrating their functionality and differences.






*/
