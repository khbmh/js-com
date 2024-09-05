// let check = [-1, false, true, ` `, `z`];
let check = [-1, 0, -0, 1, null, undefined, ``, NaN, false, true, ` `, `z`];

for (var i = 0; i < check.length; i++) {
  // console.log(check[i], `is:`, Boolean(check[i]));
  console.log(check[i], `is:`, !!check[i]);
}

// Output:
/*

-1 is: true
0 is: false
-0 is: false
1 is: true
null is: false
undefined is: false
 is: false           // empty string
NaN is: false
false is: false    // boolean
true is: true     // boolean
  is: true       // space string
z is: true      // string

*/