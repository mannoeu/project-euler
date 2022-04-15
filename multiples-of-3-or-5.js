// Problem 1 - Multiples of 3 or 5

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// Solution:
// As the question already gives the multiples of 3 or 5 less than 10, I will start the vector with the multiples and iterate from 10

function getMultiplesOfThreeOrFive() {
  let multiples = [3, 5, 6, 9];

  for (let i = 10; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }

  return multiples.reduce((prev, cur) => prev + cur, 0);
}
