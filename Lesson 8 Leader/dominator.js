// 100%
function solution(A) {
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
  return A.indexOf(leader);
}

// O(1) - space
// O(n) - time
