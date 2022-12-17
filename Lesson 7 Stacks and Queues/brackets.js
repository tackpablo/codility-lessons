// 100%
function solution(S) {
  let brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let stack = [];

  if (S.length <= 0) {
    return 1;
  }

  if (Object.values(brackets).includes(S[0])) {
    return 0;
  }

  for (let bracket of S) {
    if (bracket in brackets) {
      stack.push(bracket);
    } else {
      let pop = stack[stack.length - 1];
      if (brackets[pop] === bracket) {
        stack.pop();
      }
    }
  }

  if (stack.length === 0) {
    return 1;
  }
  return 0;
}

// O(n) - space
// O(n) - time

// 87%
function solution(S) {
  let brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let stack = [];

  if (S.length <= 0) {
    return 1;
  }

  if (Object.values(brackets).includes(S[0])) {
    return 0;
  }

  for (let bracket of S) {
    if (bracket in brackets) {
      stack.push(bracket);
    } else {
      let pop = stack[stack.length - 1];
      if (brackets[pop] === bracket) {
        stack.pop();
      }
    }
  }

  if (stack.length === 0) {
    return 1;
  }
  return 0;
}

// O(n) - space
// O(n) - time
