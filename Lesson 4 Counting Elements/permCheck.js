// 100%
function solution(A) {
  if (new Set(A).size !== A.length) {
    return 0;
  }
  const maxNum = Math.max(...A);

  if (maxNum === A.length) {
    return 1;
  }

  return 0;
}

// O(n) - space
// O(n) - time
