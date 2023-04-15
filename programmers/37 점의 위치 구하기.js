// https://school.programmers.co.kr/learn/courses/30/lessons/120841

// solution 1
const division = (n) => (n > 0 ? 0 : 1);
const solution = (dot) =>
  division(dot[0]) + division(dot[1]) == 0 ? 1 : division(dot[0]) + division(dot[1]) == 2 ? 3 : division(dot[0]) == 1 && division(dot[1]) == 0 ? 2 : 4;

// solution 2
function solution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2; // 구조분해를 통해 가독성을 높인 케이스
}

// solution 3
function solution(dot) {
  return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
}

// result
console.log(solution([-2, 4])); // 2
