// Problem: remove_element
// Description: Two-pointer problem: remove element
// Test Case 1 — Basic

// Input:
// nums = [3, 2, 2, 3], val = 3
// Output:
// New length = 2
// Array after removal (order doesn't matter):
// [2, 2, _, _]

// Test Case 2 — Remove middle elements
// Input:
// nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2
// Output:
// New length = 5
// Possible resulting array (any order):
// [0, 1, 3, 0, 4, _, _, _]

// Test Case 3 — No occurrence of val
// Input:
// nums = [1, 2, 3], val = 5
// Output:
// New length = 3
// Array unchanged:
// [1, 2, 3]

// Test Case 4 — Remove element at the beginning
// Input:
// nums = [2, 3, 4], val = 2
// Output:
// New length = 2
// Result: [3, 4, _]

// Test Case 5 — Remove element at the end
// Input:
// nums = [3, 4, 2], val = 2
// Output:
// New length = 2
// Result: [3, 4, _]

// Test Case 6 — All elements equal to val
// Input:
// nums = [2, 2, 2, 2], val = 2
// Output:
// New length = 0
// Array after:
// [_, _, _, _]

// Test Case 7 — Only one element
// Case A: matches
// Input:
// nums = [2], val = 2
// Output: 0 → [_]

// Case B: does not match

// Input:
// nums = [2], val = 3
// Output: 1 → [2]

// Test Case 8 — Mixed negatives

// Input:
// nums = [-1, 3, -1, 4], val = -1
// Output:
// New length = 2
// Result: [3, 4, _, _]

// Test Case 9 — Large array pattern

// Input:
// nums = [1,1,1,1,2,3,4], val = 1
// Output:
// New length = 3
// Result: [2, 3, 4, _, _, _, _]

// Test Case 10 — Already empty array

// Input:
// nums = [], val = 1
// Output:
// 0
// Solution:

function removeAllElements(arr, element) {

  if (arr.length === 0) {
    return 0
  }
  let slow= 0;
  for (let fast = 0; fast < arr.length; fast++) {
    if (arr[fast] !== element) {
      arr[slow] = arr[fast]
      slow++
    }
  }

  for(let i=slow; i<arr.length; i++){
    arr[i]= undefined
  }
  console.log(arr)

  return slow
}

nums = [1,1,1,1,2,3,4]

removeAllElements(nums, 1)
