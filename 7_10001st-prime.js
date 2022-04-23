// Problem 7 - 10001st prime
// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

// Solution:

function isPrimeNumber(n = 2) {
  let i = 2, is_prime = true, sqroot = Math.floor(Math.sqrt(n));

  while (i <= sqroot) {
    if (n % i === 0) {
      is_prime = false;
      break;
    }
    i++;
  }

  return is_prime;
}

function getPrimeNumberInThePosition(index) {
  let arr = [], i = 2;

  do {
    if (isPrimeNumber(i)) {
      arr.push(i);
    }
    i++;
  } while (arr.length < index);

  return arr[arr.length - 1];
}

getPrimeNumberInThePosition(10001);
// expect: 104743