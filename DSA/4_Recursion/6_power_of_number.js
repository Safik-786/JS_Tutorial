// ✅ Assumptions
// x^n=x*x^(n−1)
function solution(x, n) {
  // Base case
  if (n === 0) {
    return 1;
  }

  // Recursive case
  return x * solution(x, n - 1);
}