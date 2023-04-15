// https://school.programmers.co.kr/learn/courses/30/lessons/120846

// solution 1
function solution(n) {
  var answer = 0;

  for (let i = 4; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        answer++;
        break;
      }
    }
  }

  return answer;
}

// result
console.log(solution(10)); // 5
