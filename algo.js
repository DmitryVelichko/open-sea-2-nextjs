function mergeSortedAlgo(array) {
    if(array.length <= 1) return array;

    let midPoint = Math.floor(array.length / 2);
    let leftArray = mergeSortedAlgo(array.slice(0, midPoint));
    let rightArray = mergeSortedAlgo(array.slice(midPoint));

    return mergeSortedArray(leftArray, rightArray);
}