let arr= [1, 32, 3, 4, 6]

let reverse=(arr, st, end)=>{
    while (st <= end) {
        // swap(st, end)        
        temp= arr[st]
        arr[st]= arr[end]
        arr[end]= temp

        st++;
        end--;
    }
}

reverse(arr,2, 4)
console.log(arr)