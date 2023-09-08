// https://school.programmers.co.kr/learn/courses/30/lessons/42862

// solution 1
function solution(n, lost, reserve) {
  let help = [];

  reserve.forEach((n) => {
    lost.includes(n - 1) && help.push(n - 1);
    if(help.includes())
    lost.includes(n + 1) && help.push(n + 1);
    if(lost.includes(n + 1) && lost.includes(n - 1)) {
      help.pop();
    } 
  });

  console.log(help)

  return n - lost.length + new Set(help).size;
}

// result
// console.log(solution(5, [2, 4], [3]));
// console.log(solution(5, [2, 4], [1, 3, 5]));
// console.log(solution(3, [3], [1]));
console.log(solution(5, [3, 5], [2, 4]));

// 5	[2, 4]	[1, 3, 5]	5
// 5	[2, 4]	[3]	4
// 3	[3]	[1]	2
