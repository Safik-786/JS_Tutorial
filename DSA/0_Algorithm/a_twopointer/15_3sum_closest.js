// Problem: 3sum_closest
// Description: Two-pointer problem: 3sum closest
// 3Sum Closest — Test Cases
// Test Case 1: Basic Positive Numbers

// Input:
// nums = [1, 2, 4, 8, 16], target = 10
// Possible triplets:
// (1,2,4)=7, (1,2,8)=11, (2,4,8)=14 …
// Closest sum: 11
// Output:
// 11

// Test Case 2: Mix of Positive and Negative

// Input:
// nums = [-1, 2, 1, -4], target = 1
// Closest triplet: (-1 + 2 + 1) = 2
// Output:
// 2

// Test Case 3: Exact Match Exists

// Input:
// nums = [0, 1, 2], target = 3
// Triplet (0 + 1 + 2) = 3
// Output:
// 3
//


function solution(nums, target) {
  let closest= Infinity
  let ans=0
  nums.sort((a, b)=> a-b)
  for (let i = 0; i < nums.length-2; i++) {
    let st= i+1;
    let end= nums.length-1;

    while (st < end) {
      let sum = nums[i]+ nums[st]+ nums[end]
      let  difference= Math.abs(target- sum)

      if (difference < closest) {
        closest= difference
        ans= sum
      }
      if (sum < target) {
        st++;
      }
      else{
        end--
      }
    }
  }
  return ans
}

// nums = [1, 2, 4, 8, 16], target = 10

nums = [-1, 2, 1, -4], target = 1
solution(nums, target)

