function mergeSortedAlgo(array) {
    if(array.length <= 1) return array;

    let midPoint = Math.floor(array.length / 2);
    