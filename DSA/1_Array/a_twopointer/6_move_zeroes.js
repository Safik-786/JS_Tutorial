// Problem: move_zeroes
// Description: Two-pointer problem: move zeroes
// ✅ Test Cases for move_zeroes
// Test Case 1 — Basic

// Input:
// [0, 1, 0, 3, 12]
// Output:
// [1, 3, 12, 0, 0]

// Test Case 2 — Already no zeroes

// Input:
// [1, 2, 3]
// Output:
// [1, 2, 3]

// Test Case 3 — All zeroes

// Input:
// [0, 0, 0, 0]
// Output:
// [0, 0, 0, 0]

// Test Case 4 — Zeroes at the end

// Input:
// [4, 5, 6, 0, 0]
// Output:
// [4, 5, 6, 0, 0]

// Test Case 5 — Zeroes at the beginning

// Input:
// [0, 0, 1, 2, 3]
// Output:
// [1, 2, 3, 0, 0]

// Test Case 6 — Random mixed values

// Input:
// [0, 7, 0, 8, 0, 9]
// Output:
// [7, 8, 9, 0, 0, 0]

// Test Case 7 — Single element (0)

// Input:
// [0]
// Output:
// [0]

// Test Case 8 — Single element (non-zero)

// Input:
// [5]
// Output:
// [5]

// Test Case 9 — Negative numbers

// Input:
// [0, -1, 0, -2, 3]
// Output:
// [-1, -2, 3, 0, 0]

// Test Case 10 — Large input

// Input:
// [1, 0, 2, 0, 3, 0, 4, 0]
// Output:
// [1, 2, 3, 4, 0, 0, 0, 0]


function moveZeroes(nums) {
  let slow = 0;

  for (let fast = 0; fast < nums.length; fast++) {
    if (nums[fast] !== 0) {
      [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
      slow++;
    }
  }
  return nums;
}

