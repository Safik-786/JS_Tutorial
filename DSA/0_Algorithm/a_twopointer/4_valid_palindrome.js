// Problem: valid_palindrome
// Description: Two-pointer problem: valid palindrome
// Test Cases:
//
// Input:
// Example input for valid_palindrome
//
// Output:
// Expected output for valid_palindrome
//
// Solution:


 function isPallindrome(str, i, j) {
  while (i < j) {
    if (str[i] !== str[j]) {
      return false
    }
    i++; j--;
  }
  return true
}

