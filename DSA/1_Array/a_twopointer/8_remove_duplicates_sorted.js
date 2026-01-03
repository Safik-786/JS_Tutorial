// Problem: remove_duplicates_sorted
// Description: Two-pointer problem: remove duplicates sorted
// Test Case 1 — Basic

// Input:
// [1, 1, 2]
// Output:
// New length = 2
// Array becomes:
// [1, 2, _]

// Test Case 2 — Multiple consecutive duplicates

// Input:
// [0,0,1,1,1,2,2,3,3,4]
// Output:
// New length = 5
// Array becomes:
// [0,1,2,3,4,_,_,_,_,_]

// Test Case 3 — No duplicates

// Input:
// [1,2,3,4,5]
// Output:
// New length = 5
// Array unchanged.

// Test Case 4 — All values identical

// Input:
// [2,2,2,2,2]
// Output:
// New length = 1
// Array becomes:
// [2,_,_,_,_]

// Test Case 5 — Single element

// Input:
// [7]
// Output:
// New length = 1
// Array stays: [7]

// Test Case 6 — Two elements, no duplicates

// Input:
// [3,5]
// Output:
// 2
// Array stays: [3,5]

// Test Case 7 — Two elements, duplicates

// Input:
// [8,8]
// Output:
// 1
// Array becomes: [8,_]

// Test Case 8 — Negative numbers included

// Input:
// [-3,-3,-1,0,0,1]
// Output:
// New length = 4
// Array becomes:
// [-3,-1,0,1,_,_]

// Test Case 9 — Large sorted input pattern

// Input:
// [1,1,2,2,3,3,3,4,5,5]
// Output:
// New length = 5
// Array: [1,2,3,4,5,_,_,_,_,_]

// Test Case 10 — Empty array

// Input:
// []
// Output:
// New length = 0



function removeAllDuplicates(arr) {
  let ans = []
  for (let i = 0; i < arr.length; i++) {
    if (!ans.includes(arr[i])) {
      ans.push(arr[i])
    }
    // ans.push(arr[i])
  }
  console.log(ans)
}

let input = [1, 1, 2, 2, 3, 3, 3, 4, 5, 5]

function removeAllDuplicatesOptimized(array) {
  let ans = []
  ans.push(array[0])
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      ans.push(array[i])
    }
  }
  console.log(ans)
}

function removeDuplicates2Pointer(nums) {
  if (nums.length === 0) return 0;

  let slow = 0;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return [slow + 1, nums.slice(0, slow)];
}


removeAllDuplicates(input)

removeAllDuplicatesOptimized(input)




