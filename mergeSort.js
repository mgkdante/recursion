const list = [3, 2, 1, 13, 8, 5, 0, 1];
const list2 = [105, 79, 100, 110];

//merge function to merge lists as they are broken down
const merge = (left, right) => {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
};

//break down lists
const mergeSort = (list) => {
  //merge sorted broken down lists
  return list.length === 1
    ? list
    : merge(
        mergeSort(list.slice(0, list.length / 2)),
        mergeSort(list.slice(list.length / 2)),
      );
};

console.log(mergeSort(list));
console.log(mergeSort(list2));
