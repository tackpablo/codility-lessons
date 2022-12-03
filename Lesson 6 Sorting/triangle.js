// 100%
function solution(A) {
  if (A.length < 3) {
    return 0;
  } else {
    A.sort(function (a, b) {
      return a - b;
    });

    for (let i = 1; i < A.length - 1; i++) {
      if (A[i - 1] + A[i] > A[i + 1]) {
        if (A[i] + A[i + 1] > A[i - 1]) {
          if (A[i + 1] + A[i - 1] > A[i]) {
            return 1;
          }
        }
      }
    }
    return 0;
  }
}

// O(1) - space
// O(nlogn) - time
