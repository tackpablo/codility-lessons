// 100%
function solution(N, A) {
  const counters = Array(N).fill(0);
  let maxCounter = 0;
  let maxToSet = 0;

  for (let pos of A) {
    const ind = pos - 1;

    if (ind === N) {
      maxToSet = maxCounter;
    } else {
      counters[ind] = Math.max(counters[ind] + 1, maxToSet + 1);
      maxCounter = Math.max(counters[ind], maxCounter);
    }
  }

  return counters.map((val) => Math.max(val, maxToSet));
}

// O(n) - space
// O(n) - time

// // 22%
// function solution(N, A) {
//   let result = Array(N).fill(0);
//   let maxCount = 0;

//   for (let i = 0; i < A.length; i++) {
//     if (A[i] === N + 1) {
//       result = Array(N).fill(maxCount);
//     } else {
//       result[A[i] - 1]++;
//       maxCount = result[A[i] - 1];
//     }
//   }
//   return result;
// }

// O(n) - space
// O(n) - time
