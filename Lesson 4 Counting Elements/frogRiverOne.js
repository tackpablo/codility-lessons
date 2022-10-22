// 100%
function solution(X, A) {
  let set = new Set();

  for (let i = 0; i < A.length; i++) {
    set.add(A[i]);
    if (set.size === X) return i;
  }

  return -1;
}

// O(n) - space
// O(n) - time

// 100%
// function solution(X, A) {
//   const nums = new Set();

//   for (let i = 1; i <= X; i++) {
//     nums.add(i);
//   }

//   for (let j = 0; j < A.length; j++) {
//     nums.delete(A[j]);

//     if (nums.size === 0) {
//       return j;
//     }
//   }

//   return -1;
// }

// O(n) - space
// O(n) - time
