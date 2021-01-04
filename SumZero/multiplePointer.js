function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left++;
    } else {
      return [arr[left], arr[right]];
    }
  }
}

console.log(sumZero([1, 2, 4, -2, 4]));
