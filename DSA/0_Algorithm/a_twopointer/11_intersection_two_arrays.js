// Problem: intersection_two_arrays
// Description: Two-pointer problem: intersection two arrays
// Test Cases:
//
// Input:
// Example input for intersection_two_arrays
//
// Output:
// Expected output for intersection_two_arrays
//
// Solution:
function intersectionFrequency(nums1, nums2) {
  let freq = {};
  let result = [];

  for (let n of nums1) freq[n] = true;

  for (let n of nums2) {
    if (freq[n]) {
      result.push(n);
      freq[n] = false; // avoid duplicate entries
    }
  }

  return result;
}

// Using 2 pointer
// 🔹 When to Use Two Pointers

// Arrays are already sorted
// OR

// You are allowed to sort first


function intersectionTwoPointers(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let result = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      // Avoid duplicates in result
      if (result.length === 0 || result[result.length - 1] !== nums1[i]) {
        result.push(nums1[i]);
      }
      i++;
      j++;
    } 
    else if (nums1[i] < nums2[j]) {
      i++;
    } 
    else {
      j++;
    }
  }

  return result;
}

