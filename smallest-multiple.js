// Problem 5 - Smallest multiple
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

// Solution:

function createRange(start = null, end = null) {
  return Array(end - start + 1).fill().map((_, i) => start + i)
}

function getGreatestCommonDivisor(a, b) {
  return !b ? a : getGreatestCommonDivisor(b, a % b);
}

function getLowestCommonDivisor(a, b) {
  return (a * b) / getGreatestCommonDivisor(a, b);
}

function getSmallestMultiple(min = 1, max = 20) {
  let arr = createRange(min, max);
  let multiple = min;

  arr.forEach((n) => {
    multiple = getLowestCommonDivisor(multiple, n);
  });

  return multiple;
}

getSmallestMultiple(1, 10);
// expect: 2520
getSmallestMultiple(1, 20);
// expect: 232792560