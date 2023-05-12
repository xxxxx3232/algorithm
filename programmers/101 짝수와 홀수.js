// https://school.programmers.co.kr/learn/courses/30/lessons/12937

// solution 1
function solution(num) {
  return num % 2 == 0 ? "Even" : "Odd";
}

// solution 2
function solution(num) {
  return num % 2 ? "Even" : "Odd"; // 0은 false이고 그 외 숫자는 true이다.
}

// result
console.log(solution(3));
// 3	"Odd"
