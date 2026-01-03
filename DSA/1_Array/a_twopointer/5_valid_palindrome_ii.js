// Problem: valid_palindrome_ii
// Test Case 1 — Basic valid palindrome after 1 deletion
// Input:
// "abca"
// Output:
// true
// Explanation:
// Delete 'b' → "aca" (palindrome)

// Test Case 2 — Already a palindrome
// Input:
// "racecar"
// Output:
// true

// Test Case 3 — Only 1 deletion needed in the middle
// Input:
// "deeee"
// Output:
// true
// Explanation:
// Removing "d" makes "eeee"

// Test Case 4 — Not possible even after 1 deletion
// Input:
// "abc"
// Output:
// false

// Test Case 5 — Mismatch near edges
// Input:
// "cbbcc"
// Output:
// true
// Explanation:
// Delete 'b' at index 1 → "cbcc" is palindrome.

// Test Case 6 — Long alternating mismatch
// Input:
// "abcdefgfedcbaa"
// Output:
// true
// Explanation:
// Delete one 'a'.

// Test Case 7 — Valid after deleting last character
// Input:
// "abccd"
// Output:
// true
// Explanation:
// Delete 'd' → "abcc" (not palindrome),
// But if delete 'a' → "bccd" (also not),
// Correct analysis → delete 'b'?
// Actually correct output true because delete 'd' → "abcc" → reverse = "ccba" → not same?
// Let’s provide a correct example instead:
// Updated Valid Example:
// Input:
// "abca"
// Already given above.
// Let’s replace Test Case 7 with a correct one:

// Test Case 7 — Valid only after removing one side mismatch
// Input:
// "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhoo xfuu puclmgmqfvnbgtapekouga"
// (This is the famous LeetCode hard test.)
// Output:
// true

// Test Case 8 — Single-character string
// Input:
// "a"
// Output:
// true

// Test Case 9 — Two-character mismatch
// Input:
// "ab"
// Output:
// true
// Explanation:
// Delete either 'a' or 'b' → "a" or "b"

// Test Case 10 — Unicode & punctuation ignored (if problem states alphanumeric only)
// Input:
// "a?bca"
// Output:
// true
// Explanation:
// Ignore punctuation → "abca" → same as test #1


function isPallindrome(str, i, j) {
  while (i < j) {
    if (str[i] !== str[j]) {
      return false
    }
    i++; j--;
  }
  return true
}
function isValidPallindrome(str) {
  let i = 0
  let j = str.length -1

  while (i < j) {
    if (str[i] !== str[j]) {
      return isPallindrome(str, i+1, j) || isPallindrome(str, i, j-1 )
    }
    i++, j--;
  }
  return true
}


let str = "abbkka"
console.log(isValidPallindrome(str))


// console.log(isPallindrome("abja", 0, 2))

// console.log(isPallindrome("racecar"))
// console.log(str.slice(1))