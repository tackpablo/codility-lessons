// 100%
function solution(A) {
  let count = 0;
  let equileaderCount = 0;
  let leader = findLeader(A);
  let map = {};
  for (let i = 0; i < A.length; i++) {
    if (A[i] == leader) {
      count++;
    }
    map[i.toString()] = count;
  }
  for (let i = 1; i < A.length; i++) {
    let firstHalf = map[(i - 1).toString()];
    let secondHalf = map[(A.length - 1).toString()] - firstHalf;
    if (
      firstHalf > Math.floor(i / 2) &&
      secondHalf > Math.floor((A.length - i) / 2)
    ) {
      equileaderCount++;
    }
  }

  return equileaderCount;
}

function findLeader(A) {
  let count = 0;
  let value;
  for (let i = 0; i < A.length; i++) {
    if (count === 0) {
      count += 1;
      value = A[i];
    } else {
      if (value !== A[i]) {
        count -= 1;
      } else {
        count += 1;
      }
    }
  }
  let candidate = -1;
  if (count > 0) {
    candidate = value;
  }
  let leader = -1;
  count = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === candidate) {
      count += 1;
    }
  }
  if (count > Math.floor(A.length / 2)) {
    leader = candidate;
  }
  if (leader === -1) {
    return leader;
  }
  return leader;
}

// O(n) - space
// O(n) - time

// 44%
// function solution(A) {
//   let count = 0;
//   let map = {};
//   for (let a of A) {
//     if (!(a.toString() in map)) {
//       map[a.toString()] = 0;
//     }
//     map[a.toString()] += 1;
//   }
//   let leader = Object.keys(map).reduce((pre, cur) => {
//     return map[pre] > cur[pre] ? pre : cur;
//   });
//   for (let i = 1; i < A.length; i++) {
//     let firstHalf = A.slice(0, i);
//     let secondHalf = A.slice(i);
//     let innerMap = {};
//     for (let el of firstHalf) {
//       if (!(el.toString() in innerMap)) {
//         innerMap[el.toString()] = 0;
//       }
//       innerMap[el.toString()] += 1;
//     }
//     if (innerMap[leader.toString()] > Math.floor(firstHalf.length / 2)) {
//       let remainder = map[leader.toString()] - innerMap[leader.toString()];
//       if (remainder > Math.floor(secondHalf.length / 2)) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// }

// O(n) - space
// O(n^2) - time

// // 57%
// function solution(A) {
//   let count = 0;
//   for (let i = 1; i < A.length; i++) {
//     let firstArray = A.slice(0, i);
//     let endArray = A.slice(i, A.length);
//     let firstArrayCheck = findLeader(firstArray);
//     let endArrayCheck = findLeader(endArray);
//     if (
//       firstArrayCheck === endArrayCheck &&
//       firstArrayCheck !== -1 &&
//       endArrayCheck !== -1
//     ) {
//       count += 1;
//     }
//   }
//   return count;
// }

// function findLeader(A) {
//   let count = 0;
//   let value;
//   for (let i = 0; i < A.length; i++) {
//     if (count === 0) {
//       count += 1;
//       value = A[i];
//     } else {
//       if (value !== A[i]) {
//         count -= 1;
//       } else {
//         count += 1;
//       }
//     }
//   }
//   let candidate = -1;
//   if (count > 0) {
//     candidate = value;
//   }
//   let leader = -1;
//   count = 0;
//   for (let i = 0; i < A.length; i++) {
//     if (A[i] === candidate) {
//       count += 1;
//     }
//   }
//   if (count > Math.floor(A.length / 2)) {
//     leader = candidate;
//   }
//   if (leader === -1) {
//     return leader;
//   }
//   return leader;
// }

// // O(1) - space
// // O(n^2) - time
