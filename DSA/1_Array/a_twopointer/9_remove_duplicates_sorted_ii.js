// Problem: remove_duplicates_sorted_ii
// Test Case 1 — Basic Case

// Input:
// [1,1,1,2,2,3]
// Output:
// New length = 5
// Array becomes (any valid in-place result):
// [1,1,2,2,3,_,_]

// Test Case 2 — No element appears more than twice

// Input:
// [1,1,2,2,3,3]
// Output:
// New length = 6
// Array unchanged.

// Test Case 3 — Every element appears more than twice

// Input:
// [0,0,0,0,0]
// Output:
// New length = 2
// Array becomes:
// [0,0,_,_,_]

// Test Case 4 — Mixed duplicates

// Input:
// [1,1,1,1,2,3,3,3]
// Output:
// New length = 5
// Array becomes:
// [1,1,2,3,3,_,_,_]

// Test Case 5 — No duplicates at all

// Input:
// [1,2,3,4,5]
// Output:
// New length = 5
// Array stays same.

// Test Case 6 — Exactly two of each

// Input:
// [2,2,3,3,4,4]
// Output:
// 6
// (unchanged)

// Test Case 7 — Single element

// Input:
// [9]
// Output:
// 1

// Test Case 8 — Two elements same

// Input:
// [7,7]
// Output:
// 2

// Test Case 9 — Two elements different

// Input:
// [5,6]
// Output:
// 2

// Test Case 10 — Negative numbers

// Input:
// [-1,-1,-1,-2,-2,3]
// Output:
// New length = 4
// Result:
// [-1,-1,-2,-2,_,_]



function removeDuplicatesSortedII(nums) {
  if (nums.length <= 2) return nums; // return entire array

  let slow = 2; 

  for (let fast = 2; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 2]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  // return only the part that is valid
  return nums.slice(0, slow);
}


