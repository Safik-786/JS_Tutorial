function sort(arr, compareFn) {
    if (typeof compareFn !== "function") {
        compareFn = (a, b) => String(a).localeCompare(String(b));
    }

    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (compareFn(arr[j], arr[j + 1]) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}


sort([4, 1, 3, 2], (a, b) => a - b);
// [1, 2, 3, 4]





























Array.prototype.mySort = function (compareFn) {
    if (typeof compareFn !== "function") {
        compareFn = (a, b) => String(a).localeCompare(String(b));
    }

    let arr = this;
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (compareFn(arr[j], arr[j + 1]) > 0) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
};




// 3. Visualizing ASCENDING sort
// Comparator
// (a, b) => a - b

// Example array
// [4, 1]

// Step-by-step
// a = 4
// b = 1
// a - b = 3   // positive


// Interpretation:

// 4 should come AFTER 1


// So:

// compareFn(4, 1) > 0  // true → swap


// Result:

// [1, 4]


// ✔ Smaller numbers move LEFT
// ✔ Larger numbers move RIGHT

// That’s ascending.

// 4. Visualizing DESCENDING sort
// Comparator
// (a, b) => b - a

// Same array
// [4, 1]

// Step-by-step
// a = 4
// b = 1
// b - a = -3   // negative


// Interpretation:

// 4 should come BEFORE 1


// So:

// compareFn(4, 1) > 0  // false → no swap


// Result stays:

// [4, 1]


// ✔ Larger numbers stay LEFT
// ✔ Smaller numbers move RIGHT

// That’s descending.