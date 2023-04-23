// https://school.programmers.co.kr/learn/courses/30/lessons/120908

// solution 1
const solution = (str1, str2) => (str1.includes(str2) ? 1 : 2);

// solution 2
function solution(str1, str2) {
  return str1.split(str2).length > 1 ? 1 : 2;
}

// solution 3
function solution(str1, str2) {
  return str1.indexOf(str2) === -1 ? 2 : 1;
}

// result
console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD")); // 1
