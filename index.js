let array = [1, 2, 5, 7, 9, 4, 0];
let arr = [4, 6, 7, 8, 3, 2];
function mergeArr(array, arr) {
    for (let i = 0; i < arr.length; i++) {
        array.push(arr[i]);
    }
    return array;
}

console.log(mergeArr(array, arr));
document.write("Merge Two array:" + array);