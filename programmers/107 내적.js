// https://school.programmers.co.kr/learn/courses/30/lessons/70128

// solution 1
function solution(a, b) {
  let result = 0;

  for (let i = 0; i < a.length; i++) {
    result += a[i] * b[i];
  }

  return result;
}

// solution 2
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}

// result
console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));
// [1,2,3,4]	[-3,-1,0,2]	3
