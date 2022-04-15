// Problem 3 - Largest prime factor

// The prime factors of 13195 are 5, 7, 13 and 29.
// What is the largest prime factor of the number 600851475143 ?

// Solution:

function getLargestPrimeFactorOfNumber(num = 1) {
  let prime_factors = [];

  for (let i = 1; i <= num; i++) {
    if ([...prime_factors, i].reduce((prev, cur) => prev * cur, 1) <= num) {
      if (num % i == 0) {
        prime_factors.push(i);
      }
    } else {
      break;
    }
  }

  return prime_factors[prime_factors.length - 1];
}

getLargestPrimeFactorOfNumber(13195);
// expect: 29
getLargestPrimeFactorOfNumber(600851475143);
// expect: 6857