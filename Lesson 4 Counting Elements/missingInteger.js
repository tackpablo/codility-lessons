// 100%
function solution(A) {
  const set = new Set(A);
  let min = 1;
  for (let el of A) {
    if (el < 0) {
      continue;
    } else {
      if (set.has(min)) {
        min++;
      } else {
        return min;
      }
    }
  }
  return min;
}

// O(n) - space
// O(n) - time

// 33%
// function solution(A) {
//   const arr = A.sort((a, b) => a - b);
//   let min = 1;
//   if (arr[arr.length - 1] <= 0) {
//     return min;
//   }
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     if (arr[i] - arr[i - 1] > 1) {
//       return arr[i - 1] + 1;
//     }
//   }
//   return arr[n - 1] + 1;
// }

// O(n) - space
// O(n) - time
