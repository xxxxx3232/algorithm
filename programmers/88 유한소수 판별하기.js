// https://school.programmers.co.kr/learn/courses/30/lessons/120878

// solution 1
function solution(a, b) {
  const factorArray = [];

  const gg = (a, b) => {
    // 최대 공약수 구하는 함수
    if (b === 0) {
      return a;
    } else {
      return gg(b, a % b);
    }
  };

  let highNum = gg(a, b); // 최대 공약수
  let factor = b / highNum; // 소인수를 구할 값

  for (let i = 2; i <= factor; i++) {
    // 소인수 구하는 함수
    while (factor % i == 0) {
      factorArray.push(i);
      factor /= i;
    }
  }

  return factorArray.some((n) => n != 2 && n != 5) ? (b / highNum == 1 ? 1 : 2) : 1; // 소인수가 2, 5인지 확인
}

// solution 2
function solution(a, b) {
  let n = 1;
  for (let i = 1; i <= Math.min(a, b); i++) {
    // 최대 공약수 구하는 for문
    if (a % i === 0 && b % i === 0) n = i;
  }

  b /= n;
  while (b % 2 === 0) b /= 2; // 2, 5 소인수로 최대한 나누고 값이 1이 되면 유한소수
  while (b % 5 === 0) b /= 5;

  return b === 1 ? 1 : 2;
}

// solution 3
function solution(a, b) {
  return Number((a / b).toFixed(10)) == a / b ? 1 : 2; // 소수점 자릿수를 10으로 제한하여 분별
}

// result
console.log(solution(1, 30)); // 1
