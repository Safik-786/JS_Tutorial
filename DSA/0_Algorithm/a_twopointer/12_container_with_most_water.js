// Problem: container_with_most_water
// Description: Two-pointer problem: container with most water


// Height:   8 3 6 4 8 2 7 1 

        //    |       |       
        //    |       |   |
        //    |   |   |   |
        //    |   |   |   |
        //    |   | | |   |
        //    | | | | |   |
        //    | | | | | | |
        //    | | | | | | | |
        //    8 3 6 4 8 2 7 1 

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


// logic- use 2 pointer shift those pointer with lower height, because higher height will not give ypu the maximum result
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