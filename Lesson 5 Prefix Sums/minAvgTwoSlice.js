// 100%
function solution(A) {
  let best_start = 0;
  let min_avg = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < A.length; i++) {
    const two = (A[i - 1] + A[i]) / 2;
    let three = Number.MAX_SAFE_INTEGER;
    if (i + 1 < A.length) {
      three = (A[i - 1] + A[i] + A[i + 1]) / 3;
    }
    if (two < min_avg || three < min_avg) {
      if (two < three) {
        min_avg = two;
      } else {
        min_avg = three;
      }
      best_start = i - 1;
    }
  }
  return best_start;
}

// O(1) - space
// O(N) - time

// 80%
// function solution(A) {
//   let minAvg = Number.MAX_SAFE_INTEGER;
//   let bestStart = 0;
//   for (let i = 1; i < A.length; i++) {
//     const two = (A[i - 1] + A[i]) / 2;
//     let three = Number.MAX_SAFE_INTEGER;
//     if (i + 1 < A.length) {
//       three = (A[i - 1] + A[i] + A[i + 1]) / 3;
//     }
//     if (two < three && two < minAvg) {
//       minAvg = two;
//       bestStart = i - 1;
//     } else if (three < two && three < minAvg) {
//       minAvg = three;
//       bestStart = i - 1;
//     }
//   }
//   return bestStart;
// }

// O(1) - space
// O(N) - time

// 60%
// function solution(A) {
//   let minAvg = Number.MAX_SAFE_INTEGER;
//   let bestStart = 0;
//   for (let i = 0; i < A.length - 1; i++) {
//     let currentAvg = A[i];
//     for (let j = i + 1; j < A.length; j++) {
//       currentAvg += A[j];
//       let tmp = currentAvg / (j + 1 - i);
//       if (tmp < minAvg) {
//         minAvg = tmp;
//         bestStart = i;
//       }
//     }
//   }
//   return bestStart;
// }

// O(1) - space
// O(n^2) - time
