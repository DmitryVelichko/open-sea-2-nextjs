let count = 1;
function recursiveFn() {
    console.log(`Recursive ${count}`);
    if (count === 10) return;
    count++;
    recursiveFn();
}

recursiveFn();

function oddArray(arr) {
    let result = [];
    function helperRecursiveFn(arr) {
        if(arr.length === 0) {
            return; // 1
        } 
}

oddArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);