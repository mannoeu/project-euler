// Problem 6 - Sum square difference
// The sum of the squares of the first ten natural numbers is 1^2 + 2^2 + ... + 10^2 = 385
// The square of the sum of the first ten natural numbers is (1 + 2 + ... + 10)^2 = 55^2 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

// Solution

function getSumOfTheSquares(start = 1, end = 100, exponent = 2) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += Math.pow(i, exponent);
  }
  return sum;
}

function getSquaresOfTheSum(start = 1, end = 100, exponent = 2) {
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return Math.pow(sum, exponent);
}

function getDifferenceOfSquareOfTheSumAndSumOfTheSquares(...args) {
  const squareOfTheSum = getSquaresOfTheSum(...args);
  const sumOfTheSquares = getSumOfTheSquares(...args);
  return squareOfTheSum - sumOfTheSquares;
}

getDifferenceOfSquareOfTheSumAndSumOfTheSquares();
// expect: 25164150
