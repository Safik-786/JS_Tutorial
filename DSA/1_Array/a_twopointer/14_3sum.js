// Problem: 3sum
// Description: Two-pointer problem: 3sum
// 🧪 Test Cases for 3SUM
// 1️⃣ Basic Example
// Input:
// nums = [-1, 0, 1, 2, -1, -4]
// Output:
// [ 
//   [-1, -1, 1],
//   [-1, 0, 1]
// ]
// Explanation:
// All triplets that sum to 0.


function solution(nums) {
  let ans= []
  let sum =0
  nums.sort((a, b)=> a-b)

  console.log(nums)
  for (let i = 0; i < nums.length-2; i++) {
    let left= i+1
    let right= nums.length -1

    while (left < right) {
      sum= nums[left] + nums[right] + nums[i]
      if (sum === 0 ) {
        ans.push([nums[i], nums[left], nums[right]])
        left++
        right--
      }
      else if (sum > 0) {
        right --
      }else{
        left++
      }
    }

  }
  console.log(ans)
}

nums = [-1, 0, 1, 2, -1, -4]
solution(nums)