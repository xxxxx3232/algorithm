// 문제 설명
// 정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 100

// 입출력 예
// n	result
// 10	[1, 3, 5, 7, 9]
// 15	[1, 3, 5, 7, 9, 11, 13, 15]

// 입출력 예 설명
// 입출력 #1
// 10 이하의 홀수가 담긴 배열 [1, 3, 5, 7, 9]를 return합니다.

// 입출력 #2
// 15 이하의 홀수가 담긴 배열 [1, 3, 5, 7, 9, 11, 13, 15]를 return합니다.

function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 1) {
      answer.push(i);
    }
  }
  return answer;
}

// 다른 사람의 풀이 1
function solution(n) {
  var answer = [];

  for (let i = 1; i <= n; i += 2) answer.push(i);

  return answer;
}

// 다른 사람의 풀이 2
const solution = (n) => Array.from({ length: n }, (_, i) => i + 1).filter((i) => i % 2 !== 0);

// 다른 사람의 풀이 3
function solution(n) {
  return Array(n)
    .fill(1)
    .map((v, i) => v + i)
    .filter((v) => v % 2 === 1);
}
