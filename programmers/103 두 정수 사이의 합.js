// https://school.programmers.co.kr/learn/courses/30/lessons/12912

// solution 1
function solution(a, b) {
  let [c, d] = a < 0 && b < 0 ? [a, b].sort((a, b) => a - b) : [a, b].sort();
  return ((d + 1) * d) / 2 - (c * (c - 1)) / 2;
}

// solution 2
function adder(a, b) {
  return ((a + b) * (Math.abs(a - b) + 1)) / 2; // 가우스 공식 응용
}

// result
console.log(solution(-5, -3));
// 3	5	12
