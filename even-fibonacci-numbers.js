// Problem 2 - Even Fibonacci numbers

// Each new term in the Fibonacci sequence is generated by adding the previous two terms.
// By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

// Solution:

function getSumOfEvenFibonacciNumbers() {
  // first 10 terms of fibonacci sequence
  let fib_numbers = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
  let max_fib_value = 4000000;
  let index = fib_numbers.length - 1;
  let next_fib_value = 0;

  do {
    next_fib_value = fib_numbers[index] + fib_numbers[index - 1];
    fib_numbers.push(next_fib_value);
    index++;
  } while (next_fib_value < max_fib_value);

  let even_fib_numbers = fib_numbers.filter((v) => v % 2 === 0);

  return even_fib_numbers.reduce((prev, cur) => prev + cur, 0);
}
