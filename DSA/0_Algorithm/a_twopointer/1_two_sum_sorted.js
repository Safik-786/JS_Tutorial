// Problem: two_sum_sorted
// Description: Two-pointer problem: two sum sorted
// Test Cases:
//
// Input:
// Example input for two_sum_sorted
//
// Output:
// Expected output for two_sum_sorted
//
// Solution:

export  function sorted2Sum(nums, target){
    st= 0
    end= nums.length-1

    nums= nums.sort((a, b)=> a-b)

    while (st < end) {
        sum = nums[st] + nums[end]
        if (sum=== target) {
            return [st, end]
        }
        if (sum > target) {
            end--
        }
        else{
            st++;
        }

    }
    return false
}


console.log(sorted2Sum(nums, target))

