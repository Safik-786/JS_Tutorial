// Problem: palindrome_check_recursion
// Description: Recursion problem
// Test Cases:
// Add test cases here
// Solution:
function palindrome_check_recursion(str, start=0, end=str.length-1) {

  if (start >= end) {
    return true
  }
  if(str[start] !== str[end]) {
    return false
  }

  return palindrome_check_recursion(str, start+1, end-1)
  // recursive implementation
}

console.log(palindrome_check_recursion("aba"))