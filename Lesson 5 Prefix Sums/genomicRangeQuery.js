// 100%
function solution(S, P, Q) {
  let result = [];
  let dna = "";
  for (let i = 0; i < P.length; i++) {
    dna = S.slice(P[i], Q[i] + 1);

    if (dna.indexOf("A") !== -1) {
      result.push(1);
    } else if (dna.indexOf("C") !== -1) {
      result.push(2);
    } else if (dna.indexOf("G") !== -1) {
      result.push(3);
    } else {
      result.push(4);
    }
  }
  return result;
}

// O(n) - space
// O(n^2) - time

// 37%
// function solution(S, P, Q) {
//   let result = [];
//   let impact = { A: 1, C: 2, G: 3, T: 4 };
//   for (let i = 0; i < P.length; i++) {
//     result.push(Math.min(impact[S[P[i]]], impact[S[Q[i]]]));
//   }
// }

// O(n) - space
// O(n) - time
