// https://school.programmers.co.kr/learn/courses/30/lessons/120898

// solution 1
const solution = (message) => [...message].length * 2;

// solution 2
function solution(message) {
  return message.length * 2; // 문자열은 배열처럼 취급하여 length를 사용할 수 있다.
}

// reseult
console.log(solution("happy birthday!")); // 30
