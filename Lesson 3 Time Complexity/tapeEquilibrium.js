//
function solution(A) {
  let totalSum = A.reduce(function (a, b) {
    return a + b;
  }, 0);

  let leftSide = 0;
  let min = Number.MAX_VALUE;

  for (let i = 1; i < A.length; i++) {
    if (min === 0) return 0;

    leftSide += A[i - 1];
    let rightSide = totalSum - leftSide;
    min = Math.min(Math.abs(leftSide - rightSide), min);
  }

  return min;
}

// O(n) - space
// O(n) - time
