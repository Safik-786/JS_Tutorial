// Problem: trapping_rain_water
// Description: Two-pointer problem: trapping rain water
// ✅ Core Idea- find the water at each bar and sum them 

// For every index i:
// Find leftMax → highest bar from 0 to i
// Find rightMax → highest bar from i to n−1
// Water at i = min(leftMax, rightMax) - height[i]
// Sum this for all indices.


function trapping_rain_water_bruteforce(arr) {

}


function trapping_rain_water_prefix_array(arr) {
  // Fint the array which gives the leftmax(current index value depends on the previous and current)
  let leftMaxArr = []
  leftMaxArr[0] = arr[0]
  for (let i = 1; i < arr.length; i++) {
    leftMaxArr[i] = Math.max(leftMaxArr[i - 1], arr[i])
  }
  // Fint the array which gives the rightmax from the right side(current index value depends on the previous and current)
  let rightMaxArr = []
  rightMaxArr[arr.length - 1] = arr[arr.length - 1]
  for (let j = arr.length - 2; j >= 0; j--) {
    rightMaxArr[j] = Math.max(rightMaxArr[j + 1], arr[j])

  }

  console.log(leftMaxArr)
  console.log(rightMaxArr)


  // calculate the trapping rainwater from the these 2 pefix array
  let totalWater = 0
  for (let k = 0; k < arr.length; k++) {
    let waterAtEachBar = Math.min(leftMaxArr[k], rightMaxArr[k]) - arr[k]
    totalWater += waterAtEachBar
  }
  console.log(totalWater);
}
let arr = [4, 2, 3, 4, 5, 6, 7]
trapping_rain_water_prefix_array(arr)



function trapping_rain_water_2_pointer(arr) {
  let left = 0
  let right = arr.length - 1
  let ans = 0
  let leftMax = 0
  let rightMax = 0
  while (left < right) {
    leftMax = Math.max(leftMax, arr[left])
    rightMax = Math.max(rightMax, arr[right])
    if (leftMax < rightMax) {
      ans += leftMax - arr[left]
      left++
    }
    else {
      ans += rightMax - arr[right]
      right--
    }
  }
  return ans
}


