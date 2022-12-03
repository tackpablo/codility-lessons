// 100%
function solution(A) {
  A.sort(function (a, b) {
    return a - b;
  });
  const firstThree = A[0] * A[1] * A[2];
  const lastThree = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
  const mixed = A[0] * A[1] * A[A.length - 1];

  return Math.max(firstThree, lastThree, mixed);
}

// O(1) - space
// O(nlogn) - time

// 44%
// function solution(A) {
//   const sortedA = A.sort(function (a, b) {
//     return a - b;
//   });
//   return A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
// }

// O(n) - space
// O(n) - time
