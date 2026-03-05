// Problem: reverse_string_recursion
// Description: Recursion problem
// Test Cases:
// Add test cases here
// Solution:
function reverse_string_recursion(str) {
  // Base case
  if (str.length <= 1) {
    return str;
  }

  // Recursive case
  return reverse_string_recursion(str.slice(1)) + str[0];
}

// Test
console.log(reverse_string_recursion("abjhascvhs"));
// Output: shvcsahjba
