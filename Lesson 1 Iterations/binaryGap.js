// 100%
function solution(N) {
  const binary = N.toString(2);
  let count = 0;
  let max = 0;

  for (let char of binary) {
    if (char === "1") {
      max = Math.max(count, max);
      count = 0;
    } else {
      count++;
    }
  }

  return max;
}

// O(1) - space
// O(n) - time
