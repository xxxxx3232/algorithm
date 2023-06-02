// https://school.programmers.co.kr/learn/courses/30/lessons/132267

// solution 1
function solution(a, b, n) {
  let result = 0;

  while (n >= a) {
    result += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }

  return result;
}

// solution 2
solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;

// result
console.log(solution(2, 1, 20));
// 2	1	20	19
