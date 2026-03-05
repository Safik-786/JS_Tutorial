
// Input: [100, 4, 200, 1, 3, 2]
// Output: 4
// Explanation: [1, 2, 3, 4]

function includes(nums, items) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === items) {
            return true
        }
    }
    return false
}


function longestConsecutive(nums) {
    let longest = 0;

    for (let i = 0; i < nums.length; i++) {
        let current = nums[i];
        let count = 1;

        // Check for consecutive numbers
        while (includes(nums, current + 1)) {
            current++;
            count++;
        }

        longest = Math.max(longest, count);
    }

    return longest;
}



function longestConsecutiveSet(nums) {
    const set = new Set(nums)
    let longest = 0

    for (let num of set) {
        if (!set.has(num - 1)) {
            let current = num
            let length = 1

            while (set.has(current + 1)) {
                current++
                length++
            }

            longest = Math.max(longest, length)
        }
    }
    return longest
}



function longestConsecutiveSorted(nums) {
    if (nums.length === 0) return 0

    nums.sort((a, b) => a - b)

    let longest = 1
    let current = 1

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue
        if (nums[i] === nums[i - 1] + 1) {
            current++
        } else {
            current = 1
        }
        longest = Math.max(longest, current)
    }

    return longest
}



let longestConsecutiveBastCase