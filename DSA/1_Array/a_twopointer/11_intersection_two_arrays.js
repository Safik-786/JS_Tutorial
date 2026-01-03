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

