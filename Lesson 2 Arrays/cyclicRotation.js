// 87%
// function solution(A, K) {
//   if (A.length === K) {
//     return A;
//   }

//   const index = A.length - K;

//   const end = A.slice(index);
//   const start = A.slice(0, index);
//   const combined = [...end, ...start];
//   return combined;
// }

// 100%
function solution(A, K) {
  K = K % A.length;

  if (K === 0 || K === A.length) {
    return A;
  }

  const sliceIndex = A.length - K;
  return [...A.slice(sliceIndex), ...A.slice(0, sliceIndex)];
}

// O(n) - space
// O(n) - time
