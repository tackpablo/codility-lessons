// 100%
// def solution(A, B):
//     count = 0
//     ind = 0
//     currentDownStreamFish = []

//     while ind < len(B) and B[ind] != 1:
//         # All these fish will not meet another fish
//         count += 1
//         ind+=1
//     if(ind >= len(B)):
//         return count

//     # append the size of the downstream fish
//     currentDownStreamFish.append(A[ind])
//     for i in range(ind+1, len(A)):
//         if B[i] == 1:
//             currentDownStreamFish.append(A[i])
//             continue
//         elif B[i] == 0 and len(currentDownStreamFish) == 0:
//             count += 1
//         else:
//             # if the next fish is bigger, pop off currentDownstreamFish until its not bigger anymore
//             while len(currentDownStreamFish) > 0 and A[i] > currentDownStreamFish[-1]:
//                 currentDownStreamFish.pop()
//                 if len(currentDownStreamFish) == 0:
//                     # the fish ate all the downstream fish, so he survives
//                     count += 1
//                     break
//     return count + len(currentDownStreamFish)

// O(n) - space
// O(n) - time

// // 87%
// function solution(A, B) {
//   let fish1Index = 0;
//   let fish2Index = 1;

//   while (fish2Index < B.length) {
//     if (B[fish1Index] === 1 && B[fish2Index] === 0) {
//       if (A[fish1Index] > A[fish2Index]) {
//         B.splice(fish2Index, 1);
//         A.splice(fish2Index, 1);
//       } else {
//         B.splice(fish1Index, 1);
//         A.splice(fish1Index, 1);
//         fish1Index--;
//         fish2Index--;
//       }
//     } else {
//       fish1Index = fish2Index;
//       fish2Index++;
//     }
//   }
//   return B.length;
// }

// // O(1) - space
// // O(n) - time

// // 37%
// function solution(A, B) {
//   let count = B.length;
//   let fish1Index = 0;
//   let fish2Index = 1;

//   while (fish1Index < B.length || fish2Index < B.length) {
//     if (B[fish1Index] === 1 && B[fish2Index] === 0) {
//       if (A[fish1Index] > A[fish2Index]) {
//         fish2Index++;
//       } else {
//         fish1Index = fish2Index;
//         fish2Index++;
//       }
//       count--;
//     } else {
//       fish1Index = fish2Index; //
//       fish2Index++;
//     }
//   }
//   return count;
// }

// // O(1) - space
// // O(n) - time

// // 37%
// function solution(A, B) {
//   let count = B.length;
//   let fish1Index = 0;
//   let fish2Index = 1;

//   while (fish1Index < B.length || fish2Index < B.length) {
//     if (B[fish1Index] === 1 && B[fish2Index] === 0) {
//       if (A[fish1Index] > A[fish2Index]) {
//         fish2Index++;
//       } else {
//         fish1Index = fish2Index;
//         fish2Index++;
//       }
//       count--;
//     } else {
//       fish1Index++;
//       fish2Index++;
//     }
//   }
//   return count;
// }

// // O(1) - space
// // O(n) - time
