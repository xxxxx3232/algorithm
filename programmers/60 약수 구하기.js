// https://school.programmers.co.kr/learn/courses/30/lessons/120897

// solution 1
function solution(n) {
  var answer = [];
  let i = 1;

  while (i <= n) {
    if (n % i == 0) {
      answer.push(i);
    }
    i++;
  }

  return answer;
}

// solution 2
function solution(n) {
  return Array(n) // 24개의 빈 배열 생성
    .fill(0) // 배열에 모두 0할당
    .map((_, i) => i)
    .filter((v) => n % v === 0);
}

// result
console.log(solution(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
