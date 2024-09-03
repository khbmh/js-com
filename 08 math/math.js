// console.log(num);
/*
const outcomes = [
  "dot ball", // No runs scored, ball is not hit
  "single", // One run scored
  "double", // Two runs scored
  "triple", // Three runs scored
  "four", // Four runs scored (boundary)
  "six", // Six runs scored (over the boundary)
  "out - bowled", // Batsman is bowled out
  "out - caught", // Batsman is caught
  "out - lbw", // Batsman is out leg before wicket
  "out - run out", // Batsman is run out
  "out - stumped", // Batsman is stumped
  "no ball", // Delivery is a no-ball
  "wide", // Delivery is a wide
  "bye", // Runs scored without the ball hitting the bat
  "leg bye", // Runs scored off the batsman's body
  "dead ball", // Ball is declared dead (no play)
];

while (true) {
  let num = Math.ceil(Math.random() * outcomes.length) - 1;
  console.log(outcomes[num]);
  if (num === outcomes.length - 1) {
    console.log(`got ${outcomes.length}`);
    break;
  }
}


const bull = -8 / 0;

console.log(typeof bull);
console.log(bull);


                                 ==============================
------- calculate sum of to random numbers from 10-20 
                                 ==============================
*/

const num1 = Math.ceil(Math.random() * 10) + 10;
const num2 = Math.ceil(Math.random() * 10) + 10;

const sum = num1 + num2;

console.log(num1, `+`, num2, `=`, sum);

/*
                                 ==============================

------- calculate sum of to random numbers using function with personalized highest and lowest value.

                                 ==============================
*/
function randomSum(lowest = 0, highest = 10) {
  const num1 =
    Math.ceil(Math.random() * (`${highest}` - 1)) +
    (`${highest}` - `${lowest}`);
  const num2 =
    Math.ceil(Math.random() * (`${highest}` - 1)) +
    (`${highest}` - `${lowest}`);

  const sum = num1 + num2;

  console.log(num1, `+`, num2, `=`, sum);
}
