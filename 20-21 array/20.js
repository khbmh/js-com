/*
explain these js array methods:
___
Array length
Array toString()
Array at()
Array join()
Array pop()
Array push()
Search Methods
Sort Methods
Iteration Methods	Array shift()
Array unshift()
Array delete()
Array concat()
Array copyWithin()
Array flat()
Array splice()
Array toSpliced()
Array slice()
*/

const numbers = [4, 2, 1, 32, 102, 231, 89, 232, 88, 64];

const newNum = numbers.slice(3, 7);

let sorted = numbers.sort(function (a, b) {
  return b - a;
});

console.log(newNum);
