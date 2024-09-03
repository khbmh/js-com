const str = 'hello this is me';
const searchChar = 's';
const indexes = []; // Array to store the indexes
let startIndex = 0; // Starting index for search

while (true) {
  // Find the index of the searchChar starting from startIndex
  const index = str.indexOf(searchChar, startIndex);

  // If index is -1, break the loop
  if (index === -1) {
    break;
  }

  // Store the index in the array
  indexes.push(index);


  // Update startIndex to be the next index after the current one
  startIndex = index + 1;
}

console.log(indexes); // Output: [1, 14, 17]




 





/*



explain elaborately:

localeCompare()
Compares two strings in the current locale.


explain elaborately:
console.log(str.match(/o/g)); // ['o', 'o'] (all matches)



explain elaborately:
toLocaleLowerCase()
Returns a string converted to lowercase letters, using the host's locale.



explain elaborately:




explain elaborately:




explain elaborately:




explain elaborately:




explain elaborately:





*/
