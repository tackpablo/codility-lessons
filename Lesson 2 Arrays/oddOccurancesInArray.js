// 88%
function solution(A) {
  const map = {};
  for (let el of A) {
    if (!(el in map)) {
      // might be slower compared to hasOwnProperty function
      map[el.toString()] = 0;
    }
    map[el.toString()]++;
    if (map[el.toString()] == 2) {
      delete map[el.toString()];
    }
  }
  return +Object.keys(map)[0];
}

// O(n) - space
// O(n) - time

// // 100% Example
// function solution(A) {
//   const map = {};
//   for (let el of A) {
//     if (!(el in map)) {
//       map[el.toString()] = 1;
//     } else {
//       delete map[el.toString()];
//     }
//   }
//   return +Object.keys(map)[0];
// }

// O(n) - space
// O(n) - time

// // 100% Example
// function solution(A) {
//   stack = new Object();
//   for (let i = 0; i < A.length; i++) {
//     if (stack.hasOwnProperty(A[i])) {
//       delete stack[A[i]];
//     } else {
//       stack[A[i]] = 1;
//     }
//   }
//   solution = Object.keys(stack).length;
//   return parseInt(solution);
// }

// O(n) - space
// O(n) - time
