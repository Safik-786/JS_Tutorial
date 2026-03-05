// 1. Basic Functionality
// {
//   input: { s: "araaci", k: 2 },
//   output: 4,
//   explanation: "Substring 'araa' has 2 distinct characters"
// }

// {
//   input: { s: "araaci", k: 1 },
//   output: 2,
//   explanation: "Substring 'aa'"
// }

// {
//   input: { s: "cbbebi", k: 3 },
//   output: 5,
//   explanation: "Substring 'cbbeb' or 'bbebi'"
// }



function lskd_bruteforce(s, k) {
  let maxlength = 0
  for (let i = 0; i < s.length; i++) {
    let map = new Map()
    for (let j = i; j < s.length; j++) {
      map.set(s[j], (map.get(s[j]) || 0) + 1)
      if (map.size > k) {
        break;
      }
      maxlength = Math.max(maxlength, j - i + 1)
    }
  }

  // We can use Set DS as well
  // for (let i = 0; i < s.length; i++) {
  //   let set = new Set()
  //   for (let j = i; j < s.length; j++) {
  //     set.add(s[j])
  //     if (set.size > k) break
  //     maxlength = Math.max(maxlength, j - i + 1)
  //   }
  // }

  console.log(maxlength)
}

// lskd_bruteforce("araaaci", 2)

function longest_substring_k_distinct_sliding_window(s, k) {
  let set = new Set()
  let start = 0;
  let end = 0;
  let maxlength = 0;
  while (end < s.length) {
    if (end - start + 1 < k) {
      set.add(s[end])
      end++;
    }
    else if (set.size === k) {
      maxlength = Math.max(maxlength, end - start + 1);
      end++;
    }
    else{
      end++;
      start ++
    }
  }
  console.log(maxlength)
}



// function longest_substring_k_distinct_sliding_window(s, k) {
//     let freq = new Map()
//     let start = 0
//     let maxLength = 0

//     for (let end = 0; end < s.length; end++) {
//         freq.set(s[end], (freq.get(s[end]) || 0) + 1)

//         while (freq.size > k) {
//             freq.set(s[start], freq.get(s[start]) - 1)
//             if (freq.get(s[start]) === 0) {
//                 freq.delete(s[start])
//             }
//             start++
//         }

//         maxLength = Math.max(maxLength, end - start + 1)
//     }

//     return maxLength
// }


longest_substring_k_distinct_sliding_window("araaaci", 2)
