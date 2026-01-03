

function twoSum(nums, target){
    let obj= {}
    for (let i = 0; i < nums.length; i++) {
        let cur= nums[i];
        let compliment= target - cur

        if (obj[compliment] !== undefined) {
            return [i, obj[compliment]]
        }

        obj[cur]= i     // store the current value i.e not found in the map
    }
}

nums = [-1, -2, -3, -4, -5]
target = -8     

console.log(twoSum(nums, target))


