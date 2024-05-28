const list = [3, 2, 1, 13, 8, 5, 0, 1];
const list2 = [105, 79, 100, 110];

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

const mergeSort = (list) => {
  const half = list.length / 2;
  const left = list.slice(0, half);
  const right = list.slice(half);

  if (list.length === 1) {
    return list;
  }
  return merge(mergeSort(left), mergeSort(right));
};

console.log(mergeSort(list));
console.log(mergeSort(list2));
