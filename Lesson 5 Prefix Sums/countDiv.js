// 100%
function solution(A, B, K) {
  let count = A % K == 0 ? 1 : 0;
  return count + (Math.floor(B / K) - Math.floor(A / K));
}

// O(1) - space
// O(1) - time

// 50%
function solution(A, B, K) {
  let count = 0;

  for (let i = A; i <= B; i++) {
    if (i % K === 0) {
      count++;
    }
  }

  return count;
}

// O(1) - space
// O(n) - time
