// 1️⃣ Basic containment (core idea)
// {
//   s: "ABC",
//   t: "B",
//   output: "B"
// }


// Why:
// You must find the smallest substring of s that contains all characters of t.

// 2️⃣ Order does NOT matter
// {
//   s: "CBA",
//   t: "ABC",
//   output: "CBA"
// }


// Why:
// Characters can appear in any order. Only frequency matters, not sequence.

// 3️⃣ Exact match
// {
//   s: "ABC",
//   t: "ABC",
//   output: "ABC"
// }


// Why:
// If the whole string already satisfies the requirement, return it.

// 4️⃣ Duplicate characters required
// {
//   s: "AABC",
//   t: "AA",
//   output: "AA"
// }


// Why:
// If t has duplicates, the window must contain them multiple times.

// 5️⃣ Window shrinking (key sliding window insight)
// {
//   s: "ABBC",
//   t: "ABC",
//   output: "BBC"
// }


// Why:
// Even after a valid window is found, you must shrink from the left to get the minimum.

// 6️⃣ No possible answer
// {
//   s: "ABC",
//   t: "D",
//   output: ""
// }


// Why:
// If any character in t does not exist in s, return an empty string.



// Minimum Window Substring — Core Revision Notes
// 1️⃣ Problem Goal
// Find the smallest substring of s that contains all characters of t with correct frequency.

// 2️⃣ Key Observations
// Order does not matter
// Frequency matters
// Case-sensitive (A ≠ a)
// Return "" if no valid window exists

// 3️⃣ Data Structures Used
// need → frequency map of t
// window → frequency map of current window
// required → number of unique chars in t
// formed → number of chars meeting required frequency

// 4️⃣ Sliding Window Rule (MOST IMPORTANT)
// If window is VALID → shrink LEFT
// If window is INVALID → expand RIGHT
// 5️⃣ When Is a Window Valid?
// formed === required
// Meaning every character in t appears in the window with required count.
function minWindowSliding(s, t) {
  // Edge cases: empty strings or impossible match
  if (!s || !t || t.length > s.length) return "";

  // Frequency map for required characters in t
  const need = {};
  for (const ch of t) need[ch] = (need[ch] || 0) + 1;

  // Left pointer of sliding window
  let left = 0;

  // Number of unique characters that have met required frequency
  let formed = 0;

  // Total unique characters needed to form a valid window
  const required = Object.keys(need).length;

  // Frequency map for current window
  const window = {};

  // Track minimum window length and result
  let minLen = Infinity;
  let result = "";

  // Expand window using right pointer
  for (let right = 0; right < s.length; right++) {
    const ch = s[right];

    // Add current character to window frequency
    window[ch] = (window[ch] || 0) + 1;

    // If current character completes its required count
    if (need[ch] && window[ch] === need[ch]) {
      formed++;
    }

    // Try to shrink the window while it's still valid
    while (formed === required) {
      // Update minimum window if smaller valid window found
      if (right - left + 1 < minLen) {
        minLen = right - left + 1;
        result = s.slice(left, right + 1);
      }
      // Remove leftmost character from window
      const leftChar = s[left];
      window[leftChar]--;
      // If removing breaks the required frequency, window is no longer valid
      if (need[leftChar] && window[leftChar] < need[leftChar]) {
        formed--;
      }
      // Move left pointer to shrink window
      left++;
    }
  }

  // Return smallest valid window found
  return result;
}
