// https://school.programmers.co.kr/learn/courses/30/lessons/120854

// solution 1
const solution = (strlist) => strlist.map((n) => n.length);

// solution 2
function solution(strlist) {
  return strlist.reduce((a, b) => [...a, b.length], []);
}

// result
console.log(solution(["We", "are", "the", "world!"])); // [2, 3, 3, 6]
