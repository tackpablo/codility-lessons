// %
function solution(H) {}

// O() - space
// O() - time

// 57%
function solution(H) {
  let stack = [];
  let count = 0;
  for (let wall of H) {
    if (stack.length == 0) {
      count = pushOntoStack(stack, wall, count);
    }
    let top = stack[stack.length - 1];
    if (wall === top) {
      continue;
    }
    while (wall < top) {
      stack.pop();
      top = stack[stack.length - 1] === undefined ? 0 : stack[stack.length - 1];
    }
    if (wall === top) {
      stack.pop();
    }
    if (wall > top) {
      count = pushOntoStack(stack, wall, count);
    }
  }
  return count;
}

function pushOntoStack(stack, element, count) {
  stack.push(element);
  return count + 1;
}

// O(1) - space
// O(m*n) - time
