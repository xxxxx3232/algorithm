// https://school.programmers.co.kr/learn/courses/30/lessons/120911

// solution 1
const solution = (my_string) => my_string.toLowerCase().split("").sort().join("");

// solution 2
function solution(s) {
  return [...s.toLowerCase()].sort().join(""); // 스프레드 연산자 사용
}

// result
console.log(solution("Bcad")); // "abcd"
