// https://school.programmers.co.kr/learn/courses/30/lessons/68935

// solution 1
function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3); // parseInt()는 문자열을 10진법으로 표현한다. toString(n)은 숫자를 해당 n진법의 문자열로 바꾼다.
}

// result
console.log(solution(45));
// 45	7
