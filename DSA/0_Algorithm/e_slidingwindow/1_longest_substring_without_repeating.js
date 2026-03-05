// ✅ Core Test Cases
// // Basic functionality
// ("abcabcbb") → 3   // "abc"
// ("bbbbb")    → 1   // "b"
// ("pwwkew")   → 3   // "wke"
// ("dvdf")     → 3   // "vdf"

// ✅ Edge Cases
// ("")         → 0   // empty string
// ("a")        → 1   // single character
// ("aa")       → 1   // repeated single character
// ("ab")       → 2   // all unique

// ✅ Mixed Character Patterns
// ("abba")     → 2   // "ab" or "ba"
// ("tmmzuxt")  → 5   // "mzuxt"
// ("anviaj")   → 5   // "nviaj"
// ("abcdef")  → 6   // all unique

// inshort find a "SUBSTRING" without repeating characters


function lswr_bruteforce(str) {
  // approach step-1. 

  let store = new Map()
  let maxLength = 0
  for (let i = 0; i < str.length; i++) {
    let countSubstr = 0;
    for (let j = i; j < str.length; j++) {
      if (store.has(str[j])) {
        break;
      }
      store.set(str[j], true)
      countSubstr += 1
      maxLength = Math.max(maxLength, countSubstr)
    }
  }

  console.log(maxLength)
}

lswr_bruteforce("abcabcbb")






// Sliding window 
// Initialize Set, left = 0
// For each character(right):
//   While duplicate exists:  // (untill duplicate exist move the left pointer and delete the items form the set)
//     Remove from left
//     Move left
//   Add current character
// //   Update max length

// function lswr_optimalApproach(str) {
//   let set = new Set();
//   let left = 0;
//   let maxLength = 0;

//   for (let right = 0; right < str.length; right++) {
//     while (set.has(str[right])) {
//       set.delete(str[left]);
//       left++;
//     }

//     set.add(str[right]);
//     maxLength = Math.max(maxLength, right - left + 1);
//   }

//   console.log(maxLength);
// }

// lswr_removeApproach("pwwkewxpw"); // 3



function lswr_optimalApproach(s) {
  let set = new Set()
  let left =0
  let maxlength= 0
  for (let right= 0 ; right <s.length; right++){
    while (set.has(s[right])) {
      set.remove(set[left])
      left++
    }
    set.add(s[right])
    maxlength= Math.max(maxlength, right- left +1)
  }
}
