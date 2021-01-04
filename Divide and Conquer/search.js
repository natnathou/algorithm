//naive
function naiveSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }
}

// console.log(naiveSearch([1, 2, 3, 4, 5], 4));

function search(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let midlle = Math.floor((min + max) / 2);
    if (arr[midlle] < num) {
      min = midlle + 1;
    } else if (arr[midlle] > num) {
      max = midlle - 1;
    } else {
      return midlle;
    }
  }
}

console.log(search([1, 2, 3, 4, 5, 6], 4));
