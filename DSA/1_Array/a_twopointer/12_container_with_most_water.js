// Problem: container_with_most_water
// Description: Two-pointer problem: container with most water
// ✅ Test Cases for container_with_most_water
// Test Case 1 — Example Case
// Input:
// [1,8,6,2,5,4,8,3,7]

// Output:
// 49

// Explanation:

// Max area between index 1 (height 8) and index 8 (height 7):
// min(8,7) * (8-1) = 7 * 7 = 49.

// Test Case 2 — Strictly Increasing Heights
// Input:
// [1,2,3,4,5,6,7]

// Output:
// 12

// Explanation:

// Best between height 1 and height 7:
// min(1,7) * 6 = 6 —
// But better between heights 3 & 7:
// min(3,7) * (6-2) = 3 * 4 = 12.

// Test Case 3 — Strictly Decreasing Heights
// Input:
// [7,6,5,4,3,2,1]

// Output:
// 12

// Explanation:

// Same reasoning as increasing.

// Test Case 4 — All Equal Heights
// Input:
// [5,5,5,5,5]

// Output:
// 20

// Explanation:

// min(5,5) * (4) = 20.

// Test Case 5 — Minimum Array Size
// Input:
// [1,1]

// Output:
// 1

// Explanation:

// Only one container possible.

// Test Case 6 — Zeros in Array
// Input:
// [0,2,0,3,0,4]

// Output:
// 6

// Explanation:

// Between 2 and 4:
// min(2,4) * (5-1) = 2 * 4 = 8
// Between 3 and 4:
// min(3,4) * (5-3) = 3 * 2 = 6
// Max = 8
// (You can use whichever convention; from literature, correct output is 8)

// Test Case 7 — Large Variation
// Input:
// [2,3,10,5,7,8,9]

// Output:
// 36

// Explanation:

// Between height 10 and 9:
// min(10,9) * (6-2) = 9 * 4 = 36.

// Test Case 8 — Peaks Only at Edges
// Input:
// [10,1,1,1,10]

// Output:
// 40

// Explanation:

// min(10,10) * 4 = 40.

// Test Case 9 — Multiple Equal Max Areas
// Input:
// [4,3,2,1,4]

// Output:
// 16

// Explanation:

// Leftmost 4 and rightmost 4 create area = 4 * 4 = 16.

// Test Case 10 — Random Heights
// Input:
// [1,3,2,5,25,24,5]

// Output:
// 24

// Explanation:

// Between 25 and 24:
// min(25,24) * (5-4) = 24 * 1 = 24.



function containerWithMaxWaterBruteforce(arr){
    let maxArea= 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            let area= Math.min(arr[i], arr[j]) * (j-i)     // j-i be the width of the container
            maxArea= Math.max(maxArea, area)
            
        }        
    }

    console.log(maxArea)
}


let arr= [1,2,3,4,5,6,7]


containerWithMaxWaterBruteforce(arr)


// logic- use 2 pointer shoft those pointer with lower height, because higher height will not give ypu the maximum result
function containerWithMaxWaterOptimal(arr){
    let left= 0;
    let right= arr.length-1;
    let maxWater= 0
    while (left < right) {
        let area= Math.min(arr[left], arr[right]) * (right-left)
        maxWater= Math.max(area, maxWater)
        if (arr[left] <arr[right]) {
            left ++;
        }else{
            right--;
        }
    }
    console.log(maxWater)
}


let arr2= [1,2,3,4,5,6,7]


containerWithMaxWaterOptimal(arr2)