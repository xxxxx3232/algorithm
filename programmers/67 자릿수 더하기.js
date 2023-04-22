// https://school.programmers.co.kr/learn/courses/30/lessons/120906

// solution 1
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => ~~acc + ~~cur, 0);
}

// result
console.log(solution(1234)); // 10
