// Problem 4 - Largest palindrome product

// A palindromic number reads the same both ways. The largest palindrome made 
// from the product of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers.

// Solution:

function getNumberPalindrome(n = 0) {
  return Number(String(n).split("").reverse().join(""))
}

function getLargestPalindromeOfProductOfTwoThreeDigitNumbers() {
  let largest_palindrome_found = 0;
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      let current_product = i * j;
      let palindromic = getNumberPalindrome(current_product);
      if (palindromic === current_product) {
        if (current_product > largest_palindrome_found) {
          largest_palindrome_found = current_product;
        }
      }
    }
  }
  return largest_palindrome_found;
}

getLargestPalindromeOfProductOfTwoThreeDigitNumbers();
// expect: 906609