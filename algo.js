const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 1)); // Вызываем функцию

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
 
console.log(binarySearch(array, 2));