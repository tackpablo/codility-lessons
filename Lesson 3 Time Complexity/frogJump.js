// 100%
function solution(X, Y, D) {
  return X === Y ? 0 : Math.ceil((Y - X) / D);
}

// O(1) - space
// O(1) - time
