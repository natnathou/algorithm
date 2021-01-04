//naive
function counterUniqueValue(arr) {
  let obj = {};
  for (let i of arr) {
    obj[i] = ++obj[i] || 1;
  }
  return Object.keys(obj).length;
}

console.log(counterUniqueValue([1, 1, 1, 1, 4, 5, 6, 7]));

//refractor
function counterUniqueValuePointer(arr) {
  if (arr.length === 0) return 0;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(counterUniqueValuePointer([1, 1, 1, 1, 4, 5, 6, 7]));
