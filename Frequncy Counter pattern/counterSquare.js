let array1 = [1, 2, 3];
let array2 = [4, 1, 9];

function counterSquare(arr1, arr2) {
  let obj1 = {};
  for (let item of arr1) {
    obj1[item] = ++obj1[item] || 1;
  }

  let obj2 = {};
  for (let item of arr2) {
    let sqrtItem = Math.sqrt(item);
    obj2[sqrtItem] = ++obj2[sqrtItem] || 1;
  }

  console.log(shallowCompare(obj1, obj2));
  return shallowCompare(obj1, obj2);
}

counterSquare(array1, array2);

function shallowCompare(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  }
  for (let key of key1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
}
