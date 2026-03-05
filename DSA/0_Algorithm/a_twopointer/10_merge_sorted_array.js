// Problem: merge_sorted_array
// Description: Two-pointer problem: merge sorted array
// Test Cases:
//
// Input:
// Example input for merge_sorted_array
//
// Output:
// Expected output for merge_sorted_array
//
function mergeTwoSortedArrays(nums1, nums2) {
  let i = 0;
  let j = 0;
  let merged = [];

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      merged.push(nums1[i]);
      i++;
    } else {
      merged.push(nums2[j]);
      j++;
    }
  }

  // Add remaining elements
  while (i < nums1.length) {
    merged.push(nums1[i]);
    i++;
  }

  while (j < nums2.length) {
    merged.push(nums2[j]);
    j++;
  }

  return merged;
}

