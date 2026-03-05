// Problem: count_digits
// Description: Recursion problem
// Test Cases:
// Add test cases here
// Solution:
function count_digits(digit) {
  if (digit%10 === digit) {
    return 1
  }

  return count_digits(Math.floor(digit/10)) +1
  // recursive implementation
}
console.log(count_digits(1234767535))