// https://school.programmers.co.kr/learn/courses/30/lessons/120909

// solution 1
function solution(n) {
  let i = 1;

  while (n / i >= i) {
    if (n / ++i == i) return 1;
  }

  return 2;
}

// solution 2
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2; // isInteger() 정수인지 판별, sqrt() 제곱수 반환F
}

// result
console.log(solution(144)); // 1
