// 100%
function solution(A) {
  let count = 0;
  let sum = 0;
  for (let el of A) {
    if (el === 0) {
      count++;
    } else {
      sum += count;
    }
  }
  return sum < 1_000_000_000 ? sum : -1;
}

// O(n) - space
// O(n) - time
