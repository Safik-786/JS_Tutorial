function removeDuplicates(arr) {
    let freq = {};   // hash map (like frequency table)
    let unique = [];
    let repeat= []
    for (let i = 0; i < arr.length; i++) {
        // if (!freq[arr[i]]) {
        //   freq[arr[i]] = 1;
        //   unique.push(arr[i]);
        // }
        if (freq[arr[i]] === undefined) {   // if we haven’t seen this number before
            freq[arr[i]] = 1;              // mark it as seen
            unique.push(arr[i]);              // save it in the unique array
        }
        repeat.push(arr[i])
    }
    return unique;
}

const arr = [1, 2, 3, 1, 2, 4];
console.log(removeDuplicates(arr)); // [1, 2, 3, 4]
