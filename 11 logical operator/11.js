/*
**   && ---- both have to be true ----

**   || ---- at least one has to be true ----

**   !  ---- alters the result ----
*/

console.log(true && true); // true

console.log(true && false); // false

console.log(false && true); // false

console.log(false && false); // false

console.log(true || true); // true

console.log(true || false); // true

console.log(false || true); // true

console.log(false || false); // false

console.log(!true); // false

console.log(!false); // true

console.log(!!true); // true

console.log(!!false); // false

console.log(!!""); // false

console.log(!!"hello"); // true

console.log(!!1); // true

console.log(!!0); // false

console.log(!!null); // false

console.log(!!undefined); // false

console.log(!!{}); // true

console.log(!![]); // true

console.log(!!"0"); // true

console.log(!!"1"); // true

console.log(!!"hello world"); // true

console.log(!!NaN); // false

console.log(!!Infinity); // true

console.log(!!-Infinity); // true

console.log(!!"123abc"); // false

console.log(!!"abc123"); // false

console.log(!!"123"); // true

console.log(!!"abc"); // true

console.log(!!" "); // true

console.log(!!"  abc  "); // true

console.log(!!"   "); // true

console.log(!!"   abc   "); // true

console.log(!!"  123   "); // true

console.log(null && `hello`); // null

console.log(null || `hello`); // hello

console.log(4 && `hello`); // hello

console.log(4 || `hello`); // 4

let head = console.log(`hello`);

console.log(head);
