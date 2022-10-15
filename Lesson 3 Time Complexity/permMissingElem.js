// 100%
function solution(A) {
  const n = A.length;
  let sum = 0;

  for (let i = 1; i <= n + 1; i++) {
    sum += i;
  }

  for (let v of A) {
    sum -= v;
  }

  return sum;
}

// O(n) - space
// O(n) - time
