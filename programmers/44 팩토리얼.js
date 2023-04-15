// https://school.programmers.co.kr/learn/courses/30/lessons/120848

// solution 1
function solution(n) {
  var answer = 0;

  const factorial = (f) => (f == 0 ? 1 : f * factorial(f - 1));

  for (let i = 1; i <= 10; i++) {
    if (factorial(i) <= n) {
      answer = i;
    }
  }

  return answer;
}

// solution 2
function solution(n) {
  let i = 1;
  let f = 1;
  while (f <= n) f *= ++i; // while을 통한 조건을 부여하고 증감연산자를 활용한 예
  return i - 1;
}

// solution 3
function solution(n) {
  for (let i = 1, v = 1; true; v *= ++i) if (v > n) return --i;
}

// result
console.log(solution(3628800)); // 10
