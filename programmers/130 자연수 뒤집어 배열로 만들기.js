// https://school.programmers.co.kr/learn/courses/30/lessons/12932

// solution 1
function solution(n) {
  return String(n)
    .split("")
    .reverse()
    .map((n) => +n);
}

// solution 2
function solution(n) {
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}

// result
console.log(solution(12345));
// 12345	[5,4,3,2,1]
