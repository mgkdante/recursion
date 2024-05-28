//iterative solution
const fibs = (n) => {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      arr.push(0);
    } else if (i <= 2) {
      arr.push(1);
    } else {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
  }
  return arr;
};

console.log(fibs(8));

//Recursive solution
const fibsRec = (n) => {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0, 1];
  }
  const sequence = fibsRec(n - 1);
  const nextValue =
    sequence[sequence.length - 1] + sequence[sequence.length - 2];
  return [...sequence, nextValue];
};

console.log(fibsRec(8));
