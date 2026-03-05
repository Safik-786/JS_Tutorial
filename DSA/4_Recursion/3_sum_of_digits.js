// sum_of_digits(0)        // 0
// sum_of_digits(5)        // 5
// sum_of_digits(12)       // 3   (1 + 2)
// sum_of_digits(123)      // 6   (1 + 2 + 3)
// sum_of_digits(999)      // 27
function sum_of_digits(n) {
  // Base case
  if (n === 0) {
    return 0;
  }

  // Recursive case
  return (n % 10) + sum_of_digits(Math.floor(n / 10));
}

// Test
console.log(sum_of_digits(123)); // 6
