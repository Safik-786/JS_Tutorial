// Problem: reverse_vowels
// Description: Two-pointer problem: reverse vowels
// ✅ Test Cases for reverse_vowels
// Test Case 1 (Basic)

// Input:
// "hello"
// Output:
// "holle"
// Explanation:
// Vowels e and o get swapped.

// Test Case 2 (Word with multiple vowels repeating)
// Input:
// "leetcode"
// Output:
// "leotcede"

// Test Case 3 (No vowels present)
// Input:
// "rhythm"
// Output:
// "rhythm"

// Test Case 4 (String already palindrome)
// Input:
// "aba"
// Output:
// "aba"

// Test Case 5 (Uppercase + lowercase mix)
// Input:
// "hEllO"
// Output:
// "hOllE"

// Test Case 6 (All vowels)
// Input:
// "aeiou"
// Output:
// "uoiea"

// Test Case 7 (Single character only)
// Input:
// "a"
// Output:
// "a"

// Test Case 8 (String with spaces)
// Input:
// "a b c e"
// Output:
// "e b c a"

// Test Case 9 (Vowels at edges)
// Input:
// "apple"
// Output:
// "eppla"

// Test Case 10 (Long string stress test)
// Input:
// "programmingisawesome"
// Output:
// "programmingosewisame"

// (Full reverse of vowels only.)

let isVowel = (char) => {
  let vowels = "aeiouAEIOU";
  return vowels.includes(char);
}

function solution(str) {
  // Two-pointer solution for reverse_vowels

  let leftptr = 0
  let rightptr = str.lenght - 1
  while (leftptr < rightptr) {
    if (!isVowel(leftptr)) {
      leftptr++;
      continue;
    }
    if (!isVowel(rightptr)) {
      rightptr--;
      continue;
    }
    let temp = leftptr;
    leftptr = rightptr;
    rightptr = temp;
    leftptr++;
    rightptr--;

  }
  return true;
}
